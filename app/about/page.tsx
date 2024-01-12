import Main from "@/components/Layouts";
import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Capabilities from "@/components/About/Capabilities";

const About = () => {
    return (
        <Main>
            <AboutMe />
            <Education />
            <Capabilities />
        </Main>
    );
}

export default About;