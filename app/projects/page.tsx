import type { Metadata } from "next";
import Main from "@/components/Layouts";
import Card from "@/components/Projects/Card";
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export const metadata: Metadata = {
    title: 'Hein Htet Lu Lu . Projects',
    description: 'My Full-Stack and Frontend Projects.',
}

const filteredFeatured = allProjects.filter(project => project.variety === "featured");
const filteredInDevelopment = allProjects.filter(project => project.variety === "in-development");
const filteredFrontend = allProjects.filter(project => project.variety === "frontend");

const featured = filteredFeatured.sort((a, b) =>
    compareDesc(new Date(a.year), new Date(b.year))
)

const inDevelopment = filteredInDevelopment.sort((a, b) =>
    compareDesc(new Date(a.year), new Date(b.year))
)

const frontend = filteredFrontend.sort((a, b) =>
    compareDesc(new Date(a.year), new Date(b.year))
)

const Projects = () => {
    return (
        <Main>
            <div>
                <h1 className="text-3xl font-semibold">
                    Projects
                </h1>
                <div className="text-zinc-400">
                    {allProjects.length} sites
                </div>
            </div>
            <div className="mt-6 text-base font-light tracking-wide leading-relaxed text-zinc-100 flex flex-col gap-3">
                <p>
                    Throughout my journey as a web developer, I have worked on a variety of projects, ranging from small personal projects to large-scale web applications. I am always exlporing more problems to solve and expand my gallery of projects.
                </p>
            </div>
            <h2 className="text-2xl font-semibold mt-10 mb-4 pt-5 border-t border-zinc-900">
                Featured
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featured.map((project, idx) => (
                    <Card
                        title={project.title}
                        imageSrc={`/images/projects/${project.slugAsParams}/${project.image}`}
                        imageAlt={project.title}
                        description={project.description}
                        year={format(parseISO(project.year), 'yyyy')}
                        link={`/projects/${project.slugAsParams}`}
                        key={idx}
                        published={project.published}
                        addBorder={featured.length > 2}
                    />
                ))}
            </div>
            <h2 className="text-2xl font-semibold mt-4 mb-4 pt-5 border-t border-zinc-900">
                In Development
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inDevelopment.map((project, idx) => (
                    <Card
                        title={project.title}
                        imageSrc={`/images/projects/${project.slugAsParams}/${project.image}`}
                        imageAlt={project.title}
                        description={project.description}
                        year={format(parseISO(project.year), 'yyyy')}
                        link={`/projects/${project.slugAsParams}`}
                        key={idx}
                        published={project.published}
                        addBorder={inDevelopment.length > 2}
                    />
                ))}
            </div>
            <h2 className="text-2xl font-semibold mt-5 mb-4 pt-5 border-t border-zinc-900">
                Front-end
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {frontend.map((project, idx) => (
                    <Card
                        title={project.title}
                        imageSrc={`/images/projects/${project.slugAsParams}/${project.image}`}
                        imageAlt={project.title}
                        description={project.description}
                        year={format(parseISO(project.year), 'yyyy')}
                        link={`/projects/${project.slugAsParams}`}
                        key={idx}
                        published={project.published}
                        addBorder={frontend.length > 2}
                    />
                ))}
            </div>
        </Main>
    );
}

export default Projects;