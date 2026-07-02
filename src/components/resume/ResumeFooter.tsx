import {
    HiOutlineGlobeAlt,
    HiOutlineMail,
} from "react-icons/hi";

export default function ResumeFooter() {
    return (
        <footer className="border-t border-zinc-800 pt-6">

            <div className="flex flex-col items-center gap-5">

                <div className="grid w-full max-w-xl grid-cols-2 gap-8">

                    {/* Portfolio */}

                    <div className="text-center">

                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Portfolio
                        </p>

                        <a
                            href="https://devmatthew.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-2 text-base font-medium text-violet-400 transition hover:text-violet-300"
                        >
                            <HiOutlineGlobeAlt size={16} />
                            <span>devmatthew.co</span>
                        </a>

                    </div>

                    {/* Email */}

                    <div className="text-center">

                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            Contact
                        </p>

                        <a
                            href="mailto:hello@devmatthew.co"
                            className="mt-2 inline-flex items-center gap-2 text-base font-medium text-violet-400 transition hover:text-violet-300"
                        >
                            <HiOutlineMail size={16} />
                            <span>hello@devmatthew.co</span>
                        </a>

                    </div>

                </div>

                <p className="text-xs text-zinc-600">
                    Updated June 2026
                </p>

            </div>

        </footer>
    );
}