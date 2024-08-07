import { Input } from "./input"
import { Search } from "lucide-react"

export const SearchBar = () => {
    return (
        <div>
            <Input placeholder="Find a book by title or ISBN number" className="w-2/3" startIcon={Search} />
        </div>
    )
}