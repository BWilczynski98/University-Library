import crud
from typing import List
from fastapi import FastAPI, Depends
from database import Base, engine, SessionLocal
from sqlalchemy.orm import Session
from schemas import Book as BookSchema, BookBase, Reader as ReaderSchema, ReaderBase

app = FastAPI()
Base.metadata.create_all(bind=engine)  # type: ignore


def get_database():
    database = SessionLocal()
    try:
        yield database
    finally:
        database.close()


@app.get("/books/", response_model=List[BookSchema])
def read_books(
    skip: int = 0, limit: int = 10, database: Session = Depends(get_database)
):
    books = crud.get_books(database, skip, limit)
    return books


@app.post("/books/", response_model=BookSchema)
def create_book(book: BookBase, database: Session = Depends(get_database)):
    return crud.create_book(database, book)


@app.get("/readers/", response_model=List[ReaderSchema])
def read_readers(
    skip: int = 0, limit: int = 10, database: Session = Depends(get_database)
):
    return crud.get_readers(database, skip, limit)


@app.post("/readers/", response_model=ReaderSchema)
def create_reader(reader: ReaderBase, database: Session = Depends(get_database)):
    return crud.create_reader(database, reader)
