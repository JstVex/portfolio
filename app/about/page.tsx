import Main from "@/components/Layouts";
import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Capabilities from "@/components/About/Capabilities";
import Experience from "@/components/About/Experience";
import UpComing from "@/components/About/UpComing";

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