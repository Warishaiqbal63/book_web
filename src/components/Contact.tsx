import { motion, useReducedMotion } from "motion/react";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.1, delay: 0.15 } },
};

function CornerFlourish({ className }: { className?: string }) {
    return (
        <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            className={className}
        >
            <path
                d="M2 32V10c0-4.4 3.6-8 8-8h22"
                stroke="var(--color-gold)"
                strokeWidth="1"
            />
            <circle cx="2" cy="32" r="2" fill="var(--color-gold)" />
        </svg>
    );
}

const contactDetails = [
    {
        label: "Our Address",
        value: "14 Fenwick Row, Bloomsbury, London WC1",
        icon: (
            <path
                d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                stroke="var(--color-oxblood)"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        ),
    },
    {
        label: "Correspondence",
        value: "letters@wordsworthpublishing.com",
        icon: (
            <path
                d="M3 6h18v12H3V6Zm0 0 9 7 9-7"
                stroke="var(--color-oxblood)"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        ),
    },
    {
        label: "By Telephone",
        value: "+44 20 7946 0891",
        icon: (
            <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z"
                stroke="var(--color-oxblood)"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        ),
    },
    {
        label: "Office Hours",
        value: "Monday – Friday, 9am to 5pm",
        icon: (
            <path
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2"
                stroke="var(--color-oxblood)"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        ),
    },
];

export default function Contact() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section id="contact" className="relative w-full overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0">
                <img
                    src="/images/Craft-bg.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/22" />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(120% 90% at 50% 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.32) 100%)",
                    }}
                />
            </div>

            <motion.img
                initial={initial}
                whileInView={animate}
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                src="/images/Contact.jpg"
                alt="A weathered antique rotary telephone"
                className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[42%] sm:block lg:w-[36%]"
                style={{
                    maskImage: "linear-gradient(to right, black 45%, transparent 92%)",
                    WebkitMaskImage: "linear-gradient(to right, black 45%, transparent 92%)",
                    filter: "sepia(0.35) contrast(1.05) brightness(0.92)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-10">
                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.4 }}
                    variants={container}
                    className="mx-auto max-w-xl text-center"
                >
                    <motion.div variants={fadeUp} className="mb-5 flex items-center justify-center gap-4">
                        <span className="h-px w-14 bg-gold" />
                        <span className="font-accent text-[13px] font-bold uppercase tracking-[0.34em] text-gold">
                            Get In Touch
                        </span>
                        <span className="h-px w-14 bg-gold" />
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-accent text-[28px] leading-[1.15] text-parchment [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
                    >
                        <span className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1]">Let's Write Your</span>
                        <span className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] block text-gold-light">Next Chapter</span>
                    </motion.h2>

                    <motion.div variants={fadeUp} className="my-6 flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-gold/60" />
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)">
                            <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                        </svg>
                        <span className="h-px w-10 bg-gold/60" />
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="font-body text-[1.2rem] leading-[1.85] text-parchment/75"
                    >
                        Whether you have a manuscript, a question, or the
                        beginning of an idea — we'd be glad to hear from you.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    className="relative mx-auto mt-16 max-w-5xl lg:mt-20"
                >
                    <CornerFlourish className="absolute -left-2 -top-2" />
                    <CornerFlourish className="absolute -right-2 -top-2 rotate-90" />
                    <CornerFlourish className="absolute -right-2 -bottom-2 rotate-180" />
                    <CornerFlourish className="absolute -left-2 -bottom-2 -rotate-90" />

                    <div className="relative overflow-hidden rounded-[2px] border border-gold/40 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-0">
                            <img
                                src="/images/about-bg.png"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-parchment/25" />
                        </div>
                        <div className="pointer-events-none absolute inset-[7px] border border-oxblood/15" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1px_1.15fr]">
                            <div className="flex flex-col gap-8 p-9 sm:p-12">
                                <div className="flex items-center gap-4">
                                    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-oxblood/40">
                                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                                            <path
                                                d="M6 20c3-6 7-9 8-9M6 20c3 6 7 9 8 9M34 20c-3-6-7-9-8-9M34 20c-3 6-7 9-8 9"
                                                stroke="var(--color-oxblood)"
                                                strokeWidth="0.9"
                                            />
                                            <text
                                                x="20"
                                                y="25"
                                                textAnchor="middle"
                                                fontFamily="Old Style 1 SC, Georgia, serif"
                                                fontSize="15"
                                                fill="var(--color-oxblood)"
                                            >
                                                W
                                            </text>
                                        </svg>
                                    </span>
                                    <span>
                                        <span className="block font-accent text-[15px] uppercase tracking-[0.14em] text-ink">
                                            Write To Us
                                        </span>
                                        <span className="mt-1 block font-display italic text-[13px] text-ink/60">
                                            We read every letter.
                                        </span>
                                    </span>
                                </div>

                                <ul className="flex flex-col gap-6">
                                    {contactDetails.map((item) => (
                                        <li key={item.label} className="flex items-start gap-4">
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="mt-0.5 flex-none"
                                            >
                                                {item.icon}
                                            </svg>
                                            <span>
                                                <span className="block font-accent text-[11px] uppercase tracking-[0.2em] text-oxblood">
                                                    {item.label}
                                                </span>
                                                <span className="mt-1 block font-body text-[0.98rem] leading-snug text-ink/85">
                                                    {item.value}
                                                </span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="hidden bg-oxblood/15 lg:block" />
                            <div className="mx-9 h-px bg-oxblood/15 sm:mx-12 lg:hidden" />

                            <form className="flex flex-col gap-6 p-9 sm:p-12">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="font-accent text-[11px] uppercase tracking-[0.2em] text-oxblood">
                                            Your Name
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Amelia Hartman"
                                            className="mt-2 w-full border-0 border-b border-ink/25 bg-transparent pb-2 font-body text-[0.98rem] text-ink placeholder:text-ink/35 focus:border-oxblood focus:outline-none"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="font-accent text-[11px] uppercase tracking-[0.2em] text-oxblood">
                                            Your Email
                                        </span>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="mt-2 w-full border-0 border-b border-ink/25 bg-transparent pb-2 font-body text-[0.98rem] text-ink placeholder:text-ink/35 focus:border-oxblood focus:outline-none"
                                        />
                                    </label>
                                </div>

                                <label className="block">
                                    <span className="font-accent text-[11px] uppercase tracking-[0.2em] text-oxblood">
                                        Subject
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Regarding my manuscript"
                                        className="mt-2 w-full border-0 border-b border-ink/25 bg-transparent pb-2 font-body text-[0.98rem] text-ink placeholder:text-ink/35 focus:border-oxblood focus:outline-none"
                                    />
                                </label>

                                <label className="block">
                                    <span className="font-accent text-[11px] uppercase tracking-[0.2em] text-oxblood">
                                        Your Message
                                    </span>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us a little about your story..."
                                        className="mt-2 w-full resize-none border-0 border-b border-ink/25 bg-transparent pb-2 font-body text-[0.98rem] text-ink placeholder:text-ink/35 focus:border-oxblood focus:outline-none"
                                    />
                                </label>

                                <div className="mt-2 flex items-center justify-between gap-4">
                                    <span className="font-display italic text-[12px] text-ink/50">
                                        Sealed with care, sent with speed.
                                    </span>

                                    <button type="submit" className="hero-btn hero-btn-primary !w-auto px-8">
                                        <span className="hero-btn-overlay"></span>
                                        <span className="hero-btn-inner">
                                            Send Message
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 19L19 5M19 5H12M19 5V12"
                                                    stroke="currentColor"
                                                    strokeWidth="1.4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}