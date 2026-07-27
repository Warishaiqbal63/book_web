import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { InnerService } from "./Innerservicesdata";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

function SectionBg({ src, dark }: { src: string; dark: boolean }) {
    return (
        <div className="absolute inset-0">
            <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className={`absolute inset-0 ${dark ? "bg-[#0c0704]/72" : "bg-[#fbf3df]/55"}`} />
        </div>
    );
}

export default function InnerServiceTemplate({ service }: { service: InnerService }) {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const whileInView = shouldReduceMotion ? undefined : "visible";
    const viewport = { once: true, amount: 0.2 };

    return (
        <main className="w-full overflow-hidden">
            {/* ================= HERO ================= */}
            <section className="relative flex min-h-[62vh] w-full items-center overflow-hidden py-24">
                <SectionBg src="/images/author,jpg" dark />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "radial-gradient(120% 90% at 50% 30%, transparent 45%, rgba(6,3,1,0.55) 100%)" }}
                />

                <motion.div
                    initial={initial}
                    animate={whileInView}
                    variants={container}
                    className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10"
                >
                    <motion.div variants={fadeUp} className="mb-6 flex items-center justify-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 font-accent text-[17px] text-gold">
                            {service.number}
                        </span>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mb-4 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-gold" />
                        <span className="font-accent text-[12px] uppercase tracking-[0.32em] text-gold">
                            {service.title}
                        </span>
                        <span className="h-px w-12 bg-gold" />
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="font-accent text-[clamp(1.9rem,4.2vw,3.1rem)] leading-[1.15] text-parchment [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]"
                    >
                        {service.tagline}
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-6 max-w-xl font-body text-[14.5px] leading-[1.9] text-parchment/70"
                    >
                        {service.intro}
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-9">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2.5 border border-gold/50 bg-oxblood px-7 py-3.5 font-body text-[12.5px] font-semibold uppercase tracking-[0.14em] text-parchment transition-colors duration-300 hover:bg-oxblood-light"
                        >
                            {service.ctaLabel} <ArrowRight size={14} />
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================= BODY ================= */}
            <section className="relative w-full py-24 lg:py-28">
                <SectionBg src="/images/about-bg.png" dark={false} />
                <motion.div
                    initial={initial}
                    whileInView={whileInView}
                    viewport={viewport}
                    variants={container}
                    className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10"
                >
                    <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
                        <span className="h-px w-12 bg-[#8a5a1f]/70" />
                        <span className="font-accent text-[12px] uppercase tracking-[0.28em] text-[#8a5a1f]">
                            {service.title}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-accent text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.2] text-[#241407]"
                    >
                        {service.subheading}
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-6 font-body text-[15px] leading-[1.95] text-[#4a3720]"
                    >
                        <span className="float-left mr-3 mt-1 font-accent text-[52px] leading-[0.8] text-[#7a2626]">
                            {service.body.charAt(0)}
                        </span>
                        {service.body.slice(1)}
                    </motion.p>
                </motion.div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative flex w-full items-center overflow-hidden py-20">
                <SectionBg src="/images/Cta-bg.png" dark />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: "radial-gradient(46% 70% at 52% 50%, rgba(6,3,1,0.55) 0%, transparent 70%)" }}
                />
                <motion.div
                    initial={initial}
                    whileInView={whileInView}
                    viewport={viewport}
                    variants={container}
                    className="relative z-10 mx-auto max-w-xl px-6 text-center sm:px-10"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="font-accent text-[clamp(1.5rem,3vw,2.2rem)] text-parchment [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]"
                    >
                        Ready to start your {service.title.toLowerCase()} project?
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-4 max-w-md font-body text-[14px] leading-[1.85] text-parchment/75"
                    >
                        Tell us about your book — we'll map out exactly how we
                        can help.
                    </motion.p>
                    <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2.5 border border-gold/50 bg-oxblood px-7 py-3.5 font-body text-[12.5px] font-semibold uppercase tracking-[0.14em] text-parchment transition-colors duration-300 hover:bg-oxblood-light"
                        >
                            Get Started <ArrowRight size={14} />
                        </a>
                        <a
                            href="/services"
                            className="inline-flex items-center gap-2.5 border border-parchment/25 px-7 py-3.5 font-body text-[12.5px] font-semibold uppercase tracking-[0.14em] text-parchment transition-colors duration-300 hover:border-gold hover:text-gold"
                        >
                            <CheckCircle2 size={14} className="text-gold" /> View All Services
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}