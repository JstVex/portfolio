'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
    { href: '/', label: 'Index' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/writing', label: 'Writing' },
];

const socials = [
    { href: 'https://github.com/JstVex', label: 'Github' },
    { href: 'https://www.linkedin.com/in/hein-htet-lu-lu/', label: 'LinkedIn' },
    { href: 'mailto:hh14lulu@gmail.com', label: 'Mail' },
    { href: 'https://drive.google.com/file/d/1sNaIzgmdlYJKXKMbkArNAdgP1zBxXV77/view?usp=sharing', label: 'Resume' },
]

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="px-0 flex w-full justify-center pt-10 sm:pt-16">
            <div className="max-w-main flex-1">
                <div className="border-t border-zinc-900 pt-8">
                    <div className="flex w-full justify-between">
                        <ul className="flex flex-col xs:flex-row gap-4 pb-6 text-sm">
                            {pages.map((page) => (
                                <li key={page.href}>
                                    <Link href={page.href} className={`nav-link ${pathname === page.href ? "" : "text-zinc-400"}`}>
                                        {page.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col xs:flex-row gap-4 pb-6 mr-20 xs:mr-0 text-sm">
                            {socials.map((social) => (
                                <li key={social.href}>
                                    <a href={social.href}
                                        target="_blank" className="nav-link text-zinc-400 transition-colors hover:text-white">
                                        {social.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col mt-2 xs:mt-0 gap-y-2 xs:gap-y-0 xs:flex-row w-full justify-between">
                        <div className="text-sm">
                            © 2023 Hein Htet Lu Lu
                        </div>
                        <div className="flex gap-4">
                            <Link href="/colophon" className="text-sm underline text-zinc-400 underline-offset-2 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                                Colophon
                            </Link>
                            <a href="https://github.com/JstVex/portfolio" className="text-sm underline text-zinc-400 underline-offset-2 transition-colors decoration-zinc-700 hover:decoration-zinc-500">
                                JstVex/portfolio
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;