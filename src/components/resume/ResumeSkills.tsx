export default function ResumeSkills() {
    const skills = [
        "Shopify Plus",
        "Liquid",
        "Theme Development",
        "Custom Sections",
        "Shopify Functions",
        "Shopify Flow & Automation",
        "Metafields",
        "Storefront API",
        "Admin API",
        "GraphQL",
        "Klaviyo",
        "Recharge",
        "Performance Optimization",
        "Conversion Rate Optimization",
        "Store Management",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Git",
    ];

    return (
        <section className="py-6">

            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Technical Skills
            </p>

            <div className="flex flex-wrap gap-2">

                {skills.map((skill) => (

                    <span
                        key={skill}
                        className="rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-300"
                    >
                        {skill}
                    </span>

                ))}

            </div>

        </section>
    );
}