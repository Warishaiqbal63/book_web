"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion, type Variants } from "motion/react";
import {
    PenTool, FileText, Palette, Rocket, BarChart, CheckCircle2,
    Sword, Heart, Briefcase, Baby, GraduationCap,
    Minus, Plus, MessageCircle, Phone, ArrowRight,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   Motion variants — mirrors Hero.tsx / AboutUs.tsx rhythm
──────────────────────────────────────────────────────────── */
const smoothEase = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: smoothEase } },
};

/* Recurring gold divider — the small compass-flourish + rule from Hero */
function GoldDivider({ label, align = "center" }: { label: string; align?: "center" | "left" }) {
    return (
        <div
            className={`mb-5 flex items-center gap-4 ${align === "center" ? "justify-center" : "justify-start"
                }`}
        >
            <span className="h-px w-12 bg-[#b58a3d] sm:w-16" />
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#c59d4d">
                <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
            </svg>
            <span className="font-accent text-[12px] font-bold uppercase tracking-[0.32em] text-[#c59d4d]">
                {label}
            </span>
            <span className="h-px w-12 bg-[#b58a3d] sm:w-16" />
        </div>
    );
}

/* Torn-edge clip paths, reused from AboutUs.tsx for site-wide continuity */
const tornShallow =
    "polygon(0% 8px,5% 12px,10% 7px,15% 11px,20% 8px,25% 13px,30% 9px,35% 12px,40% 8px,45% 11px,50% 9px,55% 12px,60% 8px,65% 11px,70% 9px,75% 13px,80% 8px,85% 11px,90% 7px,95% 12px,100% 8px,100% 100%,0% 100%)";

/* ────────────────────────────────────────────────────────────
   Content
──────────────────────────────────────────────────────────── */
const coreServices = [
    { icon: PenTool, title: "Writing & Ghostwriting", desc: "Turning a spark of an idea into a manuscript that reads as if you wrote every word yourself." },
    { icon: FileText, title: "Editing & Proofreading", desc: "Developmental, line, and copy passes that carry your voice through to a flawless final page." },
    { icon: Palette, title: "Cover Design & Formatting", desc: "Bindings and interiors worthy of a shelf beside the classics — striking, considered, timeless." },
    { icon: Rocket, title: "Publishing & Distribution", desc: "A path to readers everywhere, from Amazon and Ingram to independent shops abroad." },
];

const detailedServices = [
    {
        id: "writing", label: "Book Writing", icon: PenTool,
        title: "Crafting Your Manuscript",
        desc: "Whether you arrive with a rough outline or only the spark of an idea, our writers sit with your story until the voice on the page is unmistakably yours.",
        features: ["Ghostwriting — fiction & non-fiction", "Memoir & biography writing", "Children's book writing", "Story development & outlining", "Character & world building"],
        image: "/images/Book-Writing.jpg",
    },
    {
        id: "editing", label: "Editing", icon: FileText,
        title: "Perfection In Every Line",
        desc: "A manuscript is only as strong as its edit. We refine yours through careful rounds, sharpening pacing, grammar, and narrative flow without losing your voice.",
        features: ["Developmental editing", "Line & copy editing", "Proofreading", "Beta reader feedback", "Manuscript critique"],
        image: "/images/author.jpg",
    },
    {
        id: "design", label: "Design", icon: Palette,
        title: "Judged By The Cover",
        desc: "Readers do judge a book by its cover. Our designers build covers that stop the scroll and interiors that are a quiet pleasure to hold and read.",
        features: ["Custom cover design", "Interior layout & formatting", "eBook conversion (ePub / Mobi)", "Illustrations for children's books", "Author branding"],
        image: "/images/Design.jpg",
    },
    {
        id: "publishing", label: "Publishing", icon: Rocket,
        title: "From Manuscript To Market",
        desc: "We carry your book through the complexities of publishing so you never have to — from registration to global distribution.",
        features: ["Self-publishing guidance", "Print & eBook distribution", "Audiobook production", "ISBN & copyright registration", "Royalty management setup"],
        image: "/images/book-cover.jpg",
    },
    {
        id: "marketing", label: "Marketing", icon: BarChart,
        title: "Amplify Your Reach",
        desc: "A well-told story deserves an audience. Our strategies are built to put your book in front of the readers most likely to love it.",
        features: ["Amazon listing optimization", "Author website design", "Social media campaigns", "Book launch strategy", "Press releases & PR"],
        image: "/images/OpenB.png",
    },
];

const genres = [
    { icon: Sword, title: "Mystery & Thriller", desc: "Suspense that keeps readers turning pages." },
    { icon: Heart, title: "Romance", desc: "Heartfelt stories of love and connection." },
    { icon: Rocket, title: "Science Fiction", desc: "Imagined futures, boldly told." },
    { icon: Briefcase, title: "Business & Finance", desc: "Strategy shaped for the modern reader." },
    { icon: Baby, title: "Children's Books", desc: "Magical tales for young minds." },
    { icon: GraduationCap, title: "Academic & Educational", desc: "Knowledge given lasting form." },
];

const journeySteps = [
    { step: "01", title: "Editing & Proofreading", desc: "We refine your manuscript line by line, sharpening clarity and flow until every sentence reads clean and error-free." },
    { step: "02", title: "Cover Design", desc: "We build a striking, professional cover made to stop readers mid-scroll and pull them in." },
    { step: "03", title: "Publishing", desc: "We take your finished manuscript and turn it into a real, published book — ready for shelves and online stores alike." },
    { step: "04", title: "Marketing", desc: "We craft marketing strategies tailored to your book, built to reach the readers who'll love it most." },
];

const packages = [
    {
        title: "Starter", price: "$499",
        desc: "For first-time authors who need the foundations done right.",
        features: ["Custom cover design", "Interior formatting", "eBook conversion", "Amazon upload"],
        highlight: false,
    },
    {
        title: "Professional", price: "$1,499",
        desc: "Our most-chosen package — a polished, market-ready book.",
        features: ["Everything in Starter", "Developmental editing", "Proofreading", "ISBN registration", "Author website"],
        highlight: true,
    },
    {
        title: "Elite", price: "Custom",
        desc: "End-to-end ghostwriting, publishing, and marketing for bestsellers.",
        features: ["Everything in Professional", "Full ghostwriting", "Book marketing campaign", "Audiobook narration", "PR & launch strategy"],
        highlight: false,
    },
];

const faqs = [
    { q: "How do I get started with Wordsworth Publishing?", a: "Getting started is simple — just reach out through our contact form or give us a call. We'll set up an initial conversation to learn about your book, your goals, and which of our services fit your project best, then walk you through the next steps." },
    { q: "Do I need a finished manuscript to work with you?", a: "Not at all. Whether you have a polished draft ready for editing, a rough manuscript that needs development, or just an idea you haven't put into words yet, we have services built to meet you exactly where you are — including full ghostwriting support." },
    { q: "How long does the publishing process typically take?", a: "Timelines vary depending on your manuscript's starting point and which services you need, but most full publishing projects take anywhere from a few months to about a year. We also offer fast-track publishing for tighter deadlines, without compromising on quality." },
    { q: "Will I retain the rights to my book?", a: "Yes. You remain the author and rights holder of your work throughout the entire process. We're here to help you write, refine, and publish your book — the story, and everything that comes with it, stays yours." },
    { q: "Can I be involved in the cover design and editing decisions?", a: "Absolutely — we consider you a partner in the process, not a bystander. You'll review and provide feedback on cover concepts, editorial suggestions, and major decisions throughout, and nothing moves forward without your approval." },
    { q: "Do you offer both print and ebook publishing?", a: "Yes, we handle formatting, production, and distribution for both print and digital editions, along with audiobook narration if you'd like your book available in audio too." },
    { q: "What genres do you work with?", a: "Our team covers a wide range of genres and formats, from mystery, fantasy, sci-fi, and horror, to non-fiction, memoir, and children's books. Whatever your book's genre, we match you with writers and editors experienced in that space." },
    { q: "How much does publishing with Wordsworth cost?", a: "Costs depend on which services your book needs — a full ghostwriting and publishing package looks different from a manuscript that only needs proofreading and formatting. We'll provide a clear, transparent quote after learning about your project." },
    { q: "What if I'm not satisfied with the final result?", a: "Your satisfaction matters to us, which is why we back our services with a 100% money-back guarantee. If something isn't meeting your expectations, talk to us — we'll work to make it right." },
    { q: "Do you help with marketing after my book is published?", a: "Yes — publishing your book is only part of the journey. Our marketing team builds tailored strategies to help you reach your ideal readers, from launch-day promotion to ongoing visibility efforts well after your release date." },
];

function openLiveChat() {
    if (typeof window === "undefined") return;
    const w = window as any;
    if (w.LiveChatWidget) { w.LiveChatWidget.call("maximize"); return; }
    if (w.LC_API?.open_chat_window) { w.LC_API.open_chat_window(); return; }
    const el = document.querySelector<HTMLElement>(
        "#chat-widget-container button, [id^='chat-widget'], iframe[title*='chat' i]"
    );
    el?.click();
}

/* ────────────────────────────────────────────────────────────
   Page
   Section rhythm (strict alternation, no two same-tone sections
   back to back):
   1 Hero            — dark
   2 Core Services    — light
   3 Service Showcase — dark  (Black-bg.jpg)
   4 Genres           — light
   5 Journey          — dark
   6 Why Wordsworth   — light
   7 Packages         — dark
   8 FAQs             — light
   9 CTA              — dark  (standard Craft-bg.png pattern)
──────────────────────────────────────────────────────────── */
export default function ServicesPage() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    const [activeService, setActiveService] = useState("writing");
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const coreRef = useRef<HTMLDivElement>(null);
    const coreInView = useInView(coreRef, { once: true, margin: "-100px" });

    const currentService = detailedServices.find((s) => s.id === activeService) ?? detailedServices[0];

    return (
        <main id="services" className="w-full overflow-hidden bg-[#090807]">
            {/* ══════════════════ S1 — HERO (dark) ══════════════════ */}
            <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#090807] px-6 py-24 text-center">
                <div className="absolute inset-0">
                    <img src="/images/Craft-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#090807]/45" />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('/images/Left-Section_bg.webp')", backgroundSize: "40px 40px" }} />
                <div className="pointer-events-none absolute right-[15%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#c59d4d]/10 blur-[140px]" />

                <motion.div initial={initial} animate={animate} variants={container} className="relative z-10 mx-auto max-w-[880px]">
                    <motion.div variants={fadeUp}>
                        <GoldDivider label="What We Do" />
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="font-accent leading-[0.98] text-[#f4ecde]">
                        <span className="block text-[clamp(2.1rem,6vw,4.5rem)] tracking-[-0.01em]">
                            Book Publishing Services
                        </span>
                        <span className="block text-[clamp(1.6rem,4.6vw,3.2rem)] tracking-[-0.01em] text-[#c59d4d]">
                            That Get You Published Worldwide.
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-[600px] font-body text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.9] text-[#efe6d8]">
                        First-time author or seasoned pro, we give your story the
                        professional treatment it deserves — sharp editing, standout
                        cover design, wide distribution, and marketing that actually
                        gets you noticed. You write it. We'll handle the rest.
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5">
                        <a href="#contact" className="hero-btn hero-btn-primary w-full sm:w-auto">
                            <span className="hero-btn-overlay" />
                            <span className="hero-btn-inner">
                                Request A Quote
                                <ArrowRight size={15} strokeWidth={1.6} />
                            </span>
                        </a>

                        <button type="button" onClick={openLiveChat} className="hero-btn hero-btn-secondary w-full sm:w-auto">
                            <span className="hero-btn-overlay" />
                            <span className="hero-btn-inner">
                                <MessageCircle size={15} strokeWidth={1.6} />
                                Live Chat
                            </span>
                        </button>

                        <a href="tel:2797770380" className="font-accent inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-[#c59d4d] transition-colors hover:text-[#f4ecde]">
                            <Phone size={14} strokeWidth={1.6} />
                            Call Now
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* ══════════════════ S2 — CORE SERVICES (light) ══════════════════ */}
            <section ref={coreRef} className="relative overflow-hidden bg-[#f4ecde] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/about-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#f4ecde]/55" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[40px] bg-[#090807]" style={{ clipPath: tornShallow }} />

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="mb-16 text-center lg:mb-20">
                        <motion.div initial={initial} animate={coreInView ? "visible" : initial} variants={fadeUp}>
                            <GoldDivider label="Our Craft" />
                        </motion.div>
                        <motion.h2 initial={initial} animate={coreInView ? "visible" : initial} variants={fadeUp} className="font-accent leading-[1.02] text-[#241408]">
                            <span className="block text-[clamp(1.9rem,4.2vw,3.4rem)] tracking-[-0.01em]">
                                From First Draft
                            </span>
                            <span className="block text-[clamp(1.9rem,4.2vw,3.4rem)] tracking-[-0.01em] text-[#5b1818]">
                                To Final Shelf.
                            </span>
                        </motion.h2>
                        <motion.p initial={initial} animate={coreInView ? "visible" : initial} variants={fadeUp} className="font-body mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.85] text-[#241408]/70">
                            Every manuscript starts as an idea worth sharing, and at Wordsworth
                            Publishing, we're here to help it become something readers can't
                            put down. Our team works closely with each author, one-on-one,
                            shaping raw drafts into refined, publish-ready books. This isn't a
                            factory line — it's a partnership built around your story.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={initial}
                        animate={coreInView ? "visible" : initial}
                        variants={container}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {coreServices.map(({ icon: Icon, title, desc }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="group relative overflow-hidden rounded-2xl border border-[#241408]/10 bg-white/60 p-8 transition-shadow duration-500 hover:shadow-[0_20px_48px_rgba(36,20,8,0.12)]"
                            >
                                <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#c59d4d] transition-transform duration-500 group-hover:scale-x-100" />
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#5b1818]/10">
                                    <Icon size={24} className="text-[#5b1818]" strokeWidth={1.6} />
                                </div>
                                <h3 className="font-accent mb-3 text-[16px] font-bold uppercase tracking-[0.03em] text-[#241408]">
                                    {title}
                                </h3>
                                <p className="font-body text-[14px] leading-[1.7] text-[#241408]/70">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ S3 — SERVICE SHOWCASE (dark, Black-bg.jpg) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#090807] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/Black-bg.jpg" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#090807]/45" />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
                        <div className="flex flex-row flex-wrap gap-3 lg:sticky lg:top-32 lg:flex-col lg:self-start">
                            {detailedServices.map(({ id, label, icon: Icon }) => {
                                const active = activeService === id;
                                return (
                                    <button
                                        key={id}
                                        onClick={() => setActiveService(id)}
                                        className={`font-accent flex flex-1 items-center gap-3 rounded-xl border px-5 py-4 text-left text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 lg:flex-none ${active
                                                ? "border-[#c59d4d] bg-[#c59d4d] text-[#090807]"
                                                : "border-white/10 bg-white/5 text-[#efe6d8]/60 hover:bg-white/10 hover:text-[#efe6d8]"
                                            }`}
                                    >
                                        <Icon size={15} strokeWidth={1.6} />
                                        {label}
                                    </button>
                                );
                            })}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentService.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -24 }}
                                transition={{ duration: 0.5, ease: smoothEase }}
                                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                                    <img
                                        src={currentService.image}
                                        alt={currentService.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,8,7,0.85), rgba(9,8,7,0.1) 55%, transparent)" }} />
                                    <div className="absolute inset-x-0 bottom-0 p-8">
                                        <h3 className="font-accent text-[20px] uppercase leading-tight tracking-[0.02em] text-[#f4ecde]">
                                            {currentService.title}
                                        </h3>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-body mb-8 text-[15px] leading-[1.9] text-[#efe6d8]/80">
                                        {currentService.desc}
                                    </p>
                                    <div className="mb-10 flex flex-col gap-4">
                                        {currentService.features.map((feat) => (
                                            <div key={feat} className="flex items-center gap-3">
                                                <CheckCircle2 size={17} className="shrink-0 text-[#c59d4d]" strokeWidth={1.6} />
                                                <span className="font-body text-[14px] text-[#efe6d8]/90">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href="#contact"
                                        className="font-accent inline-flex items-center gap-2 rounded-xl bg-[#8a1f1f] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#f4ecde] transition-all duration-300 hover:bg-[#a52a2a]"
                                    >
                                        Get Started
                                        <ArrowRight size={15} strokeWidth={1.6} />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ══════════════════ S4 — GENRES (light) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#f4ecde] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/about-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#f4ecde]/55" />
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="mb-16 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <GoldDivider label="Categories" />
                        </motion.div>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-accent text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.02] tracking-[-0.01em] text-[#241408]">
                            Genres We <span className="text-[#5b1818]">Publish</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                        className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
                    >
                        {genres.map(({ icon: Icon, title, desc }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="group rounded-xl border border-[#241408]/10 bg-white/50 p-6 text-center transition-all duration-500 hover:border-[#c59d4d]/60 hover:shadow-[0_12px_32px_rgba(36,20,8,0.1)]"
                            >
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#5b1818]/10 transition-colors duration-300 group-hover:bg-[#5b1818]">
                                    <Icon size={19} className="text-[#5b1818] transition-colors duration-300 group-hover:text-[#f4ecde]" strokeWidth={1.6} />
                                </div>
                                <h4 className="font-accent mb-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#241408]">
                                    {title}
                                </h4>
                                <p className="font-body text-[11px] leading-[1.5] text-[#241408]/55">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ S5 — JOURNEY (dark) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#111] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/Craft-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#111]/45" />
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="mb-20 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <GoldDivider label="The Process" />
                        </motion.div>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-accent text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.02] tracking-[-0.01em] text-[#f4ecde]">
                            Your Journey To <span className="text-[#c59d4d]">Publication</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                        className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
                    >
                        <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-white/10 lg:block" />
                        {journeySteps.map(({ step, title, desc }) => (
                            <motion.div key={step} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c59d4d] shadow-[0_8px_24px_rgba(197,157,77,0.3)]">
                                    <span className="font-accent text-[19px] font-bold text-[#090807]">{step}</span>
                                </div>
                                <h3 className="font-accent mb-3 text-[16px] font-bold uppercase tracking-[0.04em] text-[#f4ecde]">
                                    {title}
                                </h3>
                                <p className="font-body max-w-[220px] text-[14px] leading-[1.7] text-[#efe6d8]/50">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ S6 — WHY WORDSWORTH (light) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#f4ecde] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/replace.jpg" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#f4ecde]/55" />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                    className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-10"
                >
                    <div>
                        <motion.div variants={fadeUp}>
                            <GoldDivider label="Why Wordsworth" align="left" />
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="font-accent mb-10 text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.06] text-[#241408]">
                            Built For Authors.
                            <br />
                            <span className="text-[#5b1818]">Devoted To The Craft.</span>
                        </motion.h2>

                        <motion.div variants={container} className="flex flex-col gap-7">
                            {[
                                { t: "Fast-Track Publishing", d: "Your timeline is our priority. We offer expedited services to get your book published quickly, without ever cutting corners on quality." },
                                { t: "Round-the-Clock Support", d: "Our team is available day or night to answer your questions and ease any concerns, keeping your publishing journey smooth from start to finish." },
                                { t: "100% Money-Back Guarantee", d: "We stand firmly behind our work. If you're ever not satisfied, we'll refund you in full — no questions asked." },
                            ].map(({ t, d }) => (
                                <motion.div key={t} variants={fadeUp} className="group flex items-start gap-4">
                                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5b1818]/10 transition-colors duration-300 group-hover:bg-[#5b1818]">
                                        <CheckCircle2 size={13} className="text-[#5b1818] transition-colors duration-300 group-hover:text-[#f4ecde]" strokeWidth={1.8} />
                                    </div>
                                    <div>
                                        <h4 className="font-accent mb-1.5 text-[15px] font-bold uppercase tracking-[0.04em] text-[#241408]">{t}</h4>
                                        <p className="font-body text-[14px] leading-[1.75] text-[#241408]/70">{d}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: smoothEase }}
                        className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(36,20,8,0.2)]"
                    >
                        <img
                            src="/images/Services/Services-3.png"
                            alt="An author at work"
                            className="absolute inset-0 h-full w-full object-cover"
                            style={{ filter: "sepia(0.35) saturate(0.9) brightness(0.92)" }}
                        />
                        <div className="absolute inset-0 bg-[#5b1818]/15 mix-blend-multiply" />
                        <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl border-[3px] border-[#c59d4d]/25" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ══════════════════ S7 — PACKAGES (dark) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#090807] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/Craft-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#090807]/45" />
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="mb-20 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <GoldDivider label="Investment" />
                        </motion.div>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-accent text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.02] tracking-[-0.01em] text-[#f4ecde]">
                            Choose Your <span className="text-[#c59d4d]">Path</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                        className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3"
                    >
                        {packages.map(({ title, price, desc, features, highlight }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className={`relative rounded-2xl p-10 transition-all duration-500 ${highlight
                                        ? "z-10 border-2 border-[#c59d4d] bg-[#14100c] text-[#f4ecde] shadow-[0_32px_80px_rgba(0,0,0,0.5)] lg:scale-105"
                                        : "border border-white/10 bg-white/5 text-[#f4ecde] hover:border-[#c59d4d]/40 hover:bg-white/10"
                                    }`}
                            >
                                {highlight && (
                                    <span className="font-accent absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#c59d4d] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#090807]">
                                        Most Chosen
                                    </span>
                                )}
                                <h3 className="font-accent mb-2 text-[19px] font-bold uppercase tracking-[0.05em]">{title}</h3>
                                <p className="font-body mb-6 text-[13px] text-[#efe6d8]/60">{desc}</p>
                                <div className="font-accent mb-8 text-[44px] font-bold leading-none">
                                    {price}
                                    {price !== "Custom" && <span className="ml-1 text-[12px] font-normal opacity-50">one-time</span>}
                                </div>
                                <div className="mb-10 flex flex-col gap-4">
                                    {features.map((f) => (
                                        <div key={f} className="flex items-center gap-3 text-[13px]">
                                            <CheckCircle2 size={16} className="shrink-0 text-[#c59d4d]" strokeWidth={1.6} />
                                            <span className="font-body">{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="#contact"
                                    className={`font-accent block w-full rounded-xl border-2 py-4 text-center text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${highlight
                                            ? "border-[#c59d4d] bg-[#c59d4d] text-[#090807] hover:bg-transparent hover:text-[#c59d4d]"
                                            : "border-[#efe6d8]/30 text-[#f4ecde] hover:border-[#c59d4d] hover:bg-[#c59d4d] hover:text-[#090807]"
                                        }`}
                                >
                                    Get Started
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ S8 — FAQs (light) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#f4ecde] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/about-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#f4ecde]/55" />
                </div>
                <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10">
                    <div className="mb-16 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <GoldDivider label="Questions" />
                        </motion.div>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-accent text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[1.05] tracking-[-0.01em] text-[#241408]">
                            Service <span className="text-[#5b1818]">FAQs</span>
                        </motion.h2>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="flex flex-col gap-4">
                        {faqs.map(({ q, a }, i) => {
                            const open = openFaq === i;
                            return (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="overflow-hidden rounded-xl border border-[#241408]/10 bg-white/50 transition-colors duration-300 hover:border-[#c59d4d]/40"
                                >
                                    <button
                                        onClick={() => setOpenFaq(open ? null : i)}
                                        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                                    >
                                        <span className="font-body text-[15px] font-semibold leading-snug text-[#241408]">{q}</span>
                                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${open ? "bg-[#5b1818] text-[#f4ecde]" : "bg-[#241408]/5 text-[#241408]/50"}`}>
                                            {open ? <Minus size={14} /> : <Plus size={14} />}
                                        </div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: smoothEase }}
                                                className="overflow-hidden"
                                            >
                                                <p className="font-body px-7 pb-6 text-[14px] leading-[1.75] text-[#241408]/65">{a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ S9 — CTA (dark, standard pattern) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#090807] py-24 lg:py-28">
                <div className="absolute inset-0">
                    <img src="/images/Craft-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#090807]/45" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: smoothEase }}
                    className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10"
                >
                    <h2 className="font-accent mb-5 text-[clamp(1.8rem,4.4vw,3.2rem)] leading-[1.08] text-[#f4ecde]">
                        Not Sure Which Service You Need?
                    </h2>
                    <p className="font-body mx-auto mb-10 max-w-[520px] text-[16px] leading-[1.7] text-[#f4ecde]/80">
                        Speak with one of our publishing consultants — we'll map out the
                        right path for your book, at no cost.
                    </p>
                    <button
                        type="button"
                        onClick={openLiveChat}
                        className="font-accent inline-flex items-center gap-3 rounded-xl bg-[#c59d4d] px-9 py-5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#090807] transition-all duration-300 hover:bg-[#d8b05f]"
                    >
                        <MessageCircle size={16} strokeWidth={1.6} />
                        Book A Free Consultation
                    </button>
                </motion.div>
            </section>
        </main>
    );
}