import Link from "next/link";

const writing = [
    {
        title: "How to use Next.js with Tailwind CSS",
        date: "August 21, 2021",
        href: "/writing/how-to-use-nextjs-with-tailwind-css",
    },
    {
        title: "How to implement mdx-blog in your Next.js project",
        date: "June 09, 2021",
        href: "/writing/how-to-implement-mdx-blog-in-your-nextjs-project",
    },
    {
        title: "Simplicity and its effect on mind",
        date: "February 13, 2021",
        href: "/writing/simplicity-and-its-effect-on-mind",
    }
]

const Writing = () => {
    return (
        <section className="my-12">
            <h2 className="text-2xl font-semibold my-3">
                Writing
            </h2>
            <ul className="flex flex-col space-y-2">
                {writing.map((post) => (
                    <li key={post.title} className="flex items-center justify-between">
                        <Link href={post.href} className="underline underline-offset-4 decoration-zinc-500">
                            {post.title}
                        </Link>
                        <div className="text-zinc-400">
                            {post.date}
                        </div>
                    </li>
                ))
                }
            </ul >
        </section >
    );
}

export default Writing;