import { ArrowUpRight } from "lucide-react";

const Education = () => {
    return (
        <section className="mt-6 pt-5 border-t border-zinc-900">
            <div className="md:pb-10 md:flex md:justify-between md:items-start">
                <div className="text-lg md:my-0">
                    <h3 className="text-zinc-400">
                        <div className="text-[0.95rem] flex items-center">
                            2023 - 2025
                        </div>
                    </h3>
                </div>
                <ul className="flex flex-col space-y-3 md:w-divider">
                    <div className="list-content flex flex-col space-y-1 border-none pt-0">
                        <div>
                            Associate of Science in Computer Science
                        </div>
                        <div className="flex items-center gap-x-1">
                            <a href="https://pasadena.edu/" target="_blank" className="text-sm underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500">
                                Pasadena City College
                            </a>
                            <ArrowUpRight size={16} className="text-zinc-400" />
                        </div>
                        <div className="text-sm text-zinc-400">
                            Pasadena, CA
                        </div>
                    </div>
                </ul>
            </div>
            <div className="md:flex md:justify-between md:items-start">
                <div className="text-lg mt-3 md:my-0">
                    <h3 className="text-zinc-400">
                        <div className="text-[0.95rem] flex items-center">
                            2021 - 2022
                        </div>
                    </h3>
                </div>
                <ul className="flex flex-col space-y-3 md:w-divider">
                    <div className="list-content flex flex-col space-y-1 border-none pt-0">
                        <div>
                            International General Certificate of Secondary Education
                        </div>
                        <div className="flex items-center gap-x-1">
                            <a href="https://miea.vercel.app" target="_blank" className="text-sm underline underline-offset-4 decoration-zinc-700 transition-colors hover:decoration-zinc-500">
                                Myanmar International Education Academy
                            </a>
                            <ArrowUpRight size={16} className="text-zinc-400" />
                        </div>
                        <div className="text-sm text-zinc-400">
                            Yangon, Myanmar
                        </div>
                    </div>
                </ul>
            </div>
        </section >
    );
}

export default Education;