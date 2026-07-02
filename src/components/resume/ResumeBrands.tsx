export default function ResumeBrands() {
    const brands = [
        {
            name: "Clutch Charger",
            revenue: "$6.1M",
            subtitle: "2025 Annual Revenue",
        },
        {
            name: "Beautiful Disaster",
            revenue: "$2.1M",
            subtitle: "2025 Annual Revenue",
        },
        {
            name: "Freida Rothman",
            revenue: "$1.4M",
            subtitle: "2025 Annual Revenue",
        },
    ];

    return (
        <section className="py-8">

            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Selected Brands
            </p>

            <div className="grid gap-4 md:grid-cols-3">

                {brands.map((brand) => (

                    <div
                        key={brand.name}
                        className="rounded-xl border border-zinc-800 p-5 transition duration-300 hover:border-violet-500/40"
                    >

                        <h3 className="text-lg font-semibold">
                            {brand.name}
                        </h3>

                        <p className="mt-3 text-2xl font-bold text-violet-400">
                            {brand.revenue}
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                            {brand.subtitle}
                        </p>

                    </div>

                ))}

            </div>

            <p className="mt-5 text-sm leading-6 text-zinc-500">

                Responsible for ongoing Shopify Plus development, conversion optimization,
                feature implementation, technical maintenance, and experimentation across
                high-traffic ecommerce storefronts.

            </p>

        </section>
    );
}