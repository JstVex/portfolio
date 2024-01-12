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
    { href: 'g', label: 'Resume' },
]

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="px-0 flex w-full justify-center pt-10 sm:pt-16">
            <div className="max-w-main flex-1">
                <div className="flex h-full w-full items-end justify-between border-t border-zinc-900 pt-8">
                    <div className="flex-1">
                        <ul className="flex flex-col xs:flex-row gap-4 pb-6 text-sm">
                            {pages.map((page) => (
                                <li key={page.href}>
                                    <Link href={page.href} className={`nav-link ${pathname === page.href ? "" : "text-zinc-400"}`}>
                                        {page.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden xs:block text-sm text-zinc-400">
                            © 2023 Hein Htet Lu Lu. No Rights Reserved.
                        </div>
                    </div>
                    <div className="flex h-full flex-col items-end justify-end sm:justify-between">
                        <div className="flex-1">
                            <ul className="flex flex-col xs:flex-row gap-4 pb-6 text-sm">
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
                        <div className="hidden xs:flex gap-4">
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