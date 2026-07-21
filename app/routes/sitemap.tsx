import { Link } from "@remix-run/react";
import logo from "/logoM.svg";

export const meta = () => [
    { title: "Sitemap - XXXTENTACION" },
    { name: "description", content: "XXXTENTACION" },
];

const links = [
    { label: "Home", to: "/" },
    { label: "His Story", to: "/story" },
    { label: "Songs", to: "/songs" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
];

const Sitemap = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white text-black px-6 py-24">
            <img src={logo} alt="" className="md:w-1/2 w-11/12 md:relative absolute top-5" />

            <h1 className="mt-16 md:mt-0 text-2xl md:text-4xl font-bold tracking-tight">
                Sitemap
            </h1>

            <p className="mt-2 text-sm md:text-base text-gray-500">
                Every path through this memory.
            </p>

            <nav className="mt-10 w-full max-w-sm">
                <ul className="flex flex-col gap-4">
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className="block text-center text-lg md:text-xl font-medium py-3 border border-black/10 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sitemap