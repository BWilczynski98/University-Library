from fastapi import FastAPI
from api.routers import include_all_routers
from db.database import Base, engine, SessionLocal


app = FastAPI()
Base.metadata.create_all(bind=engine)  # type: ignore
include_all_routers(app)
