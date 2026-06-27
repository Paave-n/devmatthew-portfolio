import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project =
        projects[slug as keyof typeof projects];

    if (!project) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-black text-white">
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <h1 className="text-4xl font-bold">
                            Project Not Found
                        </h1>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <main className="bg-black text-white">

                <div className="mx-auto max-w-7xl px-6 py-20">


                    {/* HERO */}

                    <div className="mb-10 md:mb-16">

                        <p className="mb-4 text-xs uppercase tracking-[0.2em]">
                            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                                Project Spotlight
                            </span>
                        </p>

                        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-6xl">
                            {project.name}
                        </h1>

                        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-400 md:gap-4 md:text-base">
                            <span>{project.role}</span>
                            <span>•</span>
                            <span>{project.industry}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                        </div>

                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center rounded-xl border border-zinc-800 px-5 py-3 transition hover:border-violet-500/40 md:inline-flex md:w-auto"
                        >
                            View Live Site ↗
                        </a>

                    </div>
                    {/* FEATURE IMAGE */}

                    <Image
                        src={project.image}
                        alt={project.name}
                        width={1400}
                        height={800}
                        className="mb-12 rounded-xl border border-zinc-800 md:mb-16"
                    />

                    {/* OVERVIEW */}

                    <section className="mb-10 md:mb-14">

                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            Overview
                        </h2>

                        <p className="max-w-3xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                            {project.overview}
                        </p>

                    </section>

                    {/* ROLE */}

                    <section className="mb-10 md:mb-14">

                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            My Role
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {project.responsibilities.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                    </section>

                    {/* CHALLENGES */}

                    <section className="mb-10 md:mb-14">

                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            Challenges
                        </h2>

                        <ul className="space-y-3 text-sm leading-7 text-zinc-400 md:text-base">

                            {project.challenges.map((item) => (
                                <li key={item}>
                                    • {item}
                                </li>
                            ))}

                        </ul>

                    </section>

                    {/* SOLUTIONS */}

                    <section className="mb-10 md:mb-14">

                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            What I Did
                        </h2>

                        <div className="grid gap-4">

                            {project.solutions.map((item, index) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-zinc-800 p-4 md:p-6"
                                >
                                    <span className="mb-2 block text-violet-400">
                                        0{index + 1}
                                    </span>

                                    <p className="text-sm leading-7 md:text-base">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </section>

                    {/* RESULTS */}

                    <section className="mb-10 md:mb-14">

                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            Results
                        </h2>
                        <p className="mb-6 text-sm text-zinc-500">
                            Performance Snapshot ({project.snapshot})
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

                            {project.results.map((result) => (
                                <div
                                    key={result.label}
                                    className="rounded-2xl border border-zinc-800 p-4 md:p-6"
                                >
                                    <p className="mb-2 break-words text-2xl font-bold text-green-400 md:text-4xl">
                                        {result.value}
                                    </p>

                                    <p className="text-sm text-zinc-500 md:text-base">
                                        {result.label}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </section>

                    {/* STACK */}

                    <section className="mb-10 md:mb-14">

                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            Technology Stack
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                    </section>

                    {/* NEXT PROJECT */}

                    <section className="mt-20 md:mt-24">

                        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Next Project
                        </p>

                        <Link
                            href={`/projects/${project.nextProject}`}
                            className="group block overflow-hidden rounded-3xl border border-zinc-800"
                        >

                            <Image
                                src={
                                    projects[
                                        project.nextProject as keyof typeof projects
                                    ].image
                                }
                                alt={
                                    projects[
                                        project.nextProject as keyof typeof projects
                                    ].name
                                }
                                width={1400}
                                height={800}
                                className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[400px]"
                            />

                            <div className="p-5 md:flex md:items-center md:justify-between md:p-8">

                                <div>

                                    <h3 className=" text-2xl font-bold md:text-4xl">
                                        {
                                            projects[
                                                project.nextProject as keyof typeof projects
                                            ].name
                                        }
                                    </h3>

                                    <p className=" text-sm text-zinc-400 md:text-base">
                                        Continue to the next case study.
                                    </p>

                                </div>

                                <span className="mt-4 hidden text-4xl transition group-hover:translate-x-2 md:block">
                                    →
                                </span>

                            </div>

                        </Link>

                    </section>

                    {/* CONTACT CTA */}

                    <section className="mt-16 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-700/80 via-violet-600/60 to-violet-700/80 p-5 md:mt-24 md:p-10">

                        <div className="flex flex-col gap-6 text-left lg:flex-row lg:items-center lg:justify-between">

                            <div >

                                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-violet-200 md:text-sm">
                                    Let's Work Together
                                </p>

                                <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                                    Like What You See?
                                </h2>

                                <p className="max-w-2xl text-sm text-violet-100 md:text-base">
                                    Whether you need Shopify Plus development,
                                    conversion optimization, store management,
                                    or ongoing ecommerce support, I'd love to
                                    hear about your project.
                                </p>

                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">

                                <a
                                    href="/contact"
                                    className="flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
                                >
                                    Get In Touch ↗
                                </a>

                                <a
                                    href="https://calendly.com/devmatthew"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
                                >
                                    Book a Call
                                </a>

                            </div>

                        </div>

                    </section>

                </div>

            </main>

            <Footer />
        </>
    );
}