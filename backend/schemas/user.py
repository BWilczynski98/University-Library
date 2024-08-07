from pydantic import BaseModel
from fastapi import Form


class UserBase(BaseModel):
    email: str = Form()
    first_name: str = Form()
    last_name: str = Form()
    password: str = Form()
