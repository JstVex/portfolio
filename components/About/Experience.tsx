import Section from "@/components/Layouts/Section";

const Experience = () => {
    return (
        <Section title="Experience">
            <li className="flex flex-col space-y-1 pb-2 md:space-y-3 md:border-b md:border-zinc-900  md:pb-10">
                <div>
                    <h3 className="text-base font-semibold">
                        Mobile App Development Intern @ Pasadena City College
                    </h3>
                    <div className="text-sm text-zinc-400">
                        April 2024 - Ongoing
                    </div>
                </div>
                <p>
                    Developing mobile applications using Ionic and Ionic-React
                </p>
            </li>
            <li className="flex flex-col space-y-1 pb-2 md:space-y-3 md:border-b md:border-zinc-900 md:pb-10">
                <div>
                    <h3 className="text-base font-semibold">
                        Volunteer / Web Developer @ Conceptians
                    </h3>
                    <div className="text-sm text-zinc-400">
                        June 2023 - Ongoing
                    </div>
                </div>
                <p>
                    Designing and developing websites for non-profit organizations
                </p>
            </li>
            <li className="flex flex-col space-y-1 pb-6 md:space-y-3 md:pb-10">
                <div>
                    <h3 className="text-base font-semibold">
                        Intern @ Amara Digital Marketing Agency
                    </h3>
                    <div className="text-sm text-zinc-400">
                        January 2023 - July 2023
                    </div>
                </div>
                <p>
                    Built digital solutions for local businesses
                </p>
            </li>
            <li className="flex flex-col space-y-1 pb-2 md:space-y-3 md:border-b md:border-zinc-900  md:pb-10">
                <div>
                    <h3 className="text-base font-semibold">
                        Freelance
                    </h3>
                    <div className="text-sm text-zinc-400">
                        June 2023 - Ongoing
                    </div>
                </div>
                <p>
                    Available for world-changing projects
                </p>
            </li>
        </Section>
    );
}

export default Experience;