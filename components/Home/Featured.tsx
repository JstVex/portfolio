import { ArrowUpRight, Dot } from "lucide-react";

const featured = [
    {
        name: "Soteria",
        description: "Boosting digital income streams for oppressed citizens of Myanmar",
        link: "https://soteria.vercel.app/"
    },
    {
        name: "ACY Connect",
        description: "Platform for the ACY community to connect and host events",
        link: "https://acy-connect.vercel.app/"
    },
    {
        name: "Astrocat",
        description: "Real time chat app with built in cat bot to chat with",
        link: "https://astrocat.vercel.app/"
    }
]

const Featured = () => {
    return (
        <section className="my-12 md:flex md:justify-between md:items-start">
            <h2 className="text-2xl font-semibold my-3 md:my-0">
                Featured Projects
            </h2>
            <ul className="flex flex-col space-y-3 md:w-divider">
                {featured.map((project) => (
                    <li key={project.name} className="flex flex-col space-y-1">
                        <a href={project.link} className="flex items-center space-x-1">
                            <h3 className="text-lg underline underline-offset-4 decoration-zinc-500">
                                {project.name}
                            </h3>
                            <ArrowUpRight size={16} className="text-zinc-400" />
                        </a>
                        <p className="text-zinc-400">
                            {project.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Featured;