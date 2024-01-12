import { ArrowUpRight } from "lucide-react";
import Section from "../Layouts/Section";

const UpComing = () => {
    return (
        <Section title="Upcoming">
            <li className="flex flex-col space-y-1">
                <h2>
                    NASA Proposal Writing and Evualutaion Experience Academy
                </h2>
                <div className="flex items-center gap-x-1">
                    <a href="https://www.lspace.asu.edu/" target="_blank" className="text-sm underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500">
                        NASA L&apos;SPACE Program
                    </a>
                    <ArrowUpRight size={16} className="text-zinc-400" />
                </div>
                <div className="text-sm text-zinc-400">
                    January 2024 - April 2024
                </div>
            </li>
            <li className="flex flex-col space-y-1">
                <h2>
                    Looking for Internship
                </h2>
                <div className="text-sm text-zinc-400">
                    Summer 2024
                </div>
            </li>
        </Section>
    );
}

export default UpComing;