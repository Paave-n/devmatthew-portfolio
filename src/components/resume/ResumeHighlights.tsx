export default function ResumeHighlights() {
    const highlights = [
        {
            value: "$70K+",
            label: "Upwork Earnings",
        },
        {
            value: "100%",
            label: "Job Success",
        },
        {
            value: "5+",
            label: "Years Experience",
        },
        {
            value: "$9M+",
            label: "Annual Store Revenue",
        },
    ];

    return (
        <section className="py-10">

            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Snapshot
            </p>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                {highlights.map((item) => (

                    <div
                        key={item.label}
                        className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition duration-300 hover:border-violet-500/40"
                    >

                        <h2 className="text-3xl font-bold text-violet-400">
                            {item.value}
                        </h2>

                        <p className="mt-2 text-sm leading-5 text-zinc-500">
                            {item.label}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}