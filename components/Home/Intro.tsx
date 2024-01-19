import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";

const Intro = () => {
    return (
        <section className="mb-16">
            <div className="">
                <h1 className="text-3xl font-semibold">
                    Hein Htet Lu Lu
                </h1>
                <p className="text-zinc-400">
                    Web developer / CS Undergrad / Aspiring software engineer
                </p>
            </div>
            <div className="mt-6 text-base font-light tracking-wide leading-relaxed text-zinc-100">
                Hi, my name is Lu Lu. I am a web developer from Myanmar, specializing in full-stack development. I am currently a freshman at Pasadena City College, learning new skills and honing old ones. I enjoy solving real-world problems and turning them into side projects. I am currently looking for internship opportunities for Summer 2024.
            </div>
            <div className="flex items-center mt-3">
                <Link href='/about' className="flex items-center border-b border-zinc-400 text-zinc-100 cursor-pointer transition-colors hover:text-zinc-400 hover:border-zinc-500">
                    <div>
                        Read more
                    </div>
                    <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
}

export default Intro;