import { motion, useReducedMotion } from "motion/react";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const embers = [
    { top: "10%", left: "6%", size: 220, delay: 0 },
    { top: "60%", left: "88%", size: 260, delay: 0.8 },
    { top: "85%", left: "20%", size: 180, delay: 1.4 },
];

const books = [
    {
        title: "Imposter Syndrome",
        author: "Dr. Joshan A. Flowers, DSL",
        img: "/images/Portfolio3.png",
        rotate: -2,
    },
    {
        title: "Dirt Is Forever Deadly",
        author: "Katie Loftis",
        img: "/images/Portfolio4.png",
        rotate: 2,
    },
    {
        title: "Free Yourself From Pain",
        author: "Lesvi Ferrel",
        img: "/images/Portfolio5.png",
        rotate: -1.5,
    },
    {
        title: "Cancer Deception",
        author: "Vikki LeBeau",
        img: "/images/Portfolio6.png",
        rotate: 2.5,
    },
    {
        title: "Silent Fear",
        author: "Chhavyvann So",
        img: "/images/Portfolio1.png",
        rotate: -2,
    },
    {
        title: "I Am a Boy",
        author: "Pamela Avis Harry",
        img: "/images/Portfolio2.png",
        rotate: 1.5,
    },
];

export default function Portfolio() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section id="portfolio" className="relative w-full overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0">
                <img
                    src="/images/Black-bg.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/45" />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(120% 90% at 50% 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)",
                    }}
                />
            </div>

            {!shouldReduceMotion &&
                embers.map((e, i) => (
                    <motion.span
                        key={i}
                        className="pointer-events-none absolute rounded-full"
                        style={{
                            top: e.top,
                            left: e.left,
                            width: e.size,
                            height: e.size,
                            background:
                                "radial-gradient(circle, rgba(201,162,75,0.16) 0%, rgba(201,162,75,0) 70%)",
                            filter: "blur(6px)",
                        }}
                        animate={{ opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, delay: e.delay, ease: "easeInOut" }}
                    />
                ))}

            <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.4 }}
                    variants={container}
                    className="mx-auto max-w-2xl text-center"
                >
                    <motion.div variants={fadeUp} className="mb-5 flex items-center justify-center gap-4">
                        <span className="h-px w-14 bg-gold" />
                        <span className="font-accent text-[13px] font-bold uppercase tracking-[0.34em] text-gold">
                            Our Portfolio
                        </span>
                        <span className="h-px w-14 bg-gold" />
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-accent text-[28px] leading-[1.1] text-parchment [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
                    >
                        <span className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-[-0.01em]">Stories We've    </span>
                        <span className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-[-0.01em] text-gold-light"> Helped Bind</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-6 max-w-lg font-body text-[1.2rem] leading-[1.85] text-parchment/75"
                    >
                        A shelf pulled from our own catalogue — memoirs,
                        guidance, and imagination, each one carried from a
                        rough manuscript to a book someone is proud to hold.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={container}
                    className="mt-20 grid grid-cols-2 gap-x-8 gap-y-20 sm:grid-cols-3 sm:gap-x-10 lg:mt-24 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-24 xl:gap-x-20"
                >
                    {books.map((book) => (
                        <motion.div
                            key={book.title}
                            variants={fadeUp}
                            whileHover={
                                shouldReduceMotion
                                    ? undefined
                                    : { rotate: 0, y: -10, transition: { duration: 0.35, ease: "easeOut" } }
                            }
                            style={{ rotate: shouldReduceMotion ? 0 : book.rotate }}
                            className="group relative mx-auto w-full max-w-[320px]"
                        >
                            <div
                                className="relative aspect-[3/4.5] rounded-[2px] p-[8px]"
                                style={{
                                    background:
                                        "linear-gradient(155deg, var(--color-gold-light) 0%, var(--color-gold) 45%, #7a5b22 100%)",
                                    boxShadow:
                                        "0 26px 40px -16px rgba(0,0,0,0.7), 0 2px 0 rgba(255,255,255,0.15) inset",
                                }}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-[1px] bg-ink p-[4px]">
                                    <div className="relative h-full w-full overflow-hidden">
                                        <img
                                            src={book.img}
                                            alt={`${book.title} — front cover`}
                                            className="h-full w-full object-cover object-right transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-0"
                                            style={{
                                                background:
                                                    "radial-gradient(120% 120% at 50% 50%, transparent 60%, rgba(11,9,6,0.35) 100%)",
                                            }}
                                        />
                                        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(230,200,119,0.25)]" />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="relative mx-auto -mt-3 w-[88%] px-3 py-2 text-center"
                                style={{
                                    background:
                                        "linear-gradient(180deg, var(--color-gold-light) 0%, var(--color-gold) 100%)",
                                    boxShadow: "0 8px 14px -8px rgba(0,0,0,0.6)",
                                }}
                            >
                                <span className="block truncate font-accent text-[14px] leading-tight tracking-[0.02em] text-ink sm:text-[15px]">
                                    {book.title}
                                </span>
                                <span className="mt-0.5 block truncate font-display italic text-[11px] text-ink/70 sm:text-[12px]">
                                    {book.author}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.6 }}
                    variants={fadeUp}
                    className="mt-20 flex justify-center lg:mt-24"
                >
                    <a href="#contact" className="hero-btn hero-btn-primary">
                        <span className="hero-btn-overlay"></span>
                        <span className="hero-btn-inner">
                            View Full Catalogue
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
                    </a>
                </motion.div>
            </div>
        </section>
    );
}