from sqlalchemy.orm import Session
from models import Book, Reader
from schemas import BookBase, ReaderBase


def get_books(database: Session, skip: int = 0, limit: int = 10):
    return database.query(Book).offset(skip).limit(limit).all()  # type: ignore


def create_book(database: Session, book: BookBase):
    new_book = Book(**book.dict())
    database.add(new_book)
    database.commit()
    database.refresh(new_book)
    return new_book


def get_readers(database: Session, skip: int = 0, limit: int = 10):
    return database.query(Reader).offset(skip).limit(limit).all()  # type: ignore


def create_reader(database: Session, reader: ReaderBase):
    new_reader = Reader(**reader.dict())
    database.add(new_reader)
    database.commit()
    database.refresh(new_reader)
    return new_reader
