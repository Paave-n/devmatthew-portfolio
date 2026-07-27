export default function ResumeBrands() {
    const brands = [
        {
            name: "Clutch Charger",
            subtitle: "Shopify Plus Development",
            url: "https://clutchcharger.com",
        },
        {
            name: "Beautiful Disaster",
            subtitle: "Shopify Development",
            url: "https://www.bdrocks.com",
        },
        {
            name: "Freida Rothman",
            subtitle: "Shopify Plus Development",
            url: "https://www.freidarothman.com",
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

                        <a
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold transition hover:text-violet-400"
                        >
                            {brand.name}
                        </a>

                        <p className="mt-3 text-sm text-violet-400">
                            {brand.subtitle}
                        </p>

                    </div>

                ))}

            </div>

            <p className="mt-5 text-sm leading-6 text-zinc-500">

                Shopify Developer responsible for custom theme development, feature implementation,
                conversion optimization, technical maintenance, and experimentation across
                Shopify and Shopify Plus storefronts.

            </p>

        </section>
    );
}