"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import {
    Play, X, BookOpen, PenTool, Palette, BarChart,
    Sword, Heart, Rocket, GraduationCap, Baby, Ghost, ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Motion variants — same rhythm as Hero / About / Services          */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

function GoldDivider({ label, align = "center" }: { label: string; align?: "center" | "left" }) {
    return (
        <div className={`mb-5 flex items-center gap-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
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

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Genre = "Mystery & Thriller" | "Romance" | "Fantasy" | "Science Fiction" | "Non-Fiction" | "Children's" | "Memoir & Biography" | "Horror";

const genreIcons: Record<Genre, any> = {
    "Mystery & Thriller": Sword,
    "Romance": Heart,
    "Fantasy": BookOpen,
    "Science Fiction": Rocket,
    "Non-Fiction": GraduationCap,
    "Children's": Baby,
    "Memoir & Biography": PenTool,
    "Horror": Ghost,
};

const genrePalette: Record<Genre, { from: string; to: string }> = {
    "Mystery & Thriller": { from: "#1c2333", to: "#3a2a18" },
    "Romance": { from: "#5b1818", to: "#3a1010" },
    "Fantasy": { from: "#2e1f3d", to: "#1c1428" },
    "Science Fiction": { from: "#0f2e30", to: "#0a1c1e" },
    "Non-Fiction": { from: "#2a3a1f", to: "#1a2414" },
    "Children's": { from: "#7a4a12", to: "#4a2c0a" },
    "Memoir & Biography": { from: "#3a2a18", to: "#241408" },
    "Horror": { from: "#0e0e0e", to: "#2a0a0a" },
};

const books: {
    id: string;
    title: string;
    author: string;
    genre: Genre;
    tagline: string;
    blurb: string;
    services: string[];
    image: string;
}[] = [
        {
            id: "b1", title: "The Cartographer's Last Lie", author: "M. R. Ashwood",
            image: "/images/Book1.png", genre: "Mystery & Thriller",
            tagline: "Every map hides a body.",
            blurb: "A disgraced mapmaker is pulled back into the trade she swore off when an old client's death points straight at her own forged coastlines.",
            services: ["Developmental Editing", "Cover Design", "Distribution"],
        },
        {
            id: "b2", title: "Nine Doors to Winterhold", author: "Callum Priest",
            image: "/images/Book2.png", genre: "Mystery & Thriller",
            tagline: "The house remembers everyone it's swallowed.",
            blurb: "A locked-room mystery set across nine winters in the same crumbling manor, told backward from the discovery of the ninth body.",
            services: ["Line Editing", "Proofreading", "eBook Conversion"],
        },
        {
            id: "b3", title: "Salt & Second Chances", author: "Iris Delacroix",
            image: "/images/Book3.png",
            genre: "Romance",
            tagline: "She came home to sell the lighthouse. She stayed for him.",
            blurb: "A coastal-town slow burn between a woman settling her late father's estate and the keeper who never left the shore.",
            services: ["Ghostwriting", "Cover Design", "Author Website"],
        },
        {
            id: "b4", title: "The Wrong Kind of Forever", author: "Naomi Kessler",
            image: "/images/Book4.png",
            genre: "Romance",
            tagline: "Some promises aren't meant to be kept.",
            blurb: "Two rival wedding planners are forced into a season-long partnership neither of them wanted, and both of them need.",
            services: ["Developmental Editing", "Marketing Launch"],
        },
        {
            id: "b5", title: "The Loombreaker's Oath", author: "Thorne Vantille",
            image: "/images/Book5.png",
            genre: "Fantasy",
            tagline: "Magic was never meant to be woven by hand.",
            blurb: "An outlawed weaver discovers her forbidden craft is the only thing standing between her kingdom and a war of unraveling.",
            services: ["World-Building Consult", "Cover Illustration", "Print Formatting"],
        },
        {
            id: "b6", title: "Ashfall Crown", author: "Rowan Ilkeston",
            image: "/images/Book6.png",
            genre: "Fantasy",
            tagline: "The throne was built on a lie of fire.",
            blurb: "First in a trilogy following a exiled prince who must reclaim a crown made from the ashes of the people he failed to save.",
            services: ["Full Manuscript Edit", "Series Branding", "Cover Design"],
        },
        {
            id: "b7", title: "The Last Signal from Kepler House", author: "Dr. Elena Voss",
            image: "/images/Book7.png",
            genre: "Science Fiction",
            tagline: "First contact never looked like this.",
            blurb: "A generational colony ship's final transmission unravels decades of secrets kept from the crew who trusted it.",
            services: ["Manuscript Development", "Formatting", "Audiobook Narration"],
        },
        {
            id: "b8", title: "Half-Life of a Memory", author: "Tobias Fenn",
            image: "/images/Book8.png",
            genre: "Science Fiction",
            tagline: "They can copy your mind. Not your grief.",
            blurb: "A near-future thriller about consciousness backups, and the one memory a grieving widow refuses to let the company restore.",
            services: ["Line Editing", "eBook Creation", "Marketing"],
        },
        {
            id: "b9", title: "The Discipline of Small Rooms", author: "Marguerite Oyelaran",
            image: "/images/Book9.png",
            genre: "Non-Fiction",
            tagline: "A working guide to building a life in the margins.",
            blurb: "A practical, research-backed field guide to sustaining creative work under real constraints — time, money, and doubt.",
            services: ["Structural Editing", "Fact-Checking", "Author Website"],
        },
        {
            id: "b10", title: "The Paper Route", author: "Harold J. Whitcombe",
            image: "/images/Book10.png",
            genre: "Memoir & Biography",
            tagline: "Forty years of mail, one town, one man.",
            blurb: "A quiet, wry memoir of small-town life told through four decades of a rural mail carrier's daily rounds.",
            services: ["Ghostwriting", "Proofreading", "Print Publishing"],
        },
        {
            id: "b11", title: "Pip and the Very Loud Silence", author: "Freya Marsh",
            image: "/images/Book11.png", genre: "Children's",
            tagline: "A story about the day the world got too quiet.",
            blurb: "An illustrated picture book helping young readers name and welcome big, wordless feelings.",
            services: ["Children's Editing", "Illustration Direction", "Print Formatting"],
        },
        {
            id: "b12", title: "What Waits Beneath the Orchard", author: "Cassian Rowe",
            image: "/images/Book12.png",
            genre: "Horror",
            tagline: "The apples were always too sweet.",
            blurb: "A slow-burn folk horror novel about a family orchard that only ever gives back what it's owed.",
            services: ["Developmental Editing", "Cover Design", "Marketing"],
        },
    ];

const genres: ("All" | Genre)[] = [
    "All", "Mystery & Thriller", "Romance", "Fantasy", "Science Fiction", "Non-Fiction", "Children's", "Memoir & Biography", "Horror",
];

const trailers = [
    { title: "The Loombreaker's Oath — Book Trailer", genre: "Fantasy" },
    { title: "Salt & Second Chances — Book Trailer", genre: "Romance" },
    { title: "The Last Signal from Kepler House — Teaser", genre: "Science Fiction" },
    { title: "What Waits Beneath the Orchard — Trailer", genre: "Horror" },
];

const platforms = [
    "Amazon KDP", "Barnes & Noble Press", "Apple Books", "Kobo Writing Life", "IngramSpark", "Google Play Books",
];

/* ------------------------------------------------------------------ */
/*  Tilt card                                                          */
/* ------------------------------------------------------------------ */

function BookCard({ book, onOpen }: { book: (typeof books)[number]; onOpen: () => void }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const Icon = genreIcons[book.genre];
    const palette = genrePalette[book.genre];

    function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: py * -14, y: px * 14 });
    }

    return (
        <motion.button
            type="button"
            onClick={onOpen}
            variants={fadeUp}
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ perspective: 900 }}
            className="group relative block text-left"
        >
            <motion.div
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                style={{
                    transformStyle: "preserve-3d",
                    background: `linear-gradient(155deg, ${palette.from}, ${palette.to})`,
                }}
                className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-[0_18px_40px_rgba(9,8,7,0.35)] ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_28px_60px_rgba(9,8,7,0.55)]"
            >
                {/* background image */}
                <img
                    src={book.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* dark overlay so text stays readable over the image */}
                <div className="absolute inset-0 bg-black/45" />

                {/* spine line */}
                <span className="absolute left-5 top-0 h-full w-px bg-[#c59d4d]/25" />
                {/* corner ornament */}
                <svg className="absolute right-4 top-4 opacity-70" width="16" height="16" viewBox="0 0 24 24" fill="#c59d4d">
                    <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                </svg>

                <div className="relative z-10 flex h-full flex-col justify-between p-6 pl-9">
                    <div className="flex items-center gap-2">
                        <Icon size={14} className="text-[#c59d4d]" strokeWidth={1.6} />
                        <span className="font-accent text-[9px] font-bold uppercase tracking-[0.18em] text-[#c59d4d]/80">
                            {book.genre}
                        </span>
                    </div>

                    <div>
                        <h3 className="font-accent text-[19px] font-bold leading-[1.15] text-[#f4ecde]">
                            {book.title}
                        </h3>
                        <p className="mt-2 font-body text-[1rem] italic leading-snug text-[#f4ecde]/60">
                            {book.tagline}
                        </p>
                        <p className="mt-4 font-accent text-[10px] uppercase tracking-[0.14em] text-[#efe6d8]/50">
                            {book.author}
                        </p>
                    </div>
                </div>

                {/* hover sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* view details overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-[#090807]/0 pb-6 opacity-0 transition-all duration-300 group-hover:bg-[#090807]/25 group-hover:opacity-100">
                    <span className="font-accent flex items-center gap-2 rounded-full border border-[#c59d4d]/50 bg-[#090807]/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#f4ecde]">
                        View Details <ArrowRight size={12} />
                    </span>
                </div>
            </motion.div>
        </motion.button>
    );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function NavPortfolio() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    const [activeGenre, setActiveGenre] = useState<"All" | Genre>("All");
    const [openBook, setOpenBook] = useState<(typeof books)[number] | null>(null);

    const filtered = useMemo(
        () => (activeGenre === "All" ? books : books.filter((b) => b.genre === activeGenre)),
        [activeGenre]
    );

    return (
        <main className="w-full overflow-hidden bg-[#090807]">
            {/* ══════════════════ S1 — HERO (dark) ══════════════════ */}
            <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-[#090807] px-6 py-24 text-center">
<div className="absolute inset-0">
    <img
        src="images/port_bg.png"
        alt=""
        className="h-full w-full object-cover"
    />
</div>
                <div className="pointer-events-none absolute right-[15%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#c59d4d]/10 blur-[140px]" />

                <motion.div
    initial={initial}
    animate={animate}
    variants={container}
    className="relative z-10 mx-auto max-w-[800px] rounded-3xl bg-black/20 px-8 py-10 backdrop-blur-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
>
    <motion.div variants={fadeUp}>
        <GoldDivider label="Our Portfolio" />
    </motion.div>

    <motion.h1
        variants={fadeUp}
        className="font-accent leading-[0.98] text-[#f4ecde]"
        style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.85)",
        }}
    >
        <span className="block text-[clamp(2.1rem,6vw,4.5rem)] tracking-[-0.01em]">
            Peek Behind The Curtain
        </span>

        <span className="block text-[clamp(1.6rem,4.6vw,3.2rem)] tracking-[-0.01em] text-[#c59d4d]">
            Of Every Story We've Shelved.
        </span>
    </motion.h1>

    <motion.p
        variants={fadeUp}
        className="mx-auto mt-7 max-w-[600px] font-body text-[1rem] leading-[1.9] text-[#efe6d8]"
        style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
        }}
    >
        A closer look at the manuscripts we've edited, the covers we've designed,
        and the authors we've carried from first draft to final shelf.
    </motion.p>

    <motion.div
        variants={fadeUp}
        className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
    >
        {[
            { n: "240+", l: "Books Published" },
            { n: "8", l: "Genres Covered" },
            { n: "180+", l: "Authors Served" },
            { n: "6", l: "Distribution Partners" },
        ].map(({ n, l }) => (
            <div key={l}>
                <div
                    className="font-accent text-[26px] font-bold text-[#c59d4d] sm:text-[32px]"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                >
                    {n}
                </div>

                <div
                    className="font-accent mt-1 text-[10px] uppercase tracking-[0.12em] text-[#efe6d8]/80"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                >
                    {l}
                </div>
            </div>
        ))}
    </motion.div>
</motion.div>
            </section>

            {/* ══════════════════ S2 — FILTERABLE PORTFOLIO GRID (light) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#f4ecde] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img
                        src="/images/my.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ filter: "sepia(0.35) saturate(0.75) brightness(0.9) contrast(0.95)" }}
                    />
                    
<div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="mb-12 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <GoldDivider label="Shelf-Worthy Work" />
                        </motion.div>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-accent text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.02] tracking-[-0.01em] text-[#241408]">
                            Stories We're <span className="text-[#5b1818]">Proud Of</span>
                        </motion.h2>
                    </div>

                    {/* Genre filter tabs */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                        className="mb-14 flex flex-wrap items-center justify-center gap-3"
                    >
                        {genres.map((g) => {
                            const active = activeGenre === g;
                            return (
                                <motion.button
                                    key={g}
                                    variants={fadeUp}
                                    onClick={() => setActiveGenre(g)}
                                    className={`font-accent rounded-full border px-5 py-2.5 text-[1rem] font-bold uppercase tracking-[0.08em] transition-all duration-300 ${active
                                            ? "border-[#5b1818] bg-[#5b1818] text-[#f4ecde]"
                                            : "border-[#241408]/15 bg-white/40 text-[#241408]/70 hover:border-[#5b1818]/40 hover:text-[#5b1818]"
                                        }`}
                                >
                                    {g}
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Grid */}
                    <motion.div layout className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((book) => (
                                <motion.div
                                    key={book.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                    transition={{ duration: 0.4, ease }}
                                >
                                    <BookCard book={book} onOpen={() => setOpenBook(book)} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ S3 — BOOK TRAILER SHOWCASE (dark, attractive Black-bg) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#090807] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/Black-bg.jpg" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#090807]/45" />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="mb-16 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <GoldDivider label="In Motion" />
                        </motion.div>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-accent text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.02] tracking-[-0.01em] text-[#f4ecde]">
                            Book Trailers <span className="text-[#c59d4d]">We've Produced</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {trailers.map(({ title, genre }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3, ease }}
                                className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-xl ring-1 ring-white/10"
                                style={{ background: "linear-gradient(160deg, #1c1408, #090807)" }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        whileHover={{ scale: 1.12 }}
                                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c59d4d] shadow-[0_10px_30px_rgba(197,157,77,0.4)]"
                                    >
                                        <Play size={22} className="ml-1 text-[#090807]" fill="#090807" />
                                    </motion.span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090807] via-[#090807]/70 to-transparent p-5">
                                    <span className="font-accent block text-[10px] uppercase tracking-[0.12em] text-[#c59d4d]">{genre}</span>
                                    <span className="font-accent mt-1 block text-[13px] font-bold leading-tight text-[#f4ecde]">{title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ S4 — DISTRIBUTION PARTNERS (light) ══════════════════ */}
            <section className="relative overflow-hidden bg-[#f4ecde] py-20 lg:py-24">
              <div className="absolute inset-0">
    <img
        src="/images/my.jpg"
        alt=""
        className="h-full w-full object-cover"
        style={{
            filter: "brightness(0.75)"
        }}
    />
    <div className="absolute inset-0 bg-black/20" />
</div>
                <div className="relative z-10 mx-auto max-w-6xl px-6 text-center sm:px-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <GoldDivider label="Sell Your Book With" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                        className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        {platforms.map((p) => (
                            <motion.span
                                key={p}
                                variants={fadeUp}
                                className="font-accent rounded-full border border-[#241408]/15 bg-white/50 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#241408]/75 transition-colors duration-300 hover:border-[#c59d4d] hover:text-[#5b1818]"
                            >
                                {p}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
         

            {/* ══════════════════ S5 — CTA (dark) ══════════════════ */}
             
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: "url('/images/quill_ink.png')", backgroundSize: "180px" }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease }}
                    className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10"
                >
                    <h2 className="font-accent mb-5 text-[clamp(1.8rem,4.4vw,3.2rem)] leading-[1.08] text-parchment">
                        Your Book Could Be Next On This Shelf
                    </h2>
                    <p className="font-body mx-auto mb-10 max-w-[520px] text-[1rem] leading-[1.7] text-parchment/80">
                        From first draft to final shelf, we'll carry your story the same way
                        we've carried every one on this page.
                    </p>
                    <a href="#contact" className="hero-btn !bg-ink !border-gold-light/40 mx-auto">
                        <span className="hero-btn-overlay" />
                        <span className="hero-btn-inner">
                            Start Your Book's Journey
                            <ArrowRight size={15} strokeWidth={1.6} />
                        </span>
                    </a>
                </motion.div>
            </section>

            {/* ══════════════════ BOOK DETAIL MODAL ══════════════════ */}
            <AnimatePresence>
                {openBook && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenBook(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#090807]/75 p-6 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.96 }}
                            transition={{ duration: 0.35, ease }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-2xl bg-[#f4ecde] shadow-[0_40px_100px_rgba(0,0,0,0.5)] sm:grid-cols-[220px_1fr]"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenBook(null)}
                                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#090807]/70 text-[#f4ecde] transition-colors hover:bg-[#090807]"
                            >
                                <X size={16} />
                            </button>

                            <div
                                className="relative aspect-[2/3] w-full sm:aspect-auto"
                                style={{
                                    background: `linear-gradient(155deg, ${genrePalette[openBook.genre].from}, ${genrePalette[openBook.genre].to})`,
                                }}
                            >
                                <img
                                    src={openBook.image}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/45" />
                                <div className="relative flex h-full flex-col justify-between p-6">
                                    <div className="flex items-center gap-2">
                                        {(() => {
                                            const Icon = genreIcons[openBook.genre];
                                            return <Icon size={14} className="text-[#c59d4d]" strokeWidth={1.6} />;
                                        })()}
                                        <span className="font-accent text-[9px] font-bold uppercase tracking-[0.18em] text-[#c59d4d]/80">
                                            {openBook.genre}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-accent text-[20px] font-bold leading-[1.15] text-[#f4ecde]">
                                            {openBook.title}
                                        </h3>
                                        <p className="mt-2 font-accent text-[10px] uppercase tracking-[0.14em] text-[#efe6d8]/50">
                                            {openBook.author}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 sm:p-10">
                                <span className="font-accent text-[1rem] font-bold uppercase tracking-[0.14em] text-[#5b1818]">
                                    {openBook.tagline}
                                </span>
                                <p className="font-body mt-5 text-[1rem] leading-[1.85] text-[#241408]/75">
                                    {openBook.blurb}
                                </p>

                                <div className="mt-7">
                                    <span className="font-accent block text-[10px] font-bold uppercase tracking-[0.12em] text-[#241408]/50">
                                        Services Provided
                                    </span>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {openBook.services.map((s) => (
                                            <span
                                                key={s}
                                                className="font-accent flex items-center gap-1.5 rounded-full bg-[#5b1818]/10 px-3 py-1.5 text-[1rem] font-bold uppercase tracking-[0.06em] text-[#5b1818]"
                                            >
                                                {s === "Cover Design" || s === "Cover Illustration" ? <Palette size={11} /> :
                                                    s.includes("Marketing") ? <BarChart size={11} /> :
                                                        s.includes("Editing") || s.includes("Ghostwriting") ? <PenTool size={11} /> :
                                                            <BookOpen size={11} />}
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    className="font-accent mt-8 inline-flex items-center gap-2 rounded-xl bg-[#5b1818] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#f4ecde] transition-colors duration-300 hover:bg-[#7a2020]"
                                >
                                    Start A Project Like This
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}