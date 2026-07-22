import { motion, useReducedMotion } from "motion/react";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.18,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 32,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const fadeIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.6,
        },
    },
};

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section
            id="home"
            className="relative min-h-[100svh] overflow-hidden bg-[#090807]"
        >

            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Wordsworth Library"
                    className="absolute inset-0 h-full w-full object-cover object-center lg:object-[60%_center]"
                />

                <div className="absolute inset-x-0 top-0 h-100 bg-gradient-to-b from-black/35 to-transparent" />
            </div>

            <motion.div
                initial={initial}
                animate={animate}
                variants={fadeIn}
                className="absolute right-6 top-[120px] z-30 hidden flex-col items-center xl:right-10 xl:top-[165px] xl:flex"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mb-5"
                >
                    <path
                        d="M20 4c-7 1-13 6-14 14M6 18c4-1 7-4 9-8"
                        stroke="#b58a3d"
                        strokeWidth="1.2"
                    />
                </svg>

                <span className="font-accent uppercase tracking-[0.34em] text-[11px] text-[#c59d4d] [writing-mode:vertical-rl]">
                    STORIES THAT LIVE BEYOND TIME
                </span>
            </motion.div>

            <motion.div
                initial={initial}
                animate={animate}
                variants={container}
                className="
                    relative z-20 flex min-h-[100svh] w-full flex-col items-center
                    justify-center px-6 py-24 text-center

                    sm:px-10

                    lg:absolute lg:inset-auto lg:left-[4.8%] lg:top-[58%] lg:min-h-0
                    lg:w-[58%] lg:-translate-y-1/2 lg:items-start lg:justify-start
                    lg:px-0 lg:py-0 lg:text-left

                    xl:w-[62%]
                    2xl:w-[1000px]

                    min-[1920px]:left-[6%] min-[1920px]:w-[1080px]
                    min-[2260px]:left-[8%] min-[2260px]:w-[1180px]
                "
            >

                <motion.div
                    variants={fadeUp}
                    className="mb-4 flex items-center justify-center gap-3 sm:gap-4 lg:mb-5 lg:justify-start lg:gap-5"
                >
                    <span className="h-px w-12 bg-[#b58a3d] sm:w-16 lg:w-22" />

                    <span className="font-accent uppercase tracking-[0.20em] leading-none text-[clamp(1.5rem,4vw,3.125rem)] text-[#c59d4d]">
                        Where
                    </span>
                </motion.div>


                <motion.h1
                    variants={fadeUp}
                    className="font-accent leading-[0.9] text-[#f4ecde]"
                >
                    <span className="block text-[clamp(2.25rem,8vw,7.625rem)] tracking-[-0.02em] min-[1920px]:text-[8.5rem] min-[2260px]:text-[9.25rem]">
                        Timeless Stories
                    </span>

                    <span className="mt-4 block text-[clamp(1.5rem,5vw,4.625rem)] leading-none tracking-[-0.01em] sm:mt-6 lg:mt-8 lg:ml-20 xl:ml-28 2xl:ml-35 min-[1920px]:text-[5.25rem] min-[2260px]:text-[5.75rem]">
                        Find Their Voice.
                    </span>
                </motion.h1>


                <motion.div
                    variants={fadeUp}
                    className="my-7 flex items-center justify-center gap-3 sm:gap-4 lg:my-9 lg:justify-start lg:gap-5"
                >
                    <span className="hidden h-px w-24 bg-[#b58a3d]/80 sm:block lg:ml-65 lg:w-50"></span>

                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#b58a3d"
                    >
                        <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                    </svg>

                    <span className="h-px w-10 bg-[#b58a3d]/80 sm:w-16"></span>
                </motion.div>


                <motion.p
                    variants={fadeUp}
                    className="mx-auto max-w-[90%] text-[clamp(0.95rem,2.2vw,1.2rem)] leading-[1.85] text-[#efe6d8] sm:max-w-[520px] lg:mx-0 lg:ml-30 lg:max-w-[560px] lg:leading-[2.05]"
                >
                    Rooted in the rich literary traditions of Old London,
                    Wordsworth Publishing helps authors turn their ideas into
                    books that inspire generations.
                </motion.p>


                <motion.div
                    variants={fadeUp}
                    className="mt-9 flex w-full flex-col items-center gap-4 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center lg:mt-12 lg:ml-30 lg:w-auto lg:justify-start lg:gap-5"
                >
                    <a
                        href="#contact"
                        className="hero-btn hero-btn-primary w-full sm:w-auto"
                    >
                        <span className="hero-btn-overlay"></span>

                        <span className="hero-btn-inner">
                            Publish Your Book

                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5 19L19 5M19 5H12M19 5V12"
                                    stroke="#C59D4D"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="#services"
                        className="hero-btn hero-btn-secondary w-full sm:w-auto"
                    >
                        <span className="hero-btn-overlay"></span>

                        <span className="hero-btn-inner">
                            Explore Our Services
                        </span>
                    </a>
                </motion.div>

            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090807] via-[#090807]/70 to-transparent" />

            <div className="pointer-events-none absolute inset-0 z-10 border border-white/5" />
        </section>
    );
}