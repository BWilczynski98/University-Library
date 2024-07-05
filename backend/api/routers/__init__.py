from fastapi import FastAPI
from .auth import router as auth_router

all_routers = [auth_router]


def include_all_routers(app: FastAPI):
    for router in all_routers:
        app.include_router(router)
