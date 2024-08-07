import type { Book } from "../lists/list-of-books"
import Image from "next/image"
import { Button } from "../ui/button"
import React from "react"
import { Heart } from "lucide-react"

type Props = {
    book: Book
}

const RowDetail = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <span className="font-semibold">{children}</span>
}

export const BookTile = ({ book }: Props) => {
    return (
        <div className="bg-slate-100 py-4 px-6 flex space-x-8 rounded-md">

            <div>
                <Image
                    src={book.coverUrl}
                    alt={book.title}
                    width={120}
                    height={0}
                />
            </div>
            <div className="w-full flex justify-between">
                <div className="space-y-4">
                    <div>
                        <p className="font-semibold text-lg">
                            {book.title}
                        </p>
                        <p className="font-medium">
                            {book.author}
                        </p>
                    </div>
                    <div className="text-xs">
                        <p>Gatunek: <RowDetail>{book.genre}</RowDetail></p>
                        <p>Rok wydania: <RowDetail>{book.year}</RowDetail></p>
                        <p>Wydawnictwo: <RowDetail>{book.publisher}</RowDetail></p>
                        <p>Oprawa: <RowDetail>{book.binding}</RowDetail></p>
                        <p>Typ: <RowDetail>{book.type}</RowDetail></p>
                        <p>Liczba stron: <RowDetail>{book.pages}</RowDetail></p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-end">
                    <div>
                        <Heart className="hover:cursor-pointer duration-150" />
                    </div>
                    <Button>Check available dates</Button>
                </div>
            </div>

        </div>
    )
}