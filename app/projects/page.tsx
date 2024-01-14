import Main from "@/components/Layouts";
import Card from "@/components/Projects/Card";

interface ProjectsProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    year: string;
    slug: string;
}

const featured: ProjectsProps[] = [
    {
        title: "Soteria",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Soteria",
        description: "Boosting digital income streams for oppressed citizens of Myanmar",
        year: "2022",
        slug: "soteria"
    },
    {
        title: "ACY Connect",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "ACY Connect",
        description: "Platform for the ACY community to connect and host events",
        year: "2023",
        slug: "acy-connect"
    },
    {
        title: "Astrocat",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Astrocat",
        description: "Real time chat app with built in cat bot to chat with",
        year: "2023",
        slug: "astrocat"
    },
]

const inDevelopment: ProjectsProps[] = [
    {
        title: "JV/Games",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "JV/Games",
        description: "A collection of games made in react",
        year: "2024",
        slug: "jvgames"
    },
    {
        title: "Box.",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Box.",
        description: "Two boxes to heal your mind",
        year: "2024",
        slug: "box"
    }
]

const frontend: ProjectsProps[] = [
    {
        title: "MIEA Website",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "MIEA",
        description: "Website for my school",
        year: "2023",
        slug: "miea"
    },
    {
        title: "Zenzushi",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Zenzushi",
        description: "A sushi restaurant with a touch of zen",
        year: "2023",
        slug: "zenzushi"
    }
]

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