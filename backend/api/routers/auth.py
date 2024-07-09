from enum import Enum
from typing import Annotated
from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from models.user import Users
from schemas.user import UserBase
from schemas.auth import Token
from db.database import get_db
from core.security import (
    authenticate_user,
    create_access_token,
    bcrypt_context,
)


class AuthApiEndpoints(Enum):
    REGISTRATION = "/registration"
    LOGIN = "/login"


router = APIRouter(prefix="/auth", tags=["auth"])
oauth2_bearer = OAuth2PasswordBearer(tokenUrl="auth/token")
db_dependency = Annotated[Session, Depends(get_db)]


@router.post(AuthApiEndpoints.REGISTRATION.value, status_code=status.HTTP_201_CREATED)
async def creat_user(db: db_dependency, payload: UserBase):
    new_user_model = Users(
        email=payload.email,
        first_name=payload.first_name,
        last_name=payload.last_name,
        password=bcrypt_context.hash(payload.password),
    )  # type: ignore

    if db.query(Users).filter(Users.email == new_user_model.email).first():  # type: ignore
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="User already have account",
            headers={"WWW-Authenticate": "Bearer"},
        )
    db.add(new_user_model)
    db.commit()
    db.refresh(new_user_model)
    return {"message": "User account successfully created"}


@router.post(AuthApiEndpoints.LOGIN.value, response_model=Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency
):
    user = authenticate_user(
        email=form_data.username, password=form_data.password, db=db
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate user.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=15)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")
