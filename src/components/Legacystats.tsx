import { motion, useReducedMotion } from "motion/react";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, delay: 0.15 },
    },
};

const stats = [
    {
        id: "books",
        value: "1000+",
        label: "Books Published",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                    d="M4 4c3 0 5.5 1 7 3v13c-1.5-2-4-3-7-3V4Z"
                    stroke="var(--color-gold)"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
                <path
                    d="M20 4c-3 0-5.5 1-7 3v13c1.5-2 4-3 7-3V4Z"
                    stroke="var(--color-gold)"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "authors",
        value: "500+",
        label: "Happy Authors",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="8" r="3" stroke="var(--color-gold)" strokeWidth="1.2" />
                <path
                    d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    stroke="var(--color-gold)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                />
                <circle cx="17" cy="9" r="2.4" stroke="var(--color-gold)" strokeWidth="1.1" />
                <path
                    d="M15.5 14.2c2.6.2 4.5 2.3 4.5 5"
                    stroke="var(--color-gold)"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        id: "countries",
        value: "50+",
        label: "Countries Reached",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.5" stroke="var(--color-gold)" strokeWidth="1.2" />
                <path
                    d="M3.5 12h17M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z"
                    stroke="var(--color-gold)"
                    strokeWidth="1.1"
                />
            </svg>
        ),
    },
];

export default function LegacyStats() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section className="relative w-full overflow-hidden">
            <div className="flex w-full flex-col lg:flex-row">
                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="relative w-full lg:w-[75%]"
                >
                    <div className="absolute inset-0">
                        <img
                            src="/images/about-bg.png"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-parchment/10" />
                    </div>

                    <motion.img
                        variants={fadeIn}
                        src="/images/tree_roots.png"
                        alt="Tree with roots woven through open books"
                        className="pointer-events-none absolute inset-y-0 left-0 h-full w-auto max-w-[46%] object-contain object-bottom mix-blend-multiply md:max-w-[42%]"
                        style={{
                            filter: "sepia(0.35) contrast(1.05) brightness(0.96)",
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-1 gap-8 px-8 py-16 sm:px-12 sm:py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-4 md:px-10 md:py-24 lg:px-14">
                        <div className="hidden md:block" aria-hidden="true" />

                        <motion.div variants={fadeUp} className="text-center md:text-left">
                            <h2 className="font-accent leading-[1.05] text-ink">
                                <span className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-[-0.01em]">
                                    Deep Roots.
                                </span><br />
                                <span className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-[-0.01em] text-oxblood">
                                    Endless Stories.
                                </span>
                            </h2>

                            <div className="my-5 flex items-center justify-center gap-3 md:justify-start">
                                <span className="h-px w-10 bg-oxblood/60" />
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-oxblood)">
                                    <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                                </svg>
                                <span className="h-px w-10 bg-oxblood/60" />
                            </div>

                            <p className="mx-auto max-w-[420px] font-body text-[1.2rem] font-medium leading-[1.85] text-ink/80 md:mx-0">
                                We believe in the power of words. They have the
                                strength to heal, to teach, and to leave a mark
                                that lasts forever. Your story is the next
                                chapter.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="relative w-full bg-ink lg:w-[25%]"
                >
                    <div className="absolute inset-0">
                        <img
                            src="/images/Black-bg.jpg"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
                        />
                        <div className="absolute inset-0 bg-ink/60" />
                    </div>

                    <div className="relative z-10 flex flex-col justify-center gap-8 px-10 py-14 sm:gap-10 sm:px-14 sm:py-16 md:h-full md:py-0">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                variants={fadeUp}
                                className="flex items-center gap-5"
                            >
                                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-gold/50">
                                    {stat.icon}
                                </span>
                                <span>
                                    <span className="block font-accent text-[1.8rem] leading-none text-parchment">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1 block font-accent text-[11px] uppercase tracking-[0.22em] text-gold">
                                        {stat.label}
                                    </span>
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}