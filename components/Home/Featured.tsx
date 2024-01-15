import { ArrowUpRight } from "lucide-react";
import Section from "../Layouts/Section";
import Link from "next/link";

interface FeaturedProps {
    featured: {
        title: string;
        year: string;
        image: string;
        description: string;
        variety: "featured" | "in-development" | "frontend";
        link?: string;
        techStack?: string[];
    }[];
}

const Featured: React.FC<FeaturedProps> = ({ featured }) => {
    return (
        <Section title="Featured Projects">
            {featured.map((project) => (
                <li key={project.title} className="flex flex-col space-y-1">
                    <a href={project.link} className="flex items-center space-x-1">
                        <h3 className="underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                            {project.title}
                        </h3>
                        <ArrowUpRight size={16} className="text-zinc-400" />
                    </a>
                    <p className="text-zinc-400">
                        {project.description}
                    </p>
                </li>
            ))}
            <Link href='/projects' className="text-sm text-zinc-400 underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                View all
            </Link>
        </Section>
    );
}

export default Featured;