import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from "lucide-react";

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

/* ------------------------------------------------------------------ */
/*  Signature element — a wax-seal postmark, stamped onto the corner   */
/*  of the letter. This is the one bold, memorable piece.              */
/* ------------------------------------------------------------------ */
function WaxSeal() {
    return (
        <div className="relative flex h-24 w-24 flex-none items-center justify-center sm:h-28 sm:w-28">
            <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full drop-shadow-[0_10px_18px_rgba(91,24,24,0.35)]">
                <circle cx="60" cy="60" r="56" fill="var(--color-oxblood)" />
                <circle cx="60" cy="60" r="56" fill="url(#sealGrain)" opacity="0.25" />
                <circle cx="60" cy="60" r="49" fill="none" stroke="var(--color-gold-light)" strokeWidth="0.75" opacity="0.5" />
                {/* irregular wax edge */}
                <path
                    d="M60 6 C78 6 96 16 104 32 C112 46 112 58 108 72 C104 86 92 100 78 106 C64 112 48 112 34 104 C20 96 10 82 8 66 C6 50 10 34 22 22 C32 12 46 6 60 6Z"
                    fill="none"
                    stroke="var(--color-oxblood)"
                    strokeWidth="2"
                    opacity="0"
                />
                <defs>
                    <radialGradient id="sealGrain" cx="35%" cy="30%" r="80%">
                        <stop offset="0%" stopColor="#000" stopOpacity="0" />
                        <stop offset="100%" stopColor="#000" stopOpacity="0.4" />
                    </radialGradient>
                </defs>
                <text
                    x="60"
                    y="70"
                    textAnchor="middle"
                    fontFamily="Old Style 1 SC, Georgia, serif"
                    fontSize="34"
                    fill="var(--color-gold-light)"
                >
                    O
                </text>
            </svg>
        </div>
    );
}

const contactDetails = [
    { label: "Our Location", value: "Proudly serving authors across the United States", icon: MapPin },
    { label: "Correspondence", value: "hello@oakmontpublications.com", icon: Mail },
    { label: "By Telephone", value: "(123) 123-1234", icon: Phone },
    { label: "Office Hours", value: "Available 24/7 — we're here whenever you need us", icon: Clock },
];

export default function Contact() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";
    const [focused, setFocused] = useState<string | null>(null);

    return (
        <section id="contact" className="relative w-full overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0">
                <img
                    src="/images/Craft-bg.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/45" />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: "radial-gradient(120% 90% at 50% 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.35) 100%)",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-10">
                {/* ── Heading ───────────────────────────────────────── */}
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
                            Get In Touch
                        </span>
                        <span className="h-px w-14 bg-gold" />
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="font-accent leading-[1.1] text-parchment [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
                        <span className="block text-[clamp(1.9rem,4vw,3rem)]">Let's Talk About</span>
                        <span className="block text-[clamp(1.9rem,4vw,3rem)] text-gold-light">Your Book</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="font-body mt-6 text-[1.05rem] leading-[1.85] text-parchment/70">
                        Whether you're just beginning to explore your
                        options, ready to dive into editing, or looking for a
                        full publishing partner from start to finish, we're
                        here to help you figure out the right next step.
                    </motion.p>
                </motion.div>

                {/* ── The Letter ───────────────────────────────────────── */}
                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    className="relative mx-auto mt-16 max-w-5xl lg:mt-20"
                >
                    <div className="relative overflow-hidden rounded-sm bg-parchment shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)]">
                        {/* deckled top edge */}
                        <div
                            className="absolute inset-x-0 top-0 h-2 bg-oxblood/80"
                            style={{
                                clipPath:
                                    "polygon(0% 0%,4% 100%,8% 0%,12% 100%,16% 0%,20% 100%,24% 0%,28% 100%,32% 0%,36% 100%,40% 0%,44% 100%,48% 0%,52% 100%,56% 0%,60% 100%,64% 0%,68% 100%,72% 0%,76% 100%,80% 0%,84% 100%,88% 0%,92% 100%,96% 0%,100% 100%,100% 0%)",
                            }}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
                            {/* ── Left: correspondence details ── */}
                            <div className="relative flex flex-col justify-between gap-10 bg-ink px-9 py-12 text-parchment sm:px-12">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.05]"
                                    style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
                                />

                                <div className="relative z-10 flex items-start gap-5">
                                    <WaxSeal />
                                    <div className="pt-1">
                                        <span className="block font-accent text-[15px] uppercase tracking-[0.14em] text-parchment">
                                            Write To Us
                                        </span>
                                        <span className="mt-1.5 block font-body italic text-[13px] text-parchment/55">
                                            Reach out, and let's talk
                                            <br />
                                            about what your book needs.
                                        </span>
                                    </div>
                                </div>

                                <ul className="relative z-10 flex flex-col gap-7">
                                    {contactDetails.map(({ label, value, icon: Icon }) => (
                                        <li key={label} className="group flex items-start gap-4">
                                            <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold/30 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                                                <Icon size={15} className="text-gold-light" strokeWidth={1.5} />
                                            </span>
                                            <span>
                                                <span className="block font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light/80">
                                                    {label}
                                                </span>
                                                <span className="mt-1 block font-body text-[0.96rem] leading-snug text-parchment/85">
                                                    {value}
                                                </span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="relative z-10 flex items-center gap-3 border-t border-parchment/10 pt-6">
                                    <span className="h-px flex-1 bg-gold/25" />
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--color-gold)">
                                        <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                                    </svg>
                                    <span className="h-px flex-1 bg-gold/25" />
                                </div>
                            </div>

                            {/* ── Right: the form ── */}
                            <form className="flex flex-col gap-7 px-9 py-12 sm:px-12">
                                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                                    <label className="block">
                                        <span
                                            className={`font-accent text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                                                focused === "name" ? "text-oxblood" : "text-ink/45"
                                            }`}
                                        >
                                            Your Name
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Jordan Blake"
                                            onFocus={() => setFocused("name")}
                                            onBlur={() => setFocused(null)}
                                            className="mt-2.5 w-full border-0 border-b-2 border-ink/15 bg-transparent pb-2.5 font-body text-[0.98rem] text-ink placeholder:text-ink/30 outline-none transition-colors duration-200 focus:border-oxblood"
                                        />
                                    </label>

                                    <label className="block">
                                        <span
                                            className={`font-accent text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                                                focused === "email" ? "text-oxblood" : "text-ink/45"
                                            }`}
                                        >
                                            Your Email
                                        </span>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            onFocus={() => setFocused("email")}
                                            onBlur={() => setFocused(null)}
                                            className="mt-2.5 w-full border-0 border-b-2 border-ink/15 bg-transparent pb-2.5 font-body text-[0.98rem] text-ink placeholder:text-ink/30 outline-none transition-colors duration-200 focus:border-oxblood"
                                        />
                                    </label>
                                </div>

                                <label className="block">
                                    <span
                                        className={`font-accent text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                                            focused === "subject" ? "text-oxblood" : "text-ink/45"
                                        }`}
                                    >
                                        Subject
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Regarding my manuscript"
                                        onFocus={() => setFocused("subject")}
                                        onBlur={() => setFocused(null)}
                                        className="mt-2.5 w-full border-0 border-b-2 border-ink/15 bg-transparent pb-2.5 font-body text-[0.98rem] text-ink placeholder:text-ink/30 outline-none transition-colors duration-200 focus:border-oxblood"
                                    />
                                </label>

                                <label className="block">
                                    <span
                                        className={`font-accent text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                                            focused === "message" ? "text-oxblood" : "text-ink/45"
                                        }`}
                                    >
                                        Your Message
                                    </span>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us a little about your project..."
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused(null)}
                                        className="mt-2.5 w-full resize-none border-0 border-b-2 border-ink/15 bg-transparent pb-2.5 font-body text-[0.98rem] text-ink placeholder:text-ink/30 outline-none transition-colors duration-200 focus:border-oxblood"
                                    />
                                </label>

                                <div className="mt-3 flex items-center justify-between gap-4">
                                    <span className="font-body italic text-[12px] text-ink/45">
                                        We're available 24/7, day or night.
                                    </span>

                                    <button
                                        type="submit"
                                        className="group inline-flex items-center gap-2.5 rounded-full bg-oxblood px-7 py-3.5 font-accent text-[12px] font-bold uppercase tracking-[0.1em] text-parchment transition-all duration-300 hover:bg-ink"
                                    >
                                        Send Message
                                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}