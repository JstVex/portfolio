interface SectionProps {
    title: string;
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="pt-5 pb-16 border-t border-zinc-900 md:flex md:justify-between md:items-start">
            <h2 className="text-xl font-semibold my-3 md:my-0">
                {title}
            </h2>
            <ul className="flex flex-col gap-y-[0.85rem] md:w-divider">
                {children}
            </ul>
        </section>
    );
}

export default Section;