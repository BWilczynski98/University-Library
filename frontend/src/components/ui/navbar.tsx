import Link from "next/link"
import { Avatar, AvatarImage } from "./avatar"
import { buttonVariants } from "./button"

export const Navbar = () => {
    return (
        <nav className="border-b border-b-slate-200 py-4 px-12 flex justify-between items-center mb-10">
            <div>
                <Link href="/dashboard">
                    <img src="https://www.canterburypilgrimages.com/wp-content/uploads/2021/04/dummy-logo-5b.png" className="h-12 w-auto" />
                </Link>
            </div>
            <div className="flex items-center space-x-10">
                <div>
                    <Link className={buttonVariants({ variant: "link" })} href="/">Library</Link>
                    <Link className={buttonVariants({ variant: "link" })} href="/">Orderds</Link>
                    <Link className={buttonVariants()} href="/">Order A New Book</Link>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <Avatar>
                            <AvatarImage src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" />
                        </Avatar>
                        <p>Jan Kowalski</p>
                    </div>
                </div>
            </div>


        </nav>
    )
}  