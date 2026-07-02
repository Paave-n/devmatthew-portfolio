import Image from "next/image";

export default function ResumeHero() {
    return (
        <section className=" mt-12 mt-4 border-b border-zinc-800 py-8">

            <div className="flex items-center gap-6">

                {/* Logo */}

                <Image
                    src="/images/mattlogo9.png"
                    alt="Matthew Ikhinobele"
                    width={160}
                    height={55}
                    className="w-28 flex-shrink-0 object-contain"
                />

                {/* Name */}

                <div>

                    <h1 className="text-4xl font-bold tracking-tight">
                        Matthew Ikhinobele
                    </h1>

                    <div className="mt-4 mb-6 flex flex-wrap gap-3">

                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
                            Shopify Developer
                        </span>

                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
                            Shopify Plus
                        </span>

                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
                            AI-Augmented Development
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}