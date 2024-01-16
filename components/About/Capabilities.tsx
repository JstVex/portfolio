import { Minus } from "lucide-react";

const Capabilities = () => {
    return (
        <section className="mt-16 pt-5 border-t border-zinc-900">
            <h2 className="text-2xl font-semibold md:mb-3">
                Capabilities
            </h2>
            <div>
                <div className="pt-3 md:pt-5 md:pb-10 md:flex md:justify-between md:items-start">
                    <div className="text-lg my-3 md:my-0">
                        <h3>
                            Frontend
                        </h3>
                    </div>
                    <ul className="flex flex-col space-y-3 md:w-divider">
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                HTML, CSS, JavaScript
                            </span>
                        </li>
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                React, Next.js, Tailwind CSS
                            </span>

                        </li>
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                Typescript, Figma, Framer Motion
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="pt-3 md:pt-5 md:pb-10 md:flex md:justify-between md:items-start">
                    <div className="text-lg my-3 md:my-0">
                        <h3>
                            Backend
                        </h3>
                    </div>
                    <ul className="flex flex-col space-y-3 md:w-divider">
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                Node.js, Express.js, REST API
                            </span>
                        </li>
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                MongoDB, MySQL, Prisma, Planetscale
                            </span>
                        </li>
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                JWT, NextAuth.js, Clerk
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="pt-3 pb-16 md:pt-5 md:flex md:justify-between md:items-start">
                    <div className="text-lg my-3 md:my-0">
                        <h3>
                            Additional
                        </h3>
                    </div>
                    <ul className="flex flex-col space-y-3 md:w-divider">
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                C++, Python, Mathematics
                            </span>
                        </li>
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                IT Support, Command Line, Git
                            </span>
                        </li>
                        <li className="text-zinc-200 list-none flex items-center gap-x-2">
                            <Minus size={20} />
                            <span>
                                MS Office, Google Workspace
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Capabilities;