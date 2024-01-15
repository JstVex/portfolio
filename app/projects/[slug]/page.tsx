import Main from "@/components/Layouts";
import { allProjects } from "contentlayer/generated"
import { Mdx } from "@/components/Mdx/Mdx";
import { format, parseISO } from "date-fns";

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
            <div>
                <h1 className="text-3xl font-semibold">
                    {project.title}
                </h1>
                <time className="text-sm md:text-base">
                    {format(parseISO(project.year), 'yyyy')}
                </time>
            </div>
            <div className="text-sm md:text-base text-zinc-400">
                {project.techStack?.join(" . ")}
            </div>
            <div className="text-sm md:text-base mt-5 mb-12 md:mb-20">
                {project.description}
            </div>
            <section className="project-content">
                <Mdx code={project.body.code} />
            </section>
        </Main>
    );
}

export default Project;