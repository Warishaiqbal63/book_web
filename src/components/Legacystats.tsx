import { motion, useReducedMotion, type Variants } from "motion/react";

const container: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeIn: Variants = {
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            <div className="flex w-full flex-col items-stretch lg:flex-row">
                {/* Main Content Area */}
                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                    className="relative flex w-full flex-col justify-center min-h-[450px] lg:min-h-[500px] lg:w-[70%] xl:w-[75%]"
                >
                    {/* Background Parchment Texture */}
                    <div className="absolute inset-0 pointer-events-none">
                        <img
                            src="/images/about-bg.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-parchment/10" />
                    </div>

                    {/* Content Box */}
                    <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 sm:px-10 sm:py-16 md:grid md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-6 md:px-12 lg:px-16 lg:py-20">
                        
                        {/* Mobile view Image (Rendered inline before text on mobile, hidden on desktop) */}
                        <div className="flex justify-center w-full mb-6 md:hidden">
                            <motion.img
                                variants={fadeIn}
                                src="/images/tree_roots.png"
                                alt="Tree with roots"
                                className="h-auto w-48 max-w-[70%] object-contain mix-blend-multiply"
                                style={{
                                    filter: "sepia(0.35) contrast(1.05) brightness(0.96)",
                                }}
                            />
                        </div>

                        {/* Desktop Image (Absolute positioned at bottom-left for MD+ screens) */}
                        <motion.img
                            variants={fadeIn}
                            src="/images/tree_roots.png"
                            alt="Tree with roots woven through open books"
                            className="hidden md:block pointer-events-none absolute bottom-0 left-0 h-auto max-h-[85%] w-auto max-w-[38%] object-contain object-bottom mix-blend-multiply"
                            style={{
                                filter: "sepia(0.35) contrast(1.05) brightness(0.96)",
                            }}
                        />

                        {/* Empty Spacer Column for Desktop Layout Balance */}
                        <div className="hidden md:block" aria-hidden="true" />

                        {/* Main Text Content */}
                        <motion.div 
                            variants={fadeUp} 
                            className="relative z-10 text-center md:text-left"
                        >
                            <h2 className="font-accent leading-[1.1] text-ink">
                                <span className="block font-accent text-[clamp(1.75rem,3.5vw,3rem)] tracking-[-0.01em]">
                                    Deep Roots.
                                </span>
                                <span className="block font-accent text-[clamp(1.75rem,3.5vw,3rem)] tracking-[-0.01em] text-oxblood">
                                    Endless Stories.
                                </span>
                            </h2>

                            <div className="my-4 flex items-center justify-center gap-3 md:justify-start">
                                <span className="h-px w-8 sm:w-10 bg-oxblood/60" />
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-oxblood)">
                                    <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                                </svg>
                                <span className="h-px w-8 sm:w-10 bg-oxblood/60" />
                            </div>

                            <p className="mx-auto max-w-[420px] font-body text-base sm:text-lg lg:text-[1.15rem] font-medium leading-relaxed text-ink/90 md:mx-0">
                                We believe in the power of words. They have the strength to heal, to teach, and to leave a mark that lasts forever. Your story is the next chapter.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side Stats */}
                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                    className="relative flex w-full flex-col justify-center bg-ink lg:w-[30%] xl:w-[25%]"
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <img
                            src="/images/Black-bg.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center opacity-80"
                        />
                        <div className="absolute inset-0 bg-ink/60" />
                    </div>

                    <div className="relative z-10 flex flex-col justify-center gap-6 px-8 py-10 sm:flex-row sm:justify-around sm:gap-6 sm:px-10 sm:py-12 md:px-12 lg:flex-col lg:justify-center lg:gap-8 lg:px-8 xl:px-10">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                variants={fadeUp}
                                className="flex items-center gap-4 sm:gap-5"
                            >
                                <span className="flex h-10 w-10 sm:h-12 sm:w-12 flex-none items-center justify-center rounded-full border border-gold/50">
                                    {stat.icon}
                                </span>
                                <div>
                                    <span className="block font-accent text-2xl sm:text-[1.8rem] leading-none text-parchment">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1 block font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold">
                                        {stat.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}