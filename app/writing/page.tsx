import Main from "@/components/Layouts";
import { allWritings } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const career = allWritings.filter(writing => writing.variety === "career");
const thoughts = allWritings.filter(writing => writing.variety === "thoughts");

const Writing = () => {
    return (
        <Main>
            <section>
                <h1 className="text-3xl font-semibold">
                    Writing
                </h1>
                <div className="mt-6 text-base font-light tracking-wide leading-relaxed text-zinc-100 flex flex-col gap-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veniam tenetur quod accusamus, et voluptatem amet ullam, voluptatibus vero praesentium laborum dolorem, dolores beatae labore facere nisi aliquam consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </section>
            <section className="mb-16 mt-10 pt-5 border-t border-zinc-900">
                <h2 className="text-2xl font-semibold mb-4">
                    Career
                </h2>
                <div className="flex flex-col gap-y-4 md:gap-y-[0.85rem]">
                    {career.map((writing, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h3 className="text-sm md:text-base text-zinc-400">
                                {format(parseISO(writing.date), 'MMM dd, yyyy')}
                            </h3>
                            <Link href={`/writing/${writing.slugAsParams}`} className="underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500 md:w-divider">
                                {writing.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-16 mt-10 pt-5 border-t border-zinc-900">
                <h2 className="text-2xl font-semibold mb-4">
                    Thoughts
                </h2>
                <div className="flex flex-col gap-y-4 md:gap-y-[0.85rem]">
                    {thoughts.map((writing, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <h3 className="text-sm md:text-base text-zinc-400">
                                {format(parseISO(writing.date), 'MMM dd, yyyy')}
                            </h3>
                            <Link href={`/writing/${writing.slugAsParams}`} className="underline underline-offset-4 transition-colors decoration-zinc-700 hover:decoration-zinc-500 md:w-divider">
                                {writing.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    );
}

export default Writing;