interface SectionProps {
    title: string;
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="mt-5 pb-16 border-b border-zinc-900 md:flex md:justify-between md:items-start">
            <h2 className="text-xl font-semibold my-3 md:my-0">
                {title}
            </h2>
            <ul className="flex flex-col space-y-3 md:w-divider">
                {children}
            </ul>
        </section>
    );
}

export default Section;