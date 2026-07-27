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
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const grainSVG = `
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>
    <feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(%23n)'/>
</svg>`;
const grainDataUri = `url("data:image/svg+xml,${encodeURIComponent(grainSVG)}")`;

const tornDeep =
    "polygon(0% 14px,5% 19px,10% 13px,15% 18px,20% 14px,25% 20px,30% 15px,35% 19px,40% 14px,45% 18px,50% 15px,55% 19px,60% 14px,65% 18px,70% 15px,75% 20px,80% 14px,85% 18px,90% 13px,95% 19px,100% 14px,100% 100%,0% 100%)";

const tornShallow =
    "polygon(0% 8px,5% 12px,10% 7px,15% 11px,20% 8px,25% 13px,30% 9px,35% 12px,40% 8px,45% 11px,50% 9px,55% 12px,60% 8px,65% 11px,70% 9px,75% 13px,80% 8px,85% 11px,90% 7px,95% 12px,100% 8px,100% 50px,0% 50px)";

const craftItems = [
    {
        icon: "/images/globe.png",
        title: "Editing & Proofreading",
        text: "We refine your manuscript line by line, sharpening clarity and flow until every sentence reads clean and error-free.",
    },
    {
        icon: "/images/quill_ink.png",
        title: "Cover Design",
        text: "We build a striking, professional cover made to stop readers mid-scroll and pull them in.",
    },
    {
        icon: "/images/book_closed.png",
        title: "Publishing",
        text: "We take your finished manuscript and turn it into a real, published book — ready for shelves and online stores alike.",
    },
    {
        icon: "/images/book_open.png",
        title: "Marketing",
        text: "We craft marketing strategies tailored to your book, built to reach the readers who'll love it most.",
    },
];

export default function OurCraft() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section id="craft" className="relative z-10 -mt-12 overflow-hidden py-24 lg:py-32">
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
                        src="/images/Craft-bg.png"
                        alt="Dark wood paper texture"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-[#0d0603]/45" />

                    <div
                        className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
                        style={{ backgroundImage: grainDataUri, backgroundSize: "200px 200px" }}
                    />

                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(120% 90% at 50% 35%, transparent 45%, rgba(6,3,1,0.55) 100%)",
                        }}
                    />
                </div>
            </div>

            <motion.div
                initial={initial}
                animate={animate}
                variants={container}
                className="relative z-10 mx-auto w-full max-w-none px-6 sm:px-10 lg:px-16 xl:px-24"
            >
                <motion.div variants={fadeUp} className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="h-px w-14 bg-gold" />
                        <span className="font-accent text-[13px] uppercase tracking-[0.34em] text-gold">
                            Path To Publication
                        </span>
                        <span className="h-px w-14 bg-gold" />
                    </div>

                    <h2 className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-parchment">
                        Just Four Steps
                    </h2>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-gold/60" />
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#c59d4d">
                            <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                        </svg>
                        <span className="h-px w-10 bg-gold/60" />
                    </div>
                </motion.div>

                <div className="grid w-full grid-col gap-x-6 gap-y-14 sm:gap-x-10 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-gold/15">
                    {craftItems.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            className="group flex w-full flex-col items-center px-2 text-center lg:px-8"
                        >
                            <div className="flex h-16 w-16 items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="h-full w-full object-contain transition-all duration-500 ease-out [filter:drop-shadow(0_0_0_rgba(197,157,77,0))] group-hover:[filter:drop-shadow(0_0_14px_rgba(197,157,77,0.65))]"
                                />
                            </div>

                            <h3 className="mt-6 font-accent text-[22px] lg:text-[28px] tracking-[0.01em] text-parchment transition-colors duration-300 group-hover:text-gold sm:text-[19px]">
                                {item.title}
                            </h3>

                            <p className="mt-3 max-w-[240px] font-body text-[1.2rem] leading-[1.75] text-parchment/60">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}