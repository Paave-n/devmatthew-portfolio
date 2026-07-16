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
import { SiUpwork } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 pt-4">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-4 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">

                    {/* LOGO */}

                    <div className="flex items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >

                            <Image
                                src="/images/mattlogo9.png"
                                alt="MattDev AI"
                                width={140}
                                height={80}
                                className="h-auto w-28 object-contain md:mt-0 md:w-32 lg:w-36"
                            />
                        </motion.div>
                    </div>


                    {/* NAVIGATION */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >

                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Navigation
                        </p>

                        <div className="grid grid-cols-2 gap-y-2 text-sm text-white">

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

                        </div>

                    </motion.div>

                    {/* SOCIALS */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >

                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Profiles
                        </p>

                        <div className="space-y-3">

                            {/* UPWORK */}

                            <a
                                href="https://www.upwork.com/freelancers/~010bca08d79977a10f?companyReference=1697956834210066433&mp_source=share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition-all duration-300 group-hover:border-violet-500/40 group-hover:text-violet-400">
                                    <SiUpwork size={15} />
                                </div>

                                <span className="text-sm text-zinc-300 transition-colors duration-300 group-hover:text-violet-400">
                                    Upwork
                                </span>
                            </a>

                            {/* GITHUB */}

                            {/*<a
                                href="https://github.com/Mat408"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3"
                            >
                                 <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition-all duration-300 group-hover:border-violet-500/40 group-hover:text-violet-400">
                                    <FaGithub size={15} />
                                </div>

                                <span className="text-sm text-zinc-300 transition-colors duration-300 group-hover:text-violet-400">
                                    GitHub
                                </span>
                            </a>*/}

                            {/* LINKEDIN */}

                            <a
                                href="https://www.linkedin.com/in/matthew-ikhinobele-9693b841a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition-all duration-300 group-hover:border-violet-500/40 group-hover:text-violet-400">
                                    <FaLinkedinIn size={15} />
                                </div>

                                <span className="text-sm text-zinc-300 transition-colors duration-300 group-hover:text-violet-400">
                                    LinkedIn
                                </span>
                            </a>

                        </div>

                    </motion.div>
                    {/* CONTACT */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >

                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Let's Connect
                        </p>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3">

                                <a
                                    href="mailto:hello@devmatthew.co"
                                    className="group flex items-center gap-3"
                                >

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition-all duration-300 group-hover:border-violet-500/40 group-hover:text-violet-400">
                                        <HiOutlineMail size={15} />
                                    </div>

                                    <span className="text-sm text-zinc-300 transition-colors duration-300 group-hover:text-violet-400">
                                        hello@devmatthew.co
                                    </span>

                                </a>

                            </div>

                            <div className="group flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 transition-all duration-300 group-hover:border-violet-500/40 group-hover:text-violet-400">
                                    <HiOutlineLocationMarker size={15} />
                                </div>

                                <span className="text-sm text-zinc-300 transition-colors duration-300 group-hover:text-violet-400">
                                    Remote • Available Worldwide
                                </span>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* BOTTOM */}

                <div

                    className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 py-2 text-sm text-white lg:flex-row"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            © 2026 DEVMATTHEW. All rights reserved.
                        </p>
                    </motion.div>

                    <div className="flex gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <a
                                href="/"
                                className="transition-colors duration-300 hover:text-violet-400"
                            >
                                Privacy Policy
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <a
                                href="/"
                                className="transition-colors duration-300 hover:text-violet-400"
                            >
                                Terms of Service
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
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
                        </motion.div>

                    </div>

                </div>

            </div>

        </footer>
    );
}