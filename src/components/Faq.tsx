"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

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

const numerals = ["I", "II", "III", "IV", "V", "VI"];

const faqs = [
    {
        question: "How long does the publishing process take?",
        answer: "From a finished manuscript to a printed book in hand, most of our authors see anywhere from four to eight months. The exact timeline depends on how much editing your story needs and how involved you'd like to be at each stage.",
    },
    {
        question: "Do I keep the rights to my work?",
        answer: "Always. Every author who publishes with us retains full ownership of their manuscript. We simply help you bind it, design it, and bring it into the world — the story remains yours.",
    },
    {
        question: "What genres does Wordsworth Publishing take on?",
        answer: "We work across memoir, fiction, poetry, and non-fiction alike. What matters to us isn't the category — it's whether the voice behind the pages is genuine.",
    },
    {
        question: "Can I be involved in the cover design?",
        answer: "Yes, and we encourage it. Our design team will bring you concepts rooted in your story, and nothing goes to print until you're entirely happy with how it looks on a shelf.",
    },
    {
        question: "Do you offer editing and proofreading?",
        answer: "Every manuscript passes through developmental editing, line editing, and a final proofread before it's ready for print — all included as part of working with us.",
    },
    {
        question: "How do I begin the process?",
        answer: "Simply write to us through the contact section above with a little about your manuscript. We read every letter personally and reply within two business days.",
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
        </motion.div>
    );
}

export default function FAQ() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

            <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10">
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
                            Questions Answered
                        </span>
                        <span className="h-px w-14 bg-gold" />
                    </motion.div>

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
                        Everything our authors tend to ask before their first
                        letter to us.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={container}
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
                    ))}
                </motion.div>
            </div>
        </section>
    );
}