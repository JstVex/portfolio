import { allWritings } from "@/.contentlayer/generated";
import Main from "@/components/Layouts";
import { format, parseISO } from "date-fns";

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

export default WritingPage;