import { ListOfBooks } from "@/components/lists/list-of-books";
import { SearchBar } from "@/components/ui/search-bar";

const books = [
  {
      title: "Wiedźmin: Ostatnie życzenie",
      author: "Andrzej Sapkowski",
      isbn: 9788375780635,
      coverUrl: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/the-last-wish-b-iext156923777.jpg",
      genre: "Fantasy",
      publisher: "SuperNowa",
      binding: "Miękka",
      type: "Książka",
      pages: 320,
      year: 1993,
      language: "Polski",
      available: true
  },
  {
      title: "Pan Tadeusz",
      author: "Adam Mickiewicz",
      isbn: 9788373271899,
      coverUrl: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/pan-tadeusz-lektura-z-opracowaniem-b-iext124284659.jpg",
      genre: "Fantasy",
      publisher: "Wydawnictwo Literackie",
      binding: "Twarda",
      type: "Książka",
      pages: 340,
      year: 1834,
      language: "Polski",
      available: false
  },
  {
      title: "Lalka",
      author: "Bolesław Prus",
      isbn: 9788307022803,
      coverUrl: "https://ecsmedia.pl/cdn-cgi/image/format=webp,/c/lalka-wydanie-z-opracowaniem-b-iext136842952.jpg",
      genre: "Fantasy",
      publisher: "Państwowy Instytut Wydawniczy",
      binding: "Twarda",
      type: "Książka",
      pages: 688,
      year: 1890,
      language: "Polski",
      available: true
  },
  {
      title: "Zbrodnia i kara",
      author: "Fiodor Dostojewski",
      isbn: 9788373162364,
      coverUrl: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/zbrodnia-i-kara-b-iext159416770.jpg",
      genre: "Fantasy",
      publisher: "MG",
      binding: "Miękka",
      type: "Książka",
      pages: 576,
      year: 1866,
      language: "Polski",
      available: true
  },
  {
      title: "Hobbit, czyli tam i z powrotem",
      author: "J.R.R. Tolkien",
      isbn: 9780261103344,
      coverUrl: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/hobbit-czyli-tam-i-z-powrotem-b-iext158331938.jpg",
      genre: "Fantasy",
      publisher: "HarperCollins",
      binding: "Miękka",
      type: "Książka",
      pages: 310,
      year: 1937,
      language: "Angielski",
      available: false
  },
  {
      title: "1984",
      author: "George Orwell",
      isbn: 9780451524935,
      coverUrl: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/1984-b-iext159394711.jpg",
      genre: "Fantasy",
      publisher: "Signet Classic",
      binding: "Miękka",
      type: "Książka",
      pages: 328,
      year: 1949,
      language: "Angielski",
      available: true
  }
];

export default function DashboardPage() {
  return (
    <>
      <SearchBar />
      <ListOfBooks data={books} />
    </>
  );
}
