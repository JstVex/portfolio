import Main from "@/components/Layouts";
import { allProjects } from "contentlayer/generated"

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
                <time>
                    {project.year}
                </time>
            </div>
            <div className="text-zinc-400">
                {project.techStack?.join(" . ")}
            </div>
            <div className="mt-5">
                {project.description}
            </div>

        </Main>
    );
}

export default Project;