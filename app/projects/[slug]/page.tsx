import Main from "@/components/Layouts";
import { allProjects } from "contentlayer/generated"
import { Mdx } from "@/components/Mdx/Mdx";
import { format, parseISO } from "date-fns";
import { ExternalLink, Github } from "lucide-react";

export const generateMetadata = ({ params }: { params: { slug: string; } }) => {
    const project = allProjects.find((project: any) => project.slugAsParams === params.slug)
    return { title: `Hein Htet Lu Lu . ${project?.title}` }
}

const Project = ({ params }: { params: { slug: string } }) => {
    const project = allProjects.find(project => project.slugAsParams === params.slug);

    if (!project) {
        return (
            <Main>
                <h1>
                    404 - Page Not Found
                </h1>
            </Main>
        );
    }

    return (
        <Main>
            <section>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">
                        {project.title}
                    </h1>
                    <div className="flex items-center gap-x-3">
                        <a href={project.github} target="_blank">
                            <Github size={20} className="text-zinc-400 transition-colors hover:text-zinc-100" />
                        </a>
                        <a href={project.link} target="_blank">
                            <ExternalLink size={20} className="text-zinc-400 transition-colors hover:text-zinc-100" />
                        </a>
                    </div>
                </div>

                <time className="text-sm md:text-base">
                    {format(parseISO(project.year), 'yyyy')}
                </time>
                <div className="text-sm md:text-base text-zinc-400">
                    {project.techStack?.join(" . ")}
                </div>
                <div className="text-sm md:text-base mt-5 mb-12 md:mb-20">
                    {project.description}
                </div>
            </section>

            <section className="project-content">
                {project.published === false ? (
                    <p>
                        More about this project coming soon. Stay tuned!
                    </p>
                ) : (
                    <Mdx code={project.body.code} />
                )}
            </section>
        </Main>
    );
}

export default Project;