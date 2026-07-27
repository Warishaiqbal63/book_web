import { motion, useReducedMotion } from "motion/react";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const works = [
    { title: "Silent Fear", category: "Book Cover Design", image: "/images/Portfolio1.png" },
    { title: "I Am a Boy", category: "Book Publishing", image: "/images/Portfolio2.png" },
    { title: "Imposter Syndrome", category: "Book Cover Design", image: "/images/Portfolio3.png" },
    { title: "Dirt", category: "Book Publishing", image: "/images/Portfolio4.png" },
    { title: "Desperate for Pain", category: "Book Cover Design", image: "/images/Portfolio5.png" },
    { title: "Cancer Deception", category: "Book Publishing", image: "/images/Portfolio6.png" },
];

function WorkCard({ title, category, image }: { title: string; category: string; image: string }) {
    return (
        <motion.div
            variants={fadeUp}
            whileHover="hover"
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm"
        >
            <motion.img
                src={image}
                alt={title}
                variants={{ hover: { scale: 1.08 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

            <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
                initial="hidden"
                transition={{ duration: 0.4 }}
                className="absolute inset-x-0 bottom-0 p-6"
            >
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.24em] text-gold-light">
                    {category}
                </span>
                <h3 className="mt-2 font-accent text-[19px] leading-snug text-parchment">
                    {title}
                </h3>
            </motion.div>

            <span className="pointer-events-none absolute inset-0 rounded-sm border border-gold/0 transition-colors duration-500 group-hover:border-gold/40" />
        </motion.div>
    );
}

export default function Blackfolio() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <section className="relative w-full overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0">
                <img
                    src="/images/Black-bg.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/55" />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(90% 70% at 50% 0%, rgba(201,162,75,0.06) 0%, transparent 60%)",
                    }}
                />
            </div>

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
                            Our Portfolio
                        </span>
                        <span className="h-px w-14 bg-gold" />
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="font-accent leading-[1.1] text-parchment [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
                        <span className="block text-[clamp(1.9rem,4vw,3rem)]">Stories We&apos;ve</span>
                        <span className="block text-[clamp(1.9rem,4vw,3rem)] text-gold-light">Helped Shape</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="font-body mt-6 text-[1.05rem] leading-[1.85] text-parchment/70">
                        A glimpse at the covers, manuscripts, and campaigns
                        we&apos;ve had the privilege of bringing to life.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={container}
                    className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
                >
                    {works.map((work) => (
                        <WorkCard key={work.title} {...work} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}