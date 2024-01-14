import Main from "@/components/Layouts";
import Card from "@/components/Projects/Card";
import { projects } from "@/data/projects";

const featured = projects.filter(project => project.type === "featured");
const inDevelopment = projects.filter(project => project.type === "in-development");
const frontend = projects.filter(project => project.type === "frontend");

const Projects = () => {
    return (
        <Main>
            <h1 className="text-3xl font-semibold">
                Projects
            </h1>
            <div className="mt-6 text-base font-light tracking-wide leading-relaxed text-zinc-100 flex flex-col gap-3">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel deleniti fugiat minus cupiditate inventore reprehenderit impedit officiis! Vitae at unde debitis. Optio quis iure magnam eaque dolorem aperiam fugiat velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <h2 className="text-2xl font-semibold mt-10 mb-4 pt-5 border-t border-zinc-900">
                Featured
            </h2>
            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featured.map((project, idx) => (
                    <Card
                        title={project.title}
                        imageSrc={project.imageSrc}
                        imageAlt={project.title}
                        description={project.description}
                        year={project.year}
                        link={`/projects/${project.slug}`}
                        key={idx}
                        addBorder={featured.length > 2}
                    />
                ))}
            </div>
            <h2 className="text-2xl font-semibold mt-4 mb-4 pt-5 border-t border-zinc-900">
                In Development
            </h2>
            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inDevelopment.map((project, idx) => (
                    <Card
                        title={project.title}
                        imageSrc={project.imageSrc}
                        imageAlt={project.title}
                        description={project.description}
                        year={project.year}
                        link={`/projects/${project.slug}`}
                        key={idx}
                        addBorder={inDevelopment.length > 2}
                    />
                ))}
            </div>
            <h2 className="text-2xl font-semibold mt-5 mb-4 pt-5 border-t border-zinc-900">
                Front-end
            </h2>
            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {frontend.map((project, idx) => (
                    <Card
                        title={project.title}
                        imageSrc={project.imageSrc}
                        imageAlt={project.title}
                        description={project.description}
                        year={project.year}
                        link={`/projects/${project.slug}`}
                        key={idx}
                        addBorder={frontend.length > 2}
                    />
                ))}
            </div>
        </Main>
    );
}

export default Projects;