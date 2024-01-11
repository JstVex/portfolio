'use client'

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
        <nav className="flex justify-center">
            <div className="flex items-center w-full max-w-[60rem] py-4 px-3">
                <div className="grow text-sm">
                    Lu Lu
                </div>
                <ul className="flex items-center space-x-5 text-sm">
                    {pages.map((page) => (
                        <li key={page.href} className="list-none">
                            <Link href={page.href} className={pathname === page.href ? "" : "text-gray-400"}>
                                {page.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;