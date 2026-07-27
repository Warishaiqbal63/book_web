<<<<<<< HEAD
import { motion, useReducedMotion } from "motion/react";
=======
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
>>>>>>> 7a00781104e6fb2c86837be35b164d9196802697

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

<<<<<<< HEAD
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
=======
const numerals = ["I", "II", "III", "IV", "V", "VI"];

const faqs = [
    {
        question: "How do I get started with OakMont Publications?",
        answer: "Getting started is simple — just reach out through our contact form or give us a call. We'll set up an initial conversation to learn about your book, your goals, and which of our services fit your project best, then walk you through the next steps from there.",
    },
    {
        question: "Do I need a finished manuscript to work with you?",
        answer: "Not at all. Whether you have a polished draft ready for editing, a rough manuscript that needs development, or just an idea you haven't put into words yet, we have services built to meet you exactly where you are — including full ghostwriting and book writing support from the ground up.",
    },
    {
        question: "How long does the publishing process typically take?",
        answer: "Timelines vary depending on your manuscript's starting point and which services you need, but most full publishing projects take anywhere from a few months to about a year. We also offer fast-track publishing for authors working with tighter deadlines, without compromising on quality.",
    },
    {
        question: "Will I retain the rights to my book?",
        answer: "Yes. You remain the author and rights holder of your work throughout the entire process. We're here to help you write, refine, and publish your book — the story, and everything that comes with it, stays yours.",
    },
    {
        question: "Can I be involved in the cover design and editing decisions?",
        answer: "Absolutely — we consider you a partner in the process, not a bystander. You'll review and provide feedback on cover concepts, editorial suggestions, and major decisions throughout, and nothing moves forward without your approval.",
    },
    {
        question: "What if I'm not satisfied with the final result?",
        answer: "Your satisfaction matters to us, which is why we back our services with a 100% money-back guarantee. If something isn't meeting your expectations, talk to us — we'll work to make it right, and if we can't, you're covered.",
    },
];

function FaqItem({
    index,
    question,
    answer,
    isOpen,
    onToggle,
}: {
    index: number;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div variants={fadeUp} className="border-b border-gold/20">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center gap-5 py-6 text-left sm:gap-7 sm:py-7"
            >
                <span className="font-display italic text-[15px] text-gold/60 sm:text-[17px]">
                    {numerals[index]}
                </span>

                <span className="flex-1 font-accent text-[15px] uppercase tracking-[0.06em] text-parchment sm:text-[17px]">
                    {question}
                </span>

                <span className="relative flex h-7 w-7 flex-none items-center justify-center">
                    <span className="absolute h-px w-3.5 bg-gold" />
                    <motion.span
                        animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute h-3.5 w-px bg-gold"
                    />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="max-w-2xl pb-7 pl-[34px] font-body text-[1rem] leading-[1.85] text-parchment/70 sm:pl-[46px]">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
>>>>>>> 7a00781104e6fb2c86837be35b164d9196802697
        </motion.div>
    );
}

<<<<<<< HEAD
export default function Blackfolio() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";
=======
export default function FAQ() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";
    const [openIndex, setOpenIndex] = useState<number | null>(0);
>>>>>>> 7a00781104e6fb2c86837be35b164d9196802697

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

<<<<<<< HEAD
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-10">
=======
            <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10">
>>>>>>> 7a00781104e6fb2c86837be35b164d9196802697
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
<<<<<<< HEAD
                            Our Portfolio
=======
                            Questions Answered
>>>>>>> 7a00781104e6fb2c86837be35b164d9196802697
                        </span>
                        <span className="h-px w-14 bg-gold" />
                    </motion.div>

<<<<<<< HEAD
                    <motion.h2 variants={fadeUp} className="font-accent leading-[1.1] text-parchment [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
                        <span className="block text-[clamp(1.9rem,4vw,3rem)]">Stories We've</span>
                        <span className="block text-[clamp(1.9rem,4vw,3rem)] text-gold-light">Helped Shape</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="font-body mt-6 text-[1.05rem] leading-[1.85] text-parchment/70">
                        A glimpse at the covers, manuscripts, and campaigns
                        we've had the privilege of bringing to life.
=======
                    <motion.h2
                        variants={fadeUp}
                        className="font-accent text-[28px] leading-[1.15] text-parchment [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
                    >
                        <span className="font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1">A Few Things Worth</span>
                        <span className="block font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1 text-gold-light">Asking First</span>
                    </motion.h2>

                    <motion.div variants={fadeUp} className="my-6 flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-gold/60" />
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)">
                            <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                        </svg>
                        <span className="h-px w-10 bg-gold/60" />
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="font-body text-[1.2rem] leading-[1.85] text-parchment/75"
                    >
                        Everything you might want to know before you reach
                        out to us.
>>>>>>> 7a00781104e6fb2c86837be35b164d9196802697
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={container}
<<<<<<< HEAD
                    className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
                >
                    {works.map((work) => (
                        <WorkCard key={work.title} {...work} />
=======
                    className="mt-16 border-t border-gold/20 lg:mt-20"
                >
                    {faqs.map((faq, i) => (
                        <FaqItem
                            key={faq.question}
                            index={i}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
>>>>>>> 7a00781104e6fb2c86837be35b164d9196802697
                    ))}
                </motion.div>
            </div>
        </section>
    );
}