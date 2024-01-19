const AboutMe = () => {
    return (
        <section>
            <div>
                <h1 className="text-3xl font-semibold">
                    About Me
                </h1>
                <div className="text-zinc-400">
                    B. 2005
                </div>
            </div>

            <div className="mt-6 text-base font-light tracking-wide leading-relaxed text-zinc-100 flex flex-col gap-3">
                <p>
                    I design and develop websites with the goal of solving problems, making impact and crafting compelling digital experiences. Programming is an integral part of my everyday life, and I believe that it has the power to shape and improve the world around us.
                </p>
                <p>
                    I aim to create softwares that are not only functional and performant, but also beautiful and intuitive. In addition to my work, I also enjoy a calm place to relax and enjoy the nature which help to inspire me in my creative process.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;