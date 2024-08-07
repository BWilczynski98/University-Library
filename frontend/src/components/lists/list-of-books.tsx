import { BookTile } from "../tiles"

export type Book = {
    title: string
    author: string
    isbn: number
    coverUrl: string
    genre: string
    publisher: string
    binding: string
    type: string
    pages: number
    year: number
    language: string
    available: boolean
}

type Props = {
    data: Book[]
}

export const ListOfBooks = ({ data }: Props) => {
    return (<div className="space-y-2">{data.map((book, index) => <BookTile key={index} book={book} />)}</div>)
}