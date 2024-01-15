import { ArrowRight } from "lucide-react";
import Section from "../Layouts/Section";

interface developmentProps {
    inDevelopment: {
        title: string;
        year: string;
        image: string;
        description: string;
        variety: "featured" | "in-development" | "frontend";
        link?: string;
        techStack?: string[];
    }[];
}

const Development: React.FC<developmentProps> = ({ inDevelopment }) => {
    return (
        <Section title="In Development">
            {inDevelopment.map((project) => (
                <li key={project.title} className="flex flex-col space-y-1">
                    <a href={project.link} className="flex items-center space-x-1">
                        <h3 className="text-lg underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                            {project.title}
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