"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className=" border-t border-zinc-800 pt-4">

            <div className=" mx-auto max-w-7xl px-6 ">

                <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr] mb-4">

                    {/* LOGO */}

                    <div >
                        <div className="flex items-center  ">

                            <Image
                                src="/images/mattlogo9.png"
                                alt="MattDev AI"
                                width={140}
                                height={80}
                                className=" h-auto w-28 object-contain md:mt-0 md:w-32 lg:w-36"
                            />

                        </div>
                    </div>

                    {/* NAVIGATION */}

                    <div>

                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Navigation
                        </p>

                        <div className="grid grid-cols-2 gap-y-2 text-sm text-white">

                            <a
                                href="/"
                                className="transition transition-colors duration-300 hover:text-violet-400"
                            >
                                Home
                            </a>

                            <a
                                href="/#projects"
                                className="transition transition-colors duration-300 hover:text-violet-400"
                            >
                                Projects
                            </a>

                            <a
                                href="/#services"
                                className="transition transition-colors duration-300 hover:text-violet-400"
                            >
                                Services
                            </a>

                            <a
                                href="/#about"
                                className="transition transition-colors duration-300 hover:text-violet-400"
                            >
                                About
                            </a>

                            <a
                                href="/contact"
                                className="transition transition-colors duration-300 hover:text-violet-400"
                            >
                                Contact
                            </a>

                        </div>

                    </div>

                    {/* SOCIALS */}

                    <div>

                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Follow Me
                        </p>

                        <div className="flex gap-3">

                            <a
                                href="/"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40 hover:text-violet-400"
                            >
                                <FaGithub size={14} />
                            </a>

                            <a
                                href="/"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40 hover:text-violet-400"
                            >
                                <FaLinkedinIn size={14} />
                            </a>

                            <a
                                href="/"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40 hover:text-violet-400"
                            >
                                <FaXTwitter size={13} />
                            </a>

                        </div>

                    </div>

                    {/* CONTACT */}

                    <div>

                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Let's Connect
                        </p>
                        <div className="space-y-3">

                            <div className="flex items-center gap-3">

                                <a
                                    href="mailto:hello@devmatthew.co"
                                    className="flex items-center gap-3 transition hover:text-violet-400"
                                >

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40">
                                        <HiOutlineMail size={15} />
                                    </div>

                                    <span className="text-sm text-zinc-300 transition hover:text-violet-400">
                                        hello@devmatthew.co
                                    </span>

                                </a>

                            </div>

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition hover:text-violet-400">
                                    <HiOutlineLocationMarker size={15} />
                                </div>

                                <span className="text-sm text-zinc-300">
                                    Remote • Available Worldwide
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}

                <div className=" flex flex-col items-center justify-between gap-4 border-t border-zinc-800 py-2 text-sm text-white lg:flex-row">

                    <p>
                        © 2025 DEVMATTHEW. All rights reserved.
                    </p>

                    <div className="flex gap-6">

                        <a
                            href="/"
                            className="transition transition-colors duration-300 hover:text-violet-400"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/"
                            className="transition transition-colors duration-300 hover:text-violet-400"
                        >
                            Terms of Service
                        </a>
                        <button
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-black transition hover:border-violet-500/40 hover:text-violet-400"
                            aria-label="Back to top"
                        >
                            <HiArrowUp size={18} />
                        </button>

                    </div>

                </div>

            </div>

        </footer>
    );
}