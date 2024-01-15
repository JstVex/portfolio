import Main from "@/components/Layouts";
import Card from "@/components/Projects/Card";
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

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
                        imageSrc={`/images/projects/${project.slugAsParams}/${project.image}`}
                        imageAlt={project.title}
                        description={project.description}
                        year={format(parseISO(project.year), 'yyyy')}
                        link={`/projects/${project.slugAsParams}`}
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
                        imageSrc={`/images/projects/${project.slugAsParams}/${project.image}`}
                        imageAlt={project.title}
                        description={project.description}
                        year={format(parseISO(project.year), 'yyyy')}
                        link={`/projects/${project.slugAsParams}`}
                        key={idx}
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
                        addBorder={frontend.length > 2}
                    />
                ))}
            </div>
        </Main>
    );
}

export default Projects;