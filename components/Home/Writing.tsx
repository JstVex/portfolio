import Link from "next/link";
import Section from "@/components/Layouts/Section";
import { format, parseISO } from "date-fns";

interface WritingProps {
    writings: {
        title: string;
        date: string;
        description: string;
        image?: string;
        variety: "career" | "thoughts";
        slugAsParams: string;
    }[];
}


const Writing: React.FC<WritingProps> = ({ writings }) => {
    return (
        <Section title="Writing">
            {writings.map((post) => (
                <li key={post.title} className="flex flex-col space-y-1">
                    <Link href={`/writing/${post.slugAsParams}`} className="underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                        {post.title}
                    </Link>
                    <div className="text-sm text-zinc-400">
                        {format(parseISO(post.date), 'MMM dd, yyyy')}
                    </div>
                </li>
            ))}
            <Link href='/writing' className="text-sm text-zinc-400 underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                View all
            </Link>
        </Section >
    );
}

export default Writing;