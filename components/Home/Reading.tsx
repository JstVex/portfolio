import Image from "next/image";
import Section from "../Layouts/Section";

const books = [
    {
        title: "The Book of Eels",
        author: "Patrik Svensson",
        image: "https://onedrive.live.com/embed?resid=3616EC68410FC656%21794&authkey=%21AKqA8BWG8M87Wj8&width=576&height=864",
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        image: "https://onedrive.live.com/embed?resid=3616EC68410FC656%21794&authkey=%21AKqA8BWG8M87Wj8&width=576&height=864",
    }
]
const Reading = () => {
    return (
        <Section title="Reading">
            {books.map((book) => (
                <li key={book.title} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            width={48}
                            height={48}
                            src={book.image}
                            alt={book.title}
                            className="w-12 h-12 rounded-lg"
                        />
                        <div>
                            <h3 className="text-base">
                                {book.title}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                {book.author}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </Section>
    );
}

export default Reading;