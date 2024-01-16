import { allWritings } from "@/.contentlayer/generated";
import Main from "@/components/Layouts";
import { Mdx } from "@/components/Mdx/Mdx";
import { format, parseISO } from "date-fns";
import Image from "next/image";

const WritingPage = ({ params }: { params: { slug: string } }) => {
    const writing = allWritings.find(writing => writing.slugAsParams === params.slug);

    if (!writing) {
        return (
            <Main>
                <h1>
                    404 - Page Not Found
                </h1>
            </Main>
        );
    }

    if (writing.variety === "career") {
        return (
            <Main>
                <section>
                    <div>
                        <h2 className="text-3xl font-semiboldl">
                            {writing.title}
                        </h2>
                        <div className="text-zinc-400">
                            {format(parseISO(writing.date), 'MMM dd, yyyy')}
                        </div>
                    </div>
                </section>

            </Main>
        );
    }

    if (writing.variety === "thoughts") {
        return (
            <Main className="px-0 sm:pt-8">
                <div className="mb-2 w-full max-w-none h-[40vh] sm:h-[55vh]">
                    <Image
                        src={`/images/writing/thoughts/${writing.image}`}
                        alt={writing.title}
                        width="1920"
                        height="305"
                        className="w-full h-full object-cover"
                    />
                </div>
                <header className="mt-6 px-4">
                    <div className="md:flex md:items-start md:justify-between">
                        <div className="mb-16 md:mb-0">
                            <h1 className="text-base font-semibold">
                                {writing.title}
                            </h1>
                            <div className="text-zinc-100 text-sm">
                                {format(parseISO(writing.date), 'MMM dd, yyyy')}
                            </div>
                        </div>
                        <div className="thought-content">
                            <Mdx code={writing.body.code} />
                        </div>
                    </div>
                </header>
            </Main>
        )
    }

}

export default WritingPage;