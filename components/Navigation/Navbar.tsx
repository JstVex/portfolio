'use client'

import { Snowflake, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
    { href: '/', label: 'Index' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/writing', label: 'Writing' },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center py-3 px-4 sm:px-6">
            <div className="w-full max-w-main grow">
                <div className="flex items-center md:justify-between md:items-start">
                    <div className="hover:animate-spin-slow">
                        <Snowflake />
                    </div>
                    <ul className="ml-auto flex items-center text-sm md:w-divider">
                        <div className="flex-auto flex items-center space-x-5">
                            {pages.map((page) => (
                                <li key={page.href} className="list-none">
                                    <Link href={page.href} className={`nav-link ${pathname === page.href ? "" : "text-zinc-400"}`}>
                                        {page.label}
                                    </Link>
                                </li>
                            ))}
                        </div>
                        <div className="hidden md:block hover:animate-spin-slow">
                            <Sun />
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;