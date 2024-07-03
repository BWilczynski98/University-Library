from sqlalchemy import Column, Integer, String
from database import Base


class Book(Base):
    __tablename__ = "Books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    author = Column(String, index=True)
    genre = Column(String, index=True)
    year = Column(String, index=True)
    description = Column(String)
    isbn = Column(String, index=True)


class Reader(Base):
    __tablename__ = "Readers"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, index=True)
