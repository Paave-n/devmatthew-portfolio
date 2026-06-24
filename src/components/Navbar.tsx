"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

                {/* LOGO */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center"
                >
                    <Image
                        src="/images/mattlogo9.png"
                        alt="MattDev AI"
                        width={140}
                        height={80}
                        className="h-auto w-28 object-contain md:mt-0 md:w-32 lg:w-36"
                    />
                </motion.div>

                {/* DESKTOP MENU */}

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="hidden gap-14 text-sm text-white md:flex"
                >
                    <a
                        href="/"
                        className="transition-colors duration-300 hover:text-violet-400"
                    >
                        Home
                    </a>

                    <a
                        href="/#projects"
                        className="transition-colors duration-300 hover:text-violet-400"
                    >
                        Projects
                    </a>

                    <a
                        href="/#services"
                        className="transition-colors duration-300 hover:text-violet-400"
                    >
                        Services
                    </a>

                    <a
                        href="/#about"
                        className="transition-colors duration-300 hover:text-violet-400"
                    >
                        About
                    </a>

                    <a
                        href="/contact"
                        className="transition-colors duration-300 hover:text-violet-400"
                    >
                        Contact
                    </a>
                </motion.div>

                {/* MOBILE MENU BUTTON */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-500 text-xl md:hidden"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? "×" : "☰"}
                </button>

                {/* CTA */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden sm:block"
                >
                    <a
                        href="https://calendly.com/devmatthew"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-zinc-800 px-3 py-2 text-xs transition hover:border-violet-500/40 md:px-4 md:text-sm"
                    >
                        Let's Work Together
                    </a>
                </motion.div>

            </div>

            {menuOpen && (
                <div className="border-t border-zinc-800 bg-black md:hidden">
                    <div className="flex flex-col px-6 py-4 text-zinc-300">

                        <a
                            href="/"
                            className="py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>

                        <a
                            href="/#projects"
                            className="py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </a>

                        <a
                            href="/#services"
                            className="py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </a>

                        <a
                            href="/#about"
                            className="py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </a>

                        <a
                            href="/contact"
                            className="py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </a>

                        <a
                            href="https://calendly.com/devmatthew"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 rounded-xl border border-zinc-800 px-4 py-3 text-center"
                        >
                            Let's Work Together
                        </a>

                    </div>
                </div>
            )}
        </nav>

    );
}