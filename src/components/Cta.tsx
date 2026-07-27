import { motion, useReducedMotion } from "motion/react";
import { Feather } from "lucide-react";

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

export default function CTASection() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section className="relative flex min-h-[280px] w-full items-center overflow-hidden py-20 sm:min-h-[320px] lg:min-h-[360px] lg:py-24">
            {/* ================= Background — the writer's desk photo ================= */}
            <div className="absolute inset-0">
                <img
                    src="/images/Cta-bg.png"
                    alt="A vintage writer's desk with a typewriter, ink, and old books"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Overlay so text stays legible everywhere the photo gets brighter */}
                <div className="absolute inset-0 bg-[#0c0704]/55" />

                {/* Extra darkening behind the copy specifically */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(46% 70% at 52% 50%, rgba(6,3,1,0.55) 0%, transparent 70%)",
                    }}
                />

                {/* Soft vignette at the edges */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(4,2,1,0.35) 0%, transparent 22%, transparent 78%, rgba(4,2,1,0.35) 100%)",
                    }}
                />
            </div>

            {/* ================= Content ================= */}
            <motion.div
                initial={initial}
                animate={animate}
                variants={container}
                className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center sm:px-10"
            >
                <motion.h2
                    variants={fadeUp}
                    className="font-accent text-[clamp(1.6rem,3.6vw,2.6rem)] tracking-[0.02em] text-parchment [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]"
                >
                    Your Story Deserves to Be Told.
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-4 max-w-xl font-body text-[14.5px] leading-[1.85] text-parchment/75 sm:text-[15.5px]"
                >
                    First-time author or seasoned pro, we give your story the
                    professional treatment it deserves. You write it, we'll
                    handle the rest.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8">
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-3 border border-gold/50 bg-oxblood px-7 py-3.5 font-body text-[12.5px] font-semibold uppercase tracking-[0.16em] text-parchment transition-colors duration-300 hover:bg-oxblood-light"
                    >
                        Get Started
                        <Feather
                            size={15}
                            className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}