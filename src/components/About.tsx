import { motion, useReducedMotion, type Variants } from "motion/react";
import { Heart, Award, Users, Clock, ShieldCheck, Zap, Quote } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Motion variants — same rhythm used across Hero, About, Navservices */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.12 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.1 } },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const pillars = [
    {
        icon: Heart,
        title: "A Personal Approach",
        desc: "No two manuscripts are treated alike. Every step is shaped around your vision, your goals, and the story only you could tell.",
    },
    {
        icon: Award,
        title: "Professional Excellence",
        desc: "From the first edit to the final proof, every stage is held to the same standard — nothing leaves our hands until it's ready.",
    },
    {
        icon: Users,
        title: "Author Empowerment",
        desc: "You stay informed and in control at every turn. It's your name on the cover, so it's your decision at every crossroad.",
    },
];

const promises = [
    {
        icon: Zap,
        title: "A Timeline You Can Trust",
        desc: "We work to the pace your project needs — including expedited tracks for authors on a deadline — without ever cutting corners on quality.",
    },
    {
        icon: Clock,
        title: "Always Within Reach",
        desc: "Questions don't keep office hours, and neither do we. Our team is reachable day or night to keep your publishing journey moving smoothly.",
    },
    {
        icon: ShieldCheck,
        title: "Backed Without Question",
        desc: "We stand behind our work fully. If you're ever not satisfied, we'll make it right — no fine print, no exceptions.",
    },
];

const testimonials = [
    {
        quote:
            "This team turned what could have been an overwhelming process into something genuinely encouraging. They walked me through editing, design, and production with real clarity and patience, and never once lost sight of my original vision for the story.",
        name: "Beth Ann Roberts",
        role: "Author",
    },
    {
        quote:
            "Publishing a book can feel like a lot to take on, but this team made every step feel manageable. I always knew what was coming next, got regular updates, and received thoughtful feedback along the way.",
        name: "Dennis C. Goss",
        role: "Author",
    },
    {
        quote:
            "From the moment I handed over my manuscript, I felt like someone had my back. They took the time to really listen, gave me practical guidance, and delivered a finished book that captured exactly what I was trying to say.",
        name: "Raven H. M. Blackmore",
        role: "Author",
    },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/*                                                                      */
/*  Section rhythm (strict alternation, matches Services page):       */
/*  S1 Hero              — dark  (Craft-bg.png)                       */
/*  S2 Our Story         — light (about-bg.png)                       */
/*  S3 What Sets Us Apart— dark  (Craft-bg.png)                       */
/*  S4 Our Promise       — light (about-bg.png)                       */
/*  S5 Testimonials      — dark, THE attractive section (Black-bg.jpg)*/
/*  S6 Closing CTA       — dark  (oxblood accent, quill_ink texture)  */
/* ------------------------------------------------------------------ */

export default function NavAbout() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <>
            {/* S1 — HERO (dark) */}
            <section id="about-hero" className="relative min-h-[60svh] overflow-hidden bg-[#090807]">
                <div className="absolute inset-0">
                    <img
                        src="/images/Craft-bg.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-ink/60" />
                </div>

                <motion.div
                    initial={initial}
                    animate={animate}
                    variants={container}
                    className="relative z-10 flex min-h-[60svh] flex-col items-center justify-center px-6 py-24 text-center sm:px-10"
                >
                    <motion.div variants={fadeUp} className="mb-5 flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-gold/70" />
                        <span className="font-accent text-[12px] uppercase tracking-[0.32em] text-gold">
                            Our Story
                        </span>
                        <span className="h-px w-10 bg-gold/70" />
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="max-w-[820px] font-accent text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.05] text-parchment"
                    >
                        A House Built On <span className="text-gold">Ink &amp; Patience</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-7 max-w-[600px] text-[0.98rem] leading-[1.85] text-parchment/70"
                    >
                        For over a decade, Wordsworth Publishing has carried manuscripts the way an old
                        library carries its books — carefully, patiently, and with the belief that every
                        story deserves to survive the years.
                    </motion.p>
                </motion.div>
            </section>

            {/* S2 — OUR STORY (light) */}
            <section className="relative w-full overflow-hidden bg-parchment py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/about-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-parchment/60" />
                </div>

                <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                        className="relative order-2 aspect-[4/5] overflow-hidden rounded-sm lg:order-1"
                    >
                        <img
                            src="/images/new_heritage_image.png"
                            alt="An early portrait from the Wordsworth archive"
                            className="h-full w-full object-cover object-center"
                            style={{ filter: "sepia(0.4) contrast(1.08) brightness(0.95) saturate(0.9)" }}
                        />
                        <div className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full rounded-sm border border-gold/25" />
                    </motion.div>

                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.3 }}
                        variants={container}
                        className="order-1 lg:order-2"
                    >
                        <motion.div variants={fadeUp} className="mb-5 flex items-center gap-4">
                            <span className="h-px w-10 bg-oxblood/60" />
                            <span className="font-accent text-[12px] uppercase tracking-[0.32em] text-oxblood">
                                From First Draft To Final Shelf
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="mb-7 font-accent text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.15] text-ink"
                        >
                            Unleashing Creativity, <br />
                            <span className="text-oxblood">Empowering Every Story</span>
                        </motion.h2>

                        <motion.div variants={fadeUp} className="flex flex-col gap-5 font-body text-[15px] leading-[1.85] text-ink/70">
                            <p>
                                We began in a single rented room lined with borrowed shelves, and a
                                conviction that first drafts, however rough, are worth protecting. Every
                                manuscript that has crossed our desk since has started the same way — as
                                an idea worth sharing, and a story only its author could tell.
                            </p>
                            <p>
                                That room is long gone. What remains is the same practice: sitting with an
                                author's pages until the voice underneath them is unmistakably theirs, then
                                helping the world hear it. This isn't a factory line — it's a partnership
                                built around your story, from ghostwriting and editing through to
                                publishing and marketing.
                            </p>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className="mt-7 font-accent text-[16px] italic text-oxblood"
                        >
                            "Every author's first draft is a spark. We simply help it catch."
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* S3 — WHAT SETS US APART (dark) */}
            <section className="relative w-full overflow-hidden bg-ink py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/Craft-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-ink/55" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.4 }}
                        variants={fadeUp}
                        className="mx-auto mb-16 max-w-[720px] text-center"
                    >
                        <span className="font-accent text-[12px] uppercase tracking-[0.32em] text-gold">
                            What Sets Us Apart
                        </span>
                        <h2 className="mt-4 font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-parchment">
                            Partners In Your Storytelling
                        </h2>
                        <p className="mx-auto mt-5 max-w-[560px] font-body text-[14.5px] leading-[1.8] text-parchment/60">
                            We walk alongside authors through every stage of the journey, bringing care,
                            creativity, and professionalism to each step.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={container}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        {pillars.map(({ icon: Icon, title, desc }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="rounded-sm border border-parchment/10 bg-parchment/[0.03] p-8 text-center transition-colors duration-300 hover:border-gold/30"
                            >
                                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                                    <Icon size={22} className="text-gold" />
                                </div>
                                <h3 className="mb-3 font-accent text-[17px] uppercase tracking-[0.03em] text-parchment">
                                    {title}
                                </h3>
                                <p className="font-body text-[14px] leading-[1.7] text-parchment/55">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* S4 — OUR PROMISE (light) */}
            <section className="relative w-full overflow-hidden bg-parchment py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/about-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-parchment/60" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.4 }}
                        variants={fadeUp}
                        className="mx-auto mb-16 max-w-[720px] text-center"
                    >
                        <span className="font-accent text-[12px] uppercase tracking-[0.32em] text-oxblood">
                            Our Promise
                        </span>
                        <h2 className="mt-4 font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-ink">
                            Wherever You Need Us Most, We're There
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={container}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        {promises.map(({ icon: Icon, title, desc }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="rounded-sm border border-ink/10 bg-white/40 p-8 transition-colors duration-300 hover:border-oxblood/30"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-oxblood/10">
                                    <Icon size={22} className="text-oxblood" />
                                </div>
                                <h3 className="mb-3 font-accent text-[17px] uppercase tracking-[0.03em] text-ink">
                                    {title}
                                </h3>
                                <p className="font-body text-[14px] leading-[1.7] text-ink/60">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* S5 — TESTIMONIALS (dark, THE attractive section — Black-bg.jpg) */}
            <section className="relative w-full overflow-hidden bg-[#0f0c09] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/Black-bg.jpg" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#0f0c09]/55" />
                </div>
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "url('/images/quill_ink.png')", backgroundSize: "200px" }}
                />
                <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.4 }}
                        variants={fadeUp}
                        className="mx-auto mb-16 max-w-[720px] text-center"
                    >
                        <span className="font-accent text-[12px] uppercase tracking-[0.32em] text-gold">
                            In Their Words
                        </span>
                        <h2 className="mt-4 font-accent text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-parchment">
                            What Our Published Authors Say
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={container}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        {testimonials.map(({ quote, name, role }) => (
                            <motion.div
                                key={name}
                                variants={fadeUp}
                                className="flex flex-col rounded-sm border border-parchment/10 bg-parchment/[0.03] p-8"
                            >
                                <Quote size={22} className="mb-5 text-gold/60" />
                                <p className="flex-1 font-body text-[14px] leading-[1.8] text-parchment/70">
                                    "{quote}"
                                </p>
                                <div className="mt-6 border-t border-parchment/10 pt-4">
                                    <span className="block font-accent text-[14px] text-parchment">{name}</span>
                                    <span className="font-body text-[12px] uppercase tracking-[0.1em] text-gold/70">
                                        {role}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* S6 — CLOSING CTA (dark, oxblood accent) */}
            <section className="relative w-full overflow-hidden bg-oxblood py-20 lg:py-28">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: "url('/images/quill_ink.png')", backgroundSize: "180px" }}
                />
                <motion.div
                    initial={initial}
                    whileInView={animate}
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    className="relative z-10 mx-auto max-w-[760px] px-6 text-center sm:px-10"
                >
                    <h2 className="mb-5 font-accent text-[clamp(1.9rem,4.2vw,3.1rem)] leading-[1.15] text-parchment">
                        Your Story Deserves To Be Told
                    </h2>
                    <p className="mx-auto mb-10 max-w-[480px] font-body text-[15px] leading-[1.75] text-parchment/75">
                        Every project gets the same care, creativity, and professional attention — because
                        our goal isn't just to get your book published. It's to make sure it's remembered.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a href="#contact" className="hero-btn !bg-ink !border-gold-light/40">
                            <span className="hero-btn-overlay"></span>
                            <span className="hero-btn-inner">Get Started</span>
                        </a>
                        <a href="/portfolio" className="hero-btn hero-btn-secondary !border-parchment/40">
                            <span className="hero-btn-overlay"></span>
                            <span className="hero-btn-inner">See Our Work</span>
                        </a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}