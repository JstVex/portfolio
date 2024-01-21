import type { Metadata } from "next";
import Main from "@/components/Layouts";
import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Capabilities from "@/components/About/Capabilities";
import Experience from "@/components/About/Experience";
import UpComing from "@/components/About/UpComing";

export const metadata: Metadata = {
    title: 'Hein Htet Lu Lu . About',
    description: 'Web Developer Specializing Full-Stack Development.',
}

const About = () => {
    return (
        <Main>
            <AboutMe />
            <Education />
            <Capabilities />
            <Experience />
            <UpComing />
        </Main>
    );
}

export default About;