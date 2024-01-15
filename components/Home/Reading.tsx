import Image from "next/image";
import Section from "../Layouts/Section";

const books = [
    {
        title: "The Book of Eels",
        author: "Patrik Svensson",
        image: "/images/books/the-book-of-eels.png",
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        image: "/images/books/the-book-of-eels.png",
    }
]
const Reading = () => {
    return (
        <Section title="Reading">
            {books.map((book) => (
                <li key={book.title} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Image
                            width={48}
                            height={48}
                            src={book.image}
                            alt={book.title}
                            className="w-12 h-[4.5rem] object-cover rounded-sm"
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