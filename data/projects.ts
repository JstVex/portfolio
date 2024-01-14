interface ProjectsProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    year: string;
    slug: string;
    type: "featured" | "in-development" | "frontend";
}

export const projects = [
    {
        title: "Soteria",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Soteria",
        description: "Boosting digital income streams for oppressed citizens of Myanmar",
        year: "2022",
        slug: "soteria",
        type: "featured"
    },
    {
        title: "ACY Connect",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "ACY Connect",
        description: "Platform for the ACY community to connect and host events",
        year: "2023",
        slug: "acy-connect",
        type: "featured"
    },
    {
        title: "Astrocat",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Astrocat",
        description: "Real time chat app with built in cat bot to chat with",
        year: "2023",
        slug: "astrocat",
        type: "featured"
    },
    {
        title: "JV/Games",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "JV/Games",
        description: "A collection of games made in react",
        year: "2024",
        slug: "jvgames",
        type: "in-development"
    },
    {
        title: "Box.",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Box.",
        description: "Two boxes to heal your mind",
        year: "2024",
        slug: "box",
        type: "in-development"
    },
    {
        title: "MIEA Website",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "MIEA",
        description: "Website for my school",
        year: "2023",
        slug: "miea",
        type: "frontend"
    },
    {
        title: "Zenzushi",
        imageSrc: "/images/projects/soteria.png",
        imageAlt: "Zenzushi",
        description: "A sushi restaurant with a touch of zen",
        year: "2023",
        slug: "zenzushi",
        type: "frontend"
    }
]

