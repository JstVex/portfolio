import type { Metadata } from "next";
import Main from "@/components/Layouts";
import Section from "@/components/Layouts/Section";

export const metadata: Metadata = {
    title: 'Hein Htet Lu Lu . Colophon',
    description: 'Colophon',
}

const Colophon = () => {
    return (
        <Main>
            <div className="mb-12">
                <h1 className="text-3xl font-semibold">
                    Colophon
                </h1>
            </div>
            <Section title="Typography">
                <p className="text-base font-light tracking-wide leading-relaxed text-zinc-100">
                    The site features the{" "}
                    <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://rsms.me/inter/">
                        Inter
                    </a>{" "}
                    typeface, a variable font family carefully crafted & designed for
                    computer screens, designed by{" "}
                    <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://rsms.me">
                        Rasmus Andersson
                    </a>
                    .
                </p>
            </Section>
            <Section title="Tech Stack">
                <div className="text-base font-light tracking-wide leading-relaxed text-zinc-100">
                    <p>
                        Built with {" "}
                        <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://nextjs.org/">
                            Next.js
                        </a>{" "}
                        and {""}
                        <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://tailwindcss.com/">
                            Tailwind CSS {""}
                        </a>
                        and {""}
                        <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://contentlayer.dev/">
                            Contentlayer
                        </a>
                        . Deployed and hosted on {" "}
                        <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://vercel.com/">
                            Vercel
                        </a>
                        .
                    </p>
                    <p className="mt-3">
                        This site is open source and avaiable on {" "}
                        <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://vercel.com/">
                            Github
                        </a>
                        .
                    </p>
                </div>
            </Section>
            <Section title="Photography">
                <p className="text-base font-light tracking-wide leading-relaxed text-zinc-100">
                    All images were taken or created by Hein Htet Lu Lu, if not stated otherwise.
                </p>
            </Section>
            <Section title="Inspiration">
                <p className="text-base font-light tracking-wide leading-relaxed text-zinc-100">
                    This site is greatly inspired by {""}
                    <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://www.fabianschultz.com/">
                        Fabian Schultz
                    </a>
                    , {""}
                    <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://antonstallboerger.com/">
                        Anton Stallbörger
                    </a> {" "}
                    and {" "}
                    <a className="underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500" target="_blank" href="https://owenbick.com/">
                        Owen Bick
                    </a>
                    .
                </p>
            </Section>
        </Main>
    );
}

export default Colophon;