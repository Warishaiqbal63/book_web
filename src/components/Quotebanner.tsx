import { motion, useReducedMotion } from "motion/react";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.1 } },
};

export default function QuoteBanner() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section className="relative min-h-[420px] w-full overflow-hidden sm:min-h-[440px] lg:min-h-[480px]">
            <div className="absolute inset-0">
                <img
                    src="/images/about-bg.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/45" />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(120% 140% at 15% 50%, rgba(0,0,0,0) 35%, rgba(11,9,6,0.5) 100%)",
                    }}
                />
            </div>

            <motion.div
                initial={initial}
                whileInView={animate}
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeIn}
                className="absolute inset-y-0 left-0 w-[40%] sm:w-[34%] lg:w-[30%]"
                style={{
                    maskImage: "linear-gradient(to right, black 55%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, black 55%, transparent 100%)",
                }}
            >
                <img
                    src="/images/OpenB.png"
                    alt="Open book beside a reading lamp"
                    className="h-full w-full object-cover object-center opacity-90"
                />
            </motion.div>

            <motion.div
                initial={initial}
                whileInView={animate}
                viewport={{ once: true, amount: 0.4 }}
                variants={container}
                className="relative z-10 flex min-h-[420px] flex-col items-center justify-center gap-10 px-8 py-16 text-center sm:min-h-[440px] sm:px-12 sm:py-20 lg:min-h-[480px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-16 lg:py-0 xl:px-24"
            >
                <div className="hidden lg:block lg:w-[30%]" aria-hidden="true" />

                <motion.div variants={fadeUp} className="max-w-[560px] lg:flex-1">
                    <p className="font-black text-[1.2rem] lg:text-[1.4rem] italic leading-[1.75] text-ink sm:text-[1.4rem]">
                        "This team turned an overwhelming process into
                        something genuinely encouraging — walking me through
                        editing, design, and production with real clarity,
                        patience, and care for my vision."
                    </p>

                    <span className="mt-5 block font-extrabold text-[16px] uppercase tracking-[0.28em] text-[#5b1818]">
                        — Beth Ann Roberts, Author
                    </span>

                    <div className="mt-6 flex items-center justify-center gap-2">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <span
                                key={i}
                                className={
                                    i === 2
                                        ? "h-1.5 w-1.5 rounded-full bg-[#5b1818]"
                                        : "h-1.5 w-1.5 rounded-full bg-gold/30"
                                }
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6 lg:border-l lg:border-gold/25 lg:pl-8"
                >
                    <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-gold/50">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path
                                d="M6 20c3-6 7-9 8-9M6 20c3 6 7 9 8 9M34 20c-3-6-7-9-8-9M34 20c-3 6-7 9-8 9"
                                stroke="var(--color-gold)"
                                strokeWidth="0.9"
                            />
                            <text
                                x="20"
                                y="25"
                                textAnchor="middle"
                                fontFamily="Old Style 1 SC, Georgia, serif"
                                fontSize="15"
                                fill="var(--color-gold-light)"
                            >
                                O
                            </text>
                        </svg>
                    </span>

                    <span className="font-accent text-[12px] uppercase leading-[1.9] tracking-[0.22em] text-gold-light/90">
                        Trusted by Authors.
                        <br />
                        Loved by Readers.
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}