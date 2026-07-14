"use client";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    HiOutlineMail,
    HiOutlineMap,
    HiOutlineClock,
    HiOutlineBriefcase,
} from "react-icons/hi";

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black text-white">
                <motion.section
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-20">

                        {/* HEADER */}
                        <div className="mb-12 px-3 text-left md:px-0 md:text-center">

                            <p className="mb-3 text-xs uppercase tracking-[0.2em]">
                                <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                                    Contact
                                </span>
                            </p>

                            <h1 className="mb-4 text-2xl font-bold leading-tight md:mb-6 md:text-5xl">
                                Let's Build Something Amazing
                            </h1>

                            <p className="max-w-md text-sm text-zinc-400 md:mx-auto md:max-w-2xl md:text-lg">
                                Whether you're launching a new Shopify store,
                                optimizing conversions, or scaling on Shopify Plus,
                                I'd love to hear about your project.
                            </p>

                        </div>

                        {/* CALENDLY */}

                        <div className="mb-12 rounded-2xl border border-zinc-800 bg-black/40 p-4 md:p-6">

                            <h2 className="mb-3 text-xl font-semibold md:text-2xl">
                                Schedule a Discovery Call
                            </h2>

                            <p className="mb-6 text-zinc-400">
                                Choose a time that works for you and let's discuss
                                your Shopify project.
                            </p>
                            {/* DESKTOP CALENDLY */}

                            <div className="hidden md:block overflow-hidden rounded-xl border border-zinc-800">
                                <InlineWidget
                                    url="https://calendly.com/devmatthew"
                                    styles={{
                                        height: "650px",
                                    }}
                                />
                            </div>

                            {/* MOBILE BUTTON */}

                            <a
                                href="https://calendly.com/devmatthew"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 font-medium text-black transition hover:opacity-90 md:hidden"
                            >
                                Book Your Free Call ↗
                            </a>

                        </div>

                        {/* CONTACT DETAILS */}

                        <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4 md:p-6">

                            <h2 className="mb-6 text-xl font-semibold md:text-2xl">
                                Get In Touch
                            </h2>

                            <div className="grid gap-8 md:grid-cols-2">

                                {/* EMAIL */}

                                <div className="flex items-start gap-4">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                                        <HiOutlineMail className="text-lg text-violet-400" />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Email
                                        </p>

                                        <a
                                            href="mailto:hello@devmatthew.co"
                                            className="break-all text-zinc-300 transition hover:text-white"
                                        >
                                            hello@devmatthew.co
                                        </a>
                                    </div>

                                </div>

                                {/* LOCATION */}

                                <div className="flex items-start gap-4">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                                        <HiOutlineMap className="text-lg text-violet-400" />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Location
                                        </p>

                                        <p className="text-zinc-300">
                                            Remote • Available Worldwide
                                        </p>
                                    </div>

                                </div>

                                {/* AVAILABILITY */}

                                <div className="flex items-start gap-4">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                                        <HiOutlineBriefcase className="text-lg text-violet-400" />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Availability
                                        </p>

                                        <p className="text-zinc-300">
                                            Open for Freelance & Contract Work
                                        </p>
                                    </div>

                                </div>

                                {/* RESPONSE TIME */}

                                <div className="flex items-start gap-4">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                                        <HiOutlineClock className="text-lg text-violet-400" />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Response Time
                                        </p>

                                        <p className="text-zinc-300">
                                            Within 24 Hours
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </motion.section>

            </main>

            <Footer />
        </>
    );
}