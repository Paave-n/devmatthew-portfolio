export default function ResumeExperience() {
    const experience = [
        {
            company: "Freelance",
            role: "Senior Shopify Developer",
            period: "2020 – Present",
            description:
                "Develop and manage Shopify and Shopify Plus stores for ecommerce brands, delivering custom themes, AI-assisted development workflows, Shopify Functions, Flow automations, GraphQL integrations, and long-term technical support.",
            achievements: [
                "Manage multiple Shopify Plus stores",
                "Develop custom Liquid sections & features",
                "Implement Shopify Functions & Flow automations",
                "Optimize storefront performance & CRO",
            ],
        },
        {
            company: "Kalisper Agency",
            role: "Shopify Developer",
            period: "2023 – 2025",
            description:
                "Collaborated with designers, marketers, and project managers to deliver production-ready Shopify solutions while maintaining enterprise Shopify Plus stores.",
            achievements: [
                "Built custom storefront features",
                "Maintained Shopify Plus client stores",
                "Delivered responsive, high-performance themes",
                "Integrated third-party Shopify apps",
            ],
        },
    ];

    return (
        <section className="py-8">

            <p className="mb-6 mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Experience
            </p>

            <div className="space-y-4">

                {experience.map((job) => (

                    <div
                        key={job.company}
                        className="rounded-xl border border-zinc-800 p-5"
                    >

                        {/* HEADER */}

                        <div className="flex items-start justify-between gap-4">

                            <div>

                                <h2 className="text-xl font-semibold">
                                    {job.role}
                                </h2>

                                <p className="mt-1 font-medium text-violet-400">
                                    {job.company}
                                </p>

                            </div>

                            <p className="whitespace-nowrap text-sm font-medium text-zinc-500">
                                {job.period}
                            </p>

                        </div>

                        {/* DESCRIPTION */}

                        <p className="mt-4 leading-6 text-zinc-400">
                            {job.description}
                        </p>

                        {/* ACHIEVEMENTS */}

                        <ul className="mt-4 grid gap-x-8 gap-y-2 md:grid-cols-2">

                            {job.achievements.map((item) => (

                                <li
                                    key={item}
                                    className="flex items-start gap-2"
                                >

                                    <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />

                                    <span className="leading-6 text-zinc-300">
                                        {item}
                                    </span>

                                </li>

                            ))}

                        </ul>

                    </div>

                ))}

            </div>

        </section>
    );
}