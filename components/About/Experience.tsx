import Section from "../Layouts/Section";

const Experience = () => {
    return (
        <Section title="Experience">
            <li className="flex flex-col space-y-3 border-b border-zinc-900 pb-6 md:pb-10">
                <div>
                    <h3 className="text-base font-semibold">
                        Freelance
                    </h3>
                    <div className="text-sm text-zinc-400">
                        June 2023 - Ongoing
                    </div>
                </div>
                <p className="">
                    Available for world-changing projects
                </p>
            </li>
            <li className="flex flex-col space-y-3 border-b border-zinc-900 pb-6 md:pb-10">
                <div>
                    <h3 className="text-base font-semibold">
                        Volunteer / Web Developer at Conceptians
                    </h3>
                    <div className="text-sm text-zinc-400">
                        June 2023 - On-going
                    </div>
                </div>
                <p className="">
                    Designing and developing websites for non-profit organizations
                </p>
            </li>
            <li className="flex flex-col space-y-3 border-b border-zinc-900 pb-6 md:pb-10">
                <div>
                    <h3 className="text-base font-semibold">
                        Intern at Amara Digital Agency
                    </h3>
                    <div className="text-sm text-zinc-400">
                        January 2023 - June 2023
                    </div>
                </div>
                <p className="">
                    Built digital solutions for local businesses
                </p>
            </li>

        </Section>
    );
}

export default Experience;