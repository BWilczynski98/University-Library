from pydantic import BaseModel
from fastapi import Form


class BookBase(BaseModel):
    title: str = Form()
    author: str = Form()
    genre: str = Form()
    year: str = Form()
    description: str | None = Form(None)
    isbn: str = Form()


class Book(BookBase):
    id: int

    class Config:
        orm_mode = True


class ReaderBase(BaseModel):
    first_name: str = Form()
    last_name: str = Form()
    email: str = Form()


class Reader(ReaderBase):
    id: int

    class Config:
        orm_mode = True
