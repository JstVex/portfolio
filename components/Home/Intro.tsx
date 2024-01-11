import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";

const Intro = () => {
    return (
        <section>
            <div className="">
                <h2 className="text-2xl font-semibold">
                    Hein Htet Lu Lu
                </h2>
                <p className="text-zinc-400">
                    Web developer / CS Undergrad / Aspiring software engineer
                </p>
            </div>
            <div className="mt-6 text-base font-light tracking-wide leading-relaxed text-zinc-100">
                Hi, my name is Lu Lu. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores et autem id, commodi, velit veritatis illum voluptate non corrupti dolorem saepe deleniti laboriosam officiis accusantium dolor. Veniam totam molestiae quaerat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam minus eligendi!
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