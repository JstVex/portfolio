import Main from "@/components/Layouts";
import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Capabilities from "@/components/About/Capabilities";
import Experience from "@/components/About/Experience";

const About = () => {
    return (
        <Main>
            <AboutMe />
            <Education />
            <Capabilities />
            <Experience />
        </Main>
    );
}

export default About;