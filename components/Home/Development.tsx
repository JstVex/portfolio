import { ArrowRight } from "lucide-react";
import Section from "../Layouts/Section";

const featured = [
    {
        name: "Box.",
        description: "Two boxes to heal your mind",
        link: "/projects/box"
    },
    {
        name: "JV/Games",
        description: "A collection of games made in React",
        link: "/projects/jv-games"
    },
    {
        name: "Vestire",
        description: "E-commerce clothing website with CMS",
        link: "/projects/vestire"
    }
]


const Development = () => {
    return (
        <Section title="In Development">
            {featured.map((project) => (
                <li key={project.name} className="flex flex-col space-y-1">
                    <a href={project.link} className="flex items-center space-x-1">
                        <h3 className="text-lg underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                            {project.name}
                        </h3>
                        <ArrowRight size={16} className="text-zinc-400" />
                    </a>
                    <p className="text-zinc-400">
                        {project.description}
                    </p>
                </li>
            ))}
        </Section>
    );
}

export default Development;