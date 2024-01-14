import Image from "next/image"
import Link from "next/link"

interface Props {
    title: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    year: string;
    link: string;
    addBorder: boolean;
}

const Card: React.FC<Props> = ({
    title,
    imageSrc,
    imageAlt,
    description,
    year,
    link,
    addBorder,
}) => {
    return (
        <div className={`mb-2 ${addBorder ? 'border-b' : ''} border-zinc-900 last:border-b-0`}>
            <div className="flex flex-col mb-8">
                <h3 className="font-semibold">
                    {title}
                </h3>
                <time className="text-sm">
                    {year}
                </time>
            </div>

            <div className="bg-zinc-950 overflow-hidden mb-8">
                <Link href={link}>
                    <Image
                        alt={imageAlt}
                        className="hover:scale-105 transform transition-all duration-300 select-none"
                        src={imageSrc}
                        width={3840}
                        height={3840}
                        priority
                    />
                </Link>
            </div>

            <div className="flex flex-col gap-4 mb-6">
                <p className="">
                    {description}
                </p>

                <Link
                    href={link}
                    className="text-sm text-zinc-400 hover:text-zinc-100"
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default Card