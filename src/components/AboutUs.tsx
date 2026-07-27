import { motion, useReducedMotion } from "motion/react";

// ── Animation variants (mirrors Hero's rhythm for site-wide consistency) ────
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

const grainSVG = `
<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
    <feColorMatrix type='matrix' values='0 0 0 0 0.28  0 0 0 0 0.2  0 0 0 0 0.12  0 0 0 0.55 0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(%23n)'/>
</svg>`;
const grainDataUri = `url("data:image/svg+xml,${encodeURIComponent(grainSVG)}")`;

const tornDeep =
    "polygon(0% 14px,5% 19px,10% 13px,15% 18px,20% 14px,25% 20px,30% 15px,35% 19px,40% 14px,45% 18px,50% 15px,55% 19px,60% 14px,65% 18px,70% 15px,75% 20px,80% 14px,85% 18px,90% 13px,95% 19px,100% 14px,100% 100%,0% 100%)";

const tornShallow =
    "polygon(0% 8px,5% 12px,10% 7px,15% 11px,20% 8px,25% 13px,30% 9px,35% 12px,40% 8px,45% 11px,50% 9px,55% 12px,60% 8px,65% 11px,70% 9px,75% 13px,80% 8px,85% 11px,90% 7px,95% 12px,100% 8px,100% 50px,0% 50px)";

const charBackingClip =
    "polygon(6% 0%,18% 2%,34% 0%,50% 3%,68% 0%,84% 3%,100% 0%,97% 14%,100% 30%,96% 46%,100% 62%,95% 78%,100% 94%,92% 100%,76% 97%,60% 100%,44% 96%,28% 100%,12% 97%,0% 100%,3% 84%,0% 68%,4% 52%,0% 36%,5% 20%,0% 6%)";
const photoClip =
    "polygon(8% 1%,20% 3%,36% 1%,52% 4%,70% 1%,85% 4%,99% 1%,96% 15%,99% 31%,95% 47%,99% 63%,94% 79%,99% 93%,91% 99%,75% 96%,59% 99%,43% 95%,27% 99%,13% 96%,1% 99%,4% 83%,1% 67%,5% 51%,1% 35%,6% 19%,1% 7%)";

const embers = [
    { top: "8%", left: "14%", size: 46, delay: 0 },
    { top: "62%", left: "4%", size: 34, delay: 0.6 },
    { top: "88%", left: "40%", size: 30, delay: 1.1 },
    { top: "20%", left: "92%", size: 38, delay: 1.7 },
];

export default function AboutUs() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section
            id="about"
            className="relative overflow-hidden py-24 lg:py-32"
        >
            <div className="absolute inset-0">
                <div
                    className="absolute inset-x-0 top-0 h-[60px]"
                    style={{ clipPath: tornShallow }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: tornDeep,
                        filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.5))",
                    }}
                >

                    <img
                        src="/images/about-bg.png"
                        alt="Aged paper texture"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />



                    <div className="absolute inset-0 bg-[#f2e2bd]/25 mix-blend-multiply" />

                    <div className="absolute inset-0 bg-[#241408]/38" />

                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(140% 100% at 50% 40%, transparent 45%, rgba(20,11,4,0.4) 100%)",
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-10 xl:gap-28">
                <motion.div
                    initial={initial}
                    animate={animate}
                    variants={fadeUp}
                    className="relative mx-auto w-full max-w-[440px] lg:mx-0"
                >
                    <div className="relative aspect-[4/5] w-full">
                        <div
                            className="absolute inset-0 -rotate-3"
                            style={{
                                clipPath: charBackingClip,
                                background:
                                    "linear-gradient(135deg, #2b1a10 0%, #4a2c14 40%, #1c1109 100%)",
                                boxShadow: "0 30px 60px -20px rgba(20,10,0,0.55)",
                            }}
                        />

                        <div
                            className="absolute inset-[10px] -rotate-1 overflow-hidden"
                            style={{ clipPath: photoClip }}
                        >
                            <img
                                src="/images/new_heritage_image.png"
                                alt="An early portrait from the OakMont archive"
                                className="h-full w-full object-cover"
                                style={{
                                    filter:
                                        "sepia(0.55) contrast(1.12) brightness(0.88) saturate(0.85)",
                                }}
                            />

                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "radial-gradient(120% 120% at 50% 50%, transparent 52%, rgba(20,9,2,0.35) 78%, rgba(10,4,0,0.85) 100%)",
                                    mixBlendMode: "multiply",
                                }}
                            />

                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "radial-gradient(38% 30% at 4% 18%, rgba(216,110,32,0.55), transparent 70%), radial-gradient(30% 24% at 96% 82%, rgba(216,110,32,0.4), transparent 70%)",
                                    mixBlendMode: "screen",
                                }}
                            />

                            <div
                                className="absolute inset-0 opacity-[0.55] mix-blend-multiply"
                                style={{ backgroundImage: grainDataUri, backgroundSize: "150px 150px" }}
                            />
                        </div>

                        {!shouldReduceMotion &&
                            embers.map((e, i) => (
                                <motion.span
                                    key={i}
                                    className="absolute rounded-full"
                                    style={{
                                        top: e.top,
                                        left: e.left,
                                        width: e.size,
                                        height: e.size,
                                        background:
                                            "radial-gradient(circle, rgba(255,153,60,0.5) 0%, rgba(255,153,60,0) 70%)",
                                        filter: "blur(2px)",
                                    }}
                                    animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.9, 1.1, 0.9] }}
                                    transition={{
                                        duration: 3.4,
                                        repeat: Infinity,
                                        delay: e.delay,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                    </div>

                </motion.div>

                <motion.div
                    initial={initial}
                    animate={animate}
                    variants={container}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        variants={fadeUp}
                        className="mb-5 flex items-center justify-center gap-4 lg:justify-start"
                    >
                        <span className="h-[2px] w-14 bg-[#5b1818]" />
                        <span className="font-accent text-[13px] font-bold uppercase tracking-[0.34em] text-[#5b1818]">
                            Our Story
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="font-accent text-ink leading-[1.04] [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]"
                    >
                        <span className="block text-[clamp(2rem,4vw,3.4rem)] tracking-[-0.01em]">
                            From First Draft
                        </span>
                        <span className="block text-[clamp(2rem,4vw,3.4rem)] tracking-[-0.01em] text-[#5b1818]">
                            To Final Shelf
                        </span>
                    </motion.h2>

                    <motion.div
                        variants={fadeUp}
                        className="mx-auto mt-8 max-w-[540px] font-body text-[1.2rem] font-medium leading-[1.95] text-ink/90 lg:mx-0"
                    >
                        <p>
                            <span className="float-left mr-3 mt-1 font-accent text-[58px] leading-[0.8] text-[#5b1818]">
                                E
                            </span>
                            very manuscript starts as an idea worth sharing,
                            and at OakMont Publications, we're here to help
                            it become something readers can't put down. Our
                            team works closely with each author, one-on-one,
                            shaping raw drafts into refined, publish-ready
                            books that stand out in a crowded market.
                        </p>
                        <p className="mt-5">
                            This isn't a factory line. It's a partnership
                            built around your story. We walk beside you at
                            every stage, from first read-through to final
                            proof, because we believe every book deserves
                            that kind of attention.
                        </p>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-7 max-w-[480px] font-accent text-[17px] italic font-black  text-[#5b1818] lg:mx-0"
                    >
                        "Your story deserves to be told — and deserves to be
                        told well."
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-11">
                        <a href="/about" className="hero-btn hero-btn-primary">
                            <span className="hero-btn-overlay"></span>
                            <span className="hero-btn-inner">
                                Read Our Full Story
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
                </motion.div>
            </div>
        </section>
    );
}