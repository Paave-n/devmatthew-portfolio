"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  const testimonials = [
    {
      quote: "Working with Matthew has been great. He helped us redesign the site and has been my go-to Shopify developer ever since. Anytime I have an idea, need an update, or run into a problem, I know I can reach out and he'll figure it out. It's honestly been a huge relief having someone I can trust to handle the technical side while I focus on growing the brand.",
      name: "Michael Smith",
      role: "CEO, HBCU Only",
      image: "/images/mmsmith.png",
    },
    {
      quote: "It's been awesome working with Matthew. He's the kind of person you can throw an idea at and somehow a few days later it's live on the site. He's helped us with everything from campaigns and landing pages to random issues that pop up along the way. Having him in our corner has made running the store a whole lot easier.",
      name: "Christina Duvarney",
      role: "CEO, BD Rocks",
      image: "/images/bdceo.jpg",
    },
    {
      quote: "We've worked with Matthew on so many projects over the years that he's become an extension of our team. He understands our brand, works quickly, and always makes the process feel effortless. Having someone we can trust with both the big projects and the small details has been incredibly valuable.",
      name: "Frieda Rothman",
      role: "CEO, Freida Rothman",
      image: "/images/freidarothman.webp",
    },
    {
      quote: "I honestly don't know how Matthew keeps up with everything we throw at him. New promotions, landing pages, site improvements, last-minute requests—he handles it all without missing a beat. He's been an incredible partner for our business and someone we trust with some of the most important parts of our ecommerce operation.",
      name: "Wilson Carter",
      role: "CEO, Clutch Charger",
      image: "/images/wilson carter.jpg",
    },
    {
      quote: "Working with Matt has been fantastic. He helped me build both of my Shopify stores from the ground up and made the entire process feel easy. He has the patience of a saint, takes the time to explain things clearly, and genuinely cares about getting things right. I'd happily work with him again on future projects.",
      name: "Nick Fell",
      role: "CEO, NeonQueer",
      image: "/images/nickc.png",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const nextTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  const projects = [
    {
      name: "Clutch",
      slug: "clutch",
      image: "/images/project-1.png",
      role: "Store Manager",
      description:
        "Ongoing Shopify Plus management, CRO, merchandising, and custom development for a multi-million dollar ecommerce brand."
    },
    {
      name: "Freida Rothman",
      slug: "freida",
      image: "/images/freidarothman.png",
      role: "Store Manager",
      description:
        "Ongoing Shopify Plus development, technical support, and custom storefront enhancements for a luxury jewelry brand.",
    },
    {
      name: "BD Rocks",
      slug: "beautiful",
      image: "/images/beautifuldisaster.PNG",
      role: "Store Manager",
      description:
        "Ongoing Shopify Plus development, promotional campaign support, and storefront enhancements for a high-volume apparel brand.",
    },
    {
      name: "Hilma",
      slug: "hilma",
      image: "/images/hilma.png",
      role: "Lead Shopify Developer",
      description:
        "Custom Shopify development, responsive storefront experiences, and conversion-focused implementation for a wellness brand.",
    },
    {
      name: "Doughy",
      slug: "doughy",
      image: "/images/eatdoughy.png",
      role: "Lead Shopify Developer",
      description:
        "Custom Shopify development, responsive storefront experiences, and conversion-focused implementation for a fast-growing food brand.",
    },
    {
      name: "TKEES",
      slug: "tkees",
      image: "/images/tkees.png",
      role: "Lead Shopify Developer",
      description:
        "Custom Shopify development and storefront enhancements for a premium fashion and footwear brand."
    },
    {
      name: "Taylor Stitch",
      slug: "taylor",
      image: "/images/taylorsticth.png",
      role: "Lead Shopify Developer",
      description:
        "Custom Shopify development and storefront enhancements for a premium menswear and lifestyle brand."
    },
    {
      name: "HBCU Only",
      slug: "hbcu",
      image: "/images/hbcuonly.png",
      role: "Store Manager",
      description:
        "Ongoing Shopify development, store management, and storefront enhancements for a leading HBCU lifestyle brand."
    },
    {
      name: "NeonQueer",
      slug: "neon",
      image: "/images/neonqueer.png",
      role: "Lead Shopify Developer",
      description:
        "Custom Shopify development and storefront enhancements for a bold LGBTQ+ lifestyle and ecommerce brand."

    },
  ];

  const [projectPage, setProjectPage] = useState(0);

  const projectsPerPage = 3;

  const visibleProjects = projects.slice(
    projectPage * projectsPerPage,
    projectPage * projectsPerPage + projectsPerPage
  );

  return (
    <>
      <Navbar />

      <main id="top" className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="hero-glow absolute right-0 top-20" />

        <div className="mx-auto max-w-7xl px-6 py-16">

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            {/* HERO */}

            <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">

              {/* LEFT */}

              <div className="relative z-10 lg:mt-6">
                <p className="mb-5 text-xs md:text-sm uppercase tracking-[0.2em] bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                  Shopify Plus Developer & AI-Augmented Builder
                </p>

                <h1
                  className="
                mb-6
                text-2xl
                font-bold
                leading-[1.1]
                md:text-3xl
                lg:text-[2.6rem]
              "
                >
                  <span className="block">
                    Building High-Converting
                  </span>

                  <span className="block">
                    Shopify Experiences
                  </span>

                  <span className="block whitespace-nowrap">
                    With {" "}
                    <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                      AI-Powered
                    </span>{" "}
                    Workflows
                  </span>
                </h1>

                <p className="mb-8 max-w-xl text-base text-zinc-400 md:text-lg">
                  I help ambitious ecommerce brands scale with custom
                  Shopify Plus solutions, performance optimization,
                  and AI-assisted development workflows.
                </p>

                <div className="relative z-10 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-xl bg-white px-5 py-2.5 font-medium text-black transition hover:opacity-90"
                  >
                    View My Work
                  </a>

                  <a
                    href="https://calendly.com/devmatthew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-2.5 transition hover:border-violet-500/40"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>

              {/* RIGHT */}

              <div className="relative lg:pl-0">
                <div className="absolute inset-0 pointer-events-none bg-violet-500/10 blur-[120px]" />
                <div className="relative">

                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[220px]" />
                  </div>

                  <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[540px]">
                    {/* Laptop Body */}

                    <div className="rounded-[32px] border border-zinc-700 bg-zinc-900 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">

                      {/* Notch */}

                      <div className="absolute left-1/2 top-2 -translate-x-1/2 h-1.5 w-20 rounded-full bg-zinc-800 shadow-inner" />

                      {/* Screen */}

                      <div className="relative h-[240px] sm:h-[28px] lg:h-[340px] overflow-hidden rounded-[18px] bg-black">

                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          className="h-full w-full object-cover"
                        >
                          <source
                            src="/videos/clutch.mp4"
                            type="video/mp4"
                          />
                        </video>

                      </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="relative mx-auto hidden w-[104%] -translate-x-[2%] lg:block">
                      <div className="relative h-6 rounded-b-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700">

                        <div className="absolute left-1/2 top-2 -translate-x-1/2 h-2 w-24 rounded-full bg-zinc-800 shadow-inner" />

                      </div>
                    </div>
                    <div className="mx-auto h-10 w-[95%] " />

                  </div>

                </div>


                {/* PERFORMANCE CARD */}

                <div className="absolute -left-6 top-24 hidden lg:flex h-[170px] w-[160px] flex-col justify-between rounded-3xl border border-zinc-800 bg-black/95 p-5 shadow-2xl backdrop-blur-md">

                  <p className="text-center text-sm  text-zinc-400">
                    Performance
                  </p>

                  <div className="relative flex items-center justify-center">

                    <svg width="90" height="90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#27272a"
                        strokeWidth="5"
                        fill="none"
                      />

                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#8b5cf6"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="200"
                        strokeDashoffset="45"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>

                    <div className="absolute text-3xl font-bold">
                      98
                    </div>

                  </div>

                  <p className="text-center text-sm text-zinc-400">
                    Lighthouse Score
                  </p>

                </div>

                {/* CONVERSION CARD */}

                <div className="absolute -right-6 bottom-24 hidden lg:flex h-[170px] w-[160px] flex-col justify-between rounded-3xl border border-zinc-800 bg-black/95 p-5 shadow-2xl backdrop-blur-md">

                  <p className="text-center text-sm text-zinc-400">
                    Conversion Rate
                  </p>

                  <h3 className="text-center text-4xl font-bold">
                    +27%
                  </h3>

                  <svg
                    className="mx-auto h-12 w-full"
                    viewBox="0 0 120 40"
                    fill="none"
                  >
                    <path
                      d="M0 30
                    C20 25,
                    35 35,
                    55 20
                    S90 25,
                    120 5"
                      stroke="#8b5cf6"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="120" cy="5" r="3" fill="#8b5cf6" />
                  </svg>

                  <p className="text-center text-sm text-zinc-400">
                    vs previous LP
                  </p>

                </div>
              </div>

            </div>
            <div className="mt-4 flex justify-center lg:hidden">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-black/80 px-5 py-2 text-sm text-zinc-400 backdrop-blur">
                Shopify Plus
                <span className="mx-3 text-zinc-600">•</span>
                CRO
                <span className="mx-3 text-zinc-600">•</span>
                Store Management
              </div>
            </div>

          </motion.section>

          {/* AI WORKFLOW */}

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-20 rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
              <div className="  px-4 pt-8 ">

                {/* TOP ROW */}

                <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">

                  {/* LEFT */}

                  <div className="">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em]">
                      <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                        AI-Powered Development Workflow
                      </span>
                    </p>

                    <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl  font-bold ">
                      Building Smarter with AI
                    </h2>

                    <p className="max-w-lg text-sm leading-7 md:text-base lg:text-lg text-zinc-400">
                      I leverage cutting-edge AI tools to accelerate development,
                      enhance code quality, and solve complex problems faster.
                    </p>
                  </div>

                  {/* RIGHT */}

                  <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-14 lg:pl-8">

                    {/* CLAUDE */}

                    <div className="flex-1 rounded-xl border border-zinc-800 bg-black p-6 text-center transition hover:border-violet-500/40">
                      <Image
                        src="/images/claude-ai-icon.png"
                        alt="Claude"
                        width={60}
                        height={60}
                        className="mx-auto mb-5 h-14 w-14 object-contain"
                      />

                      <h3 className="font-semibold">
                        Claude
                      </h3>
                    </div>

                    {/* CURSOR */}

                    <div className="flex-1 rounded-xl border border-zinc-800 bg-black p-6 text-center transition hover:border-violet-500/40">
                      <Image
                        src="/images/cursor-ai.png"
                        alt="Cursor"
                        width={60}
                        height={60}
                        className="mx-auto mb-5 h-14 w-14 object-contain"
                      />

                      <h3 className="font-semibold">
                        Cursor
                      </h3>
                    </div>

                    {/* CHATGPT */}

                    <div className="flex-1 rounded-xl border border-zinc-800 bg-black p-6 text-center transition hover:border-violet-500/40">
                      <Image
                        src="/images/chatgptlogo.jpg"
                        alt="ChatGPT"
                        width={60}
                        height={60}
                        className="mx-auto mb-5 h-14 w-14 object-contain"
                      />

                      <h3 className="font-semibold">
                        ChatGPT
                      </h3>
                    </div>

                    {/* COPILOT */}

                    <div className="flex-1 rounded-xl border border-zinc-800 bg-black p-6 text-center transition hover:border-violet-500/40">
                      <Image
                        src="/images/copilot.png"
                        alt="GitHub Copilot"
                        width={60}
                        height={60}
                        className="mx-auto mb-5 h-14 w-14 object-contain"
                      />

                      <h3 className="font-semibold">
                        Copilot
                      </h3>
                    </div>

                  </div>

                </div>

                {/* BENEFITS */}

                <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-zinc-800 bg-black/20 px-5 py-6 md:grid-cols-2 lg:flex lg:justify-center lg:gap-14 lg:px-10 lg:py-8">


                  {/* Faster Development */}

                  <div className="flex h-14 items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      ⚡
                    </div>

                    <h4 className="font-semibold">
                      Faster Development
                    </h4>
                  </div>

                  {/* Smarter Solutions */}

                  <div className="flex h-14 items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      🧠
                    </div>

                    <h4 className="font-semibold">
                      Smarter Solutions
                    </h4>
                  </div>

                  {/* Better Code */}

                  <div className="flex h-14 items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      ✓
                    </div>

                    <h4 className="font-semibold">
                      Better Code Quality
                    </h4>
                  </div>

                  {/* Continuous Learning */}

                  <div className="flex h-14 items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      ↗
                    </div>

                    <h4 className="font-semibold">
                      Continuous Learning
                    </h4>
                  </div>
                </div>
                <div className=" pt-6 "></div>
              </div>
            </div>
          </motion.section>

          {/* SERVICES + SKILLS */}

          <div id="services" ></div>

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mt-20 grid gap-8 lg:grid-cols-2">

              {/* SERVICES */}

              <div className="  rounded-2xl border border-zinc-800 bg-black/40 p-6">

                <p className="mb-2 text-xs uppercase tracking-[0.2em]">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    Services
                  </span>
                </p>

                <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                  How I Can Help Your Brand Grow
                </h2>

                <div className="grid lg:grid-cols-2 gap-4">

                  {/* Service 1 */}

                  <div className="rounded-xl border border-zinc-800 bg-black p-4">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      🛍
                    </div>

                    <h3 className="mb-2 font-semibold">
                      Shopify Theme Development
                    </h3>

                    <p className="text-sm leading-6 text-zinc-500">
                      Custom themes built for performance,
                      scalability, and conversions.
                    </p>
                  </div>

                  {/* Service 2 */}

                  <div className="rounded-xl border border-zinc-800 bg-black p-4">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      🛒
                    </div>

                    <h3 className="mb-2 font-semibold">
                      Shopify Plus Development
                    </h3>

                    <p className="text-sm leading-6 text-zinc-500">
                      Advanced customizations for Shopify Plus stores
                      with complex requirements.
                    </p>
                  </div>

                  {/* Service 3 */}

                  <div className="rounded-xl border border-zinc-800 bg-black p-4">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      ☀
                    </div>

                    <h3 className="mb-2 font-semibold">
                      Conversion Rate Optimization
                    </h3>

                    <p className="text-sm leading-6 text-zinc-500">
                      Data-driven strategies to improve UX
                      and increase conversions.
                    </p>
                  </div>

                  {/* Service 4 */}

                  <div className="rounded-xl border border-zinc-800 bg-black p-4">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      ⬢
                    </div>

                    <h3 className="mb-2 font-semibold">
                      Integrations & Automation
                    </h3>

                    <p className="text-sm leading-6 text-zinc-500">
                      Klaviyo, Recharge, Stripe, 3PL and
                      other third-party integrations.
                    </p>
                  </div>

                </div>

              </div>

              {/* SKILLS */}

              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6">

                <p className="mb-4 text-xs uppercase tracking-[0.2em]">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    Technical Skills
                  </span>
                </p>

                <div className="mb-8 flex flex-wrap gap-2">

                  {[
                    "Shopify Plus",
                    "Liquid",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "HTML",
                    "CSS",
                    "Klaviyo",
                    "Recharge",
                    "Metafields",
                    "Shopify Functions",
                    "Git",
                    "GitHub",
                    "REST API",
                    "GraphQL",
                    "JSON"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <p className="mb-4 text-xs uppercase tracking-[0.2em]">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    AI Development Tools
                  </span>
                </p>

                <div className="flex flex-wrap gap-2">

                  {[
                    "Cursor",
                    "Claude",
                    "ChatGPT",
                    "GitHub Copilot",
                    "OpenAI API",
                    "Prompt Engineering",
                    "AI-Assisted Development"
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          </motion.section>

          {/* FEATURED PROJECTS */}

          <div id="projects" ></div>

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mt-20 rounded-2xl border border-zinc-800 bg-black/40 p-6">

              {/* HEADER */}

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.2em]">
                    <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                      Featured Projects
                    </span>
                  </p>

                  <h2 className="text-2xl font-bold md:text-3xl">
                    Selected Work That Delivers Results
                  </h2>

                </div>

                <div className="hidden gap-2 lg:flex">

                  <button
                    onClick={() =>
                      setProjectPage(
                        (prev) =>
                          (prev - 1 + Math.ceil(projects.length / projectsPerPage)) %
                          Math.ceil(projects.length / projectsPerPage)
                      )
                    }
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40"
                  >
                    ←
                  </button>

                  <button
                    onClick={() =>
                      setProjectPage(
                        (prev) =>
                          (prev + 1) %
                          Math.ceil(projects.length / projectsPerPage)
                      )
                    }
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40"
                  >
                    →
                  </button>

                </div>

              </div>

              {/* PROJECT GRID */}

              <p className="mb-4 text-xs text-zinc-500 lg:hidden">
                Swipe to view more →
              </p>

              {/* MOBILE */}

              <div className="flex gap-4 overflow-x-auto pb-2 lg:hidden">

                {projects.map((project) => (

                  <div
                    key={project.name}
                    className="min-w-[300px] rounded-2xl border border-zinc-800 bg-black p-3"
                  >

                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={340}
                      className="mb-4 rounded-xl border border-zinc-800"
                    />
                    <div className="mb-4">

                      <div className="mb-3 flex flex-col gap-2">

                        <h3 className="text-2xl font-semibold">
                          {project.name}
                        </h3>

                        <div>
                          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                            {project.role}
                          </span>
                        </div>

                      </div>

                      <p className="text-sm text-zinc-500">
                        {project.description}
                      </p>

                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="block w-full rounded-xl border border-zinc-800 py-3 text-center text-sm transition hover:border-violet-500/40"
                    >
                      View Project →
                    </Link>

                  </div>

                ))}

              </div>

              {/* DESKTOP */}

              <div className="hidden gap-6 lg:grid lg:grid-cols-3">

                {visibleProjects.map((project) => (

                  <div
                    key={project.name}
                    className="rounded-2xl border border-zinc-800 bg-black p-3"
                  >

                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={340}
                      className="mb-4 rounded-xl border border-zinc-800"
                    />

                    <div className="mb-4">

                      <div className="mb-3 flex items-start justify-between gap-4">

                        <h3 className="text-2xl font-semibold">
                          {project.name}
                        </h3>

                        <span className="whitespace-nowrap rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                          {project.role}
                        </span>

                      </div>

                      <p className="text-sm text-zinc-500">
                        {project.description}
                      </p>

                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="block w-full rounded-xl border border-zinc-800 py-3 text-center text-sm transition hover:border-violet-500/40"
                    >
                      View Project →
                    </Link>

                  </div>

                ))}

              </div>

            </div>
          </motion.section>

          {/* ABOUT + TESTIMONIALS */}

          <div id="about" ></div>
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

              {/* ABOUT */}

              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6">

                <p className="mb-6 text-xs uppercase tracking-[0.2em]">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    Hey There!
                  </span>
                </p>

                <div className="flex items-center gap-5">

                  <Image
                    src="/images/portpic2.png"
                    alt="Precious Asubiaro"
                    width={100}
                    height={100}
                    className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">
                      I'M MATTHEW
                    </h2>

                    <p className="mt-1 text-sm font-medium text-violet-400">
                      Shopify Plus Developer & AI-Augmented Builder
                    </p>

                  </div>

                </div>

                <p className="mt-6 text-sm leading-7 text-zinc-400">
                  I've helped ecommerce brands over the years improve their Shopify stores through custom development, conversion optimization, and ongoing technical support.
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  If you're looking for a faster, higher-converting storefront that scales with your business, you're in the right place.
                </p>

              </div>

              {/* TESTIMONIAL */}

              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6">

                <p className="mb-3 text-xs uppercase tracking-[0.2em]">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                    What Clients Say
                  </span>
                </p>

                <div className="mb-4 text-5xl text-zinc-700">
                  ❝
                </div>

                <p className="mb-10 max-w-[600px] text-base leading-7 text-zinc-400">
                  {testimonials[activeTestimonial].quote}
                </p>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold">
                        {testimonials[activeTestimonial].name}
                      </h4>

                      <p className="text-sm text-zinc-500">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-2">

                    <button
                      onClick={prevTestimonial}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40"
                    >
                      ←
                    </button>

                    <button
                      onClick={nextTestimonial}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 transition hover:border-violet-500/40"
                    >
                      →
                    </button>

                  </div>

                </div>

                <div className="mt-6 flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 rounded-full transition-all ${index === activeTestimonial
                        ? "w-8 bg-violet-500"
                        : "w-2 bg-zinc-700"
                        }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            {/* FINAL CTA */}

            <div className="mt-12 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-700/80 via-violet-600/60 to-violet-700/80 px-8 py-5">

              <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

                {/* LEFT SIDE */}

                <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center">

                  {/* ICON */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21 3L3 10.5L10 13L12.5 20L21 3Z" />
                    </svg>
                  </div>

                  {/* TEXT */}

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Let's Build Something Amazing Together
                    </h3>

                    <p className="mt-1 text-sm text-violet-100">
                      Have a project in mind or want to discuss how I can help
                      your business grow?
                    </p>
                  </div>

                </div>

                {/* BUTTON */}

                <a
                  href="/contact"
                  className="w-full rounded-xl bg-white px-6 py-3 text-center font-medium text-black transition hover:opacity-90 sm:w-auto"
                >
                  Get In Touch ↗
                </a>

              </div>

            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}