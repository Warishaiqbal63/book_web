"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import {
    X, ArrowRight, PenTool, Palette, BarChart, BookOpen,
    Sparkles, Mic, Clock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Motion variants — same rhythm as Hero / About / Services / Portfolio */
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

type Category = "Editing & Craft" | "Cover & Design" | "Marketing & Growth" | "Publishing Path" | "Genre Spotlight" | "Author Life";

const categoryIcons: Record<Category, any> = {
    "Editing & Craft": PenTool,
    "Cover & Design": Palette,
    "Marketing & Growth": BarChart,
    "Publishing Path": BookOpen,
    "Genre Spotlight": Sparkles,
    "Author Life": Mic,
};

const categoryPalette: Record<Category, { from: string; to: string }> = {
    "Editing & Craft": { from: "#2a3a1f", to: "#1a2414" },
    "Cover & Design": { from: "#2e1f3d", to: "#1c1428" },
    "Marketing & Growth": { from: "#0f2e30", to: "#0a1c1e" },
    "Publishing Path": { from: "#3a2a18", to: "#241408" },
    "Genre Spotlight": { from: "#5b1818", to: "#3a1010" },
    "Author Life": { from: "#1c2333", to: "#3a2a18" },
};

const posts: {
    id: string;
    title: string;
    category: Category;
    readTime: string;
    excerpt: string;
    body: string;
}[] = [
    {
        id: "p1",
        title: "The Line Edit vs. The Developmental Edit: What's the Difference?",
        category: "Editing & Craft",
        readTime: "6 min read",
        excerpt: "Two authors hand in manuscripts on the same day and get back completely different sets of notes. Here's why, and how to know which pass your draft actually needs.",
        body: "Good editing doesn't rewrite your book, it sharpens what's already there. A developmental edit looks at the big picture: pacing that drags, plot holes, characters who haven't earned their arc yet. A line edit works closer to the sentence, refining rhythm and word choice without touching your voice. Most manuscripts pass through both, in that order, because fixing structure after polishing sentences means re-polishing sentences you'll cut anyway. If you're not sure which one you need, a quick diagnostic read from an editor before you commit to a full pass can save you months.",
    },
    {
        id: "p2",
        title: "Why Your Cover Has About Three Seconds to Work",
        category: "Cover & Design",
        readTime: "5 min read",
        excerpt: "A reader decides whether to look closer within seconds of seeing a cover. That single fact should shape every design decision you make.",
        body: "A thriller cover and a cozy romance cover are doing completely different jobs, even if both are technically 'attractive.' One needs to signal tension and intrigue at thumbnail size. The other needs a visual language that says warmth and low stakes before a reader reads a single word of the blurb. Good cover design starts with genre comparables, not personal taste, because the cover's real job is to tell a potential reader exactly what kind of story they're about to get, before they've read a page. Typography, color, and imagery all serve that one goal.",
    },
    {
        id: "p3",
        title: "Marketing a Book Is a Relationship, Not a Launch Day",
        category: "Marketing & Growth",
        readTime: "7 min read",
        excerpt: "The biggest mistake authors make is treating launch week as the whole campaign. Here's what actually builds a readership that sticks around for book two.",
        body: "A launch-day push matters, advance copies, reviewer outreach, a coordinated social and email sequence can meaningfully boost first-week visibility and rankings. But the authors who build a real career treat that push as the opening of a longer relationship with readers, not the finish line. Consistent author branding, ongoing content, and clear reporting on what's actually converting let you adjust strategy based on real data instead of guesswork. The goal isn't one good week. It's a readership that shows up again for your next book.",
    },
    {
        id: "p4",
        title: "Self-Publishing Isn't One Path, It's Four Decisions",
        category: "Publishing Path",
        readTime: "8 min read",
        excerpt: "Print or digital, wide or exclusive, offset or print-on-demand. Every choice compounds. Here's how to make them in the right order.",
        body: "Authors often ask which publishing platform is 'best,' but the more useful question is which sequence of decisions fits their specific book and goals. Format comes first: print, ebook, audiobook, or all three, each with different formatting and production needs. Distribution comes next: wide across every retailer, or exclusive to one platform for better promotional tools. Pricing and royalty structure follow from that. None of these choices are permanent, but making them deliberately, in order, avoids the common trap of backing into a distribution strategy by accident.",
    },
    {
        id: "p5",
        title: "What Makes a Mystery's Ending Feel Earned, Not Convenient",
        category: "Genre Spotlight",
        readTime: "6 min read",
        excerpt: "Readers can forgive almost anything in a mystery except a reveal that depends on information they were never given a fair shot at finding.",
        body: "A great mystery lives and dies on structure, the clues planted, the red herrings scattered, and the exact moment each piece gets revealed. The strongest mysteries build backward from the central question, planting misdirection with intention rather than as an afterthought. Pacing matters just as much as the puzzle itself: tension needs to build steadily, and the detective or amateur sleuth has to feel like a real person, not just a mechanism for solving the plot. When the reveal lands, it should feel like the reader could have gotten there, if they'd been paying just a little closer attention.",
    },
    {
        id: "p6",
        title: "The Quiet Craft of Writing for Read-Aloud Readers",
        category: "Genre Spotlight",
        readTime: "5 min read",
        excerpt: "A children's book is judged by how it sounds on the tenth bedtime reading, not just how it reads on the page.",
        body: "Writing for children carries a unique set of demands that general fiction doesn't: age-appropriate vocabulary, rhythm that holds up when read aloud, and pacing that keeps a short attention span engaged without losing the adult doing the reading. Sentence rhythm matters as much as plot, since so much of a children's book is experienced through listening rather than reading. When illustrations are involved, text and art need to share the storytelling load rather than compete for it. The best measure of success isn't whether a child enjoys it once. It's whether a family asks for it again.",
    },
    {
        id: "p7",
        title: "Ghostwriting Is a Confidentiality Agreement Before It's a Craft",
        category: "Author Life",
        readTime: "6 min read",
        excerpt: "The best ghostwritten books share one thing in common: nobody but the author and the writer ever needs to know how they were made.",
        body: "Ghostwriting rests on a simple promise: the finished book belongs entirely to the author, in message and in voice, even though someone else helped put the words down. That starts with genuinely understanding not just what an author wants to say, but how they naturally say it, through interviews, notes, and rounds of feedback throughout the drafting process rather than a single handoff at the end. Confidentiality isn't an afterthought either, it's built into the agreement from day one, protecting both the author's privacy and their sole authorship of the finished work.",
    },
    {
        id: "p8",
        title: "Proofreading Isn't Editing's Little Sibling",
        category: "Editing & Craft",
        readTime: "4 min read",
        excerpt: "By the time a manuscript reaches proofreading, it's already been through several rounds of edits, which is exactly why small errors are the hardest to catch.",
        body: "Typos, inconsistent punctuation, and stray repeated words hide in plain sight after an author has read their own manuscript dozens of times. Proofreading isn't about restructuring the story, it's a fresh set of eyes catching what earlier passes missed: mismatched quotation marks, inconsistent chapter headings, awkward page breaks introduced during formatting. It's a small, unglamorous stage, and it's also the last line of defense between a manuscript and a reader's first impression of it.",
    },
    {
        id: "p9",
        title: "An Author Website Isn't a Brochure, It's a First Impression",
        category: "Author Life",
        readTime: "5 min read",
        excerpt: "In an increasingly online publishing landscape, your website is often the very first place a reader or reviewer goes to decide whether to trust you.",
        body: "A cluttered, confusing author website can undercut even the strongest brand, while a clean one with a clear home page, a dedicated page per book, and an easy way to connect does real, quiet work in the background. It's not just a digital business card. It's where curiosity turns into a purchase, or doesn't. Getting the basics right, clear navigation, real cover images, an honest bio, matters more than any clever flourish.",
    },
    {
        id: "p10",
        title: "Building a Magic System Readers Actually Believe",
        category: "Genre Spotlight",
        readTime: "7 min read",
        excerpt: "Fantasy asks more of a writer than almost any genre: an entire world built from scratch, with rules internal logic has to respect all the way through.",
        body: "The strongest fantasy worlds establish their geography, power systems, and politics early, then weave those details into the story organically through character experience rather than long standalone passages of exposition. Consistency is the real test: a magic system's rules have to hold up across the full length of the story, or readers stop trusting the stakes. And no amount of inventive world-building matters if the people living in that world aren't grounded and believable enough to make a reader want to stay.",
    },
];

const categories: ("All" | Category)[] = [
    "All", "Editing & Craft", "Cover & Design", "Marketing & Growth", "Publishing Path", "Genre Spotlight", "Author Life",
];

/* ------------------------------------------------------------------ */
/*  Tilt card                                                          */
/* ------------------------------------------------------------------ */

function BlogCard({ post, onOpen }: { post: (typeof posts)[number]; onOpen: () => void }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const Icon = categoryIcons[post.category];
    const palette = categoryPalette[post.category];

    function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: py * -10, y: px * 10 });
    }

    return (
        <motion.button
            type="button"
            onClick={onOpen}
            variants={fadeUp}
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ perspective: 900 }}
            className="group relative block h-full text-left"
        >
            <motion.div
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                style={{
                    transformStyle: "preserve-3d",
                    background: `linear-gradient(155deg, ${palette.from}, ${palette.to})`,
                }}
                className="relative flex h-full flex-col overflow-hidden rounded-md p-7 shadow-[0_18px_40px_rgba(9,8,7,0.35)] ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_28px_60px_rgba(9,8,7,0.55)]"
            >
                <svg className="absolute right-5 top-5 opacity-70" width="16" height="16" viewBox="0 0 24 24" fill="#c59d4d">
                    <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
                </svg>

                <div className="relative z-10 flex items-center gap-2">
                    <Icon size={14} className="text-[#c59d4d]" strokeWidth={1.6} />
                    <span className="font-accent text-[9px] font-bold uppercase tracking-[0.18em] text-[#c59d4d]/80">
                        {post.category}
                    </span>
                </div>

                <h3 className="font-accent relative z-10 mt-5 text-[19px] font-bold leading-[1.2] text-[#f4ecde]">
                    {post.title}
                </h3>

                <p className="font-body relative z-10 mt-3 flex-1 text-[1rem] leading-[1.7] text-[#f4ecde]/70">
                    {post.excerpt}
                </p>

                <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                    <Clock size={12} className="text-[#efe6d8]/50" />
                    <span className="font-accent text-[10px] uppercase tracking-[0.14em] text-[#efe6d8]/50">
                        {post.readTime}
                    </span>
                    <span className="font-accent ml-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#c59d4d] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Read <ArrowRight size={12} />
                    </span>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
        </motion.button>
    );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BlogPage() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
    const [openPost, setOpenPost] = useState<(typeof posts)[number] | null>(null);
    const [email, setEmail] = useState("");

    const filtered = useMemo(
        () => (activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory)),
        [activeCategory]
    );

    return (
        <main className="w-full overflow-hidden bg-[#090807]">
            <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden bg-[#090807] px-6 py-24 text-center">
                <div className="absolute inset-0">
                    <img src="/images/Craft-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#090807]/45" />
                </div>
                <div className="pointer-events-none absolute left-[10%] top-1/4 h-[500px] w-[500px] rounded-full bg-[#c59d4d]/10 blur-[140px]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                <motion.div
                    initial={initial}
                    animate={animate}
                    variants={container}
                    className="relative z-10 mx-auto max-w-[800px]"
                >
                    <motion.div variants={fadeUp}>
                        <GoldDivider label="The OakMont Journal" />
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="font-accent leading-[0.98] text-[#f4ecde]">
                        <span className="block text-[clamp(2.1rem,6vw,4.5rem)] tracking-[-0.01em]">
                            Notes On Craft,
                        </span>
                        <span className="block text-[clamp(1.6rem,4.6vw,3.2rem)] tracking-[-0.01em] text-[#c59d4d]">
                            Publishing, And The Books In Between.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="font-body mx-auto mt-7 max-w-[600px] text-[1rem] leading-[1.9] text-[#efe6d8]/80"
                    >
                        Field notes from our editors, designers, and marketers, on the small
                        decisions that make a manuscript into a book worth reading.
                    </motion.p>
                </motion.div>
            </section>

            <section className="relative overflow-hidden bg-[#f4ecde] py-24 lg:py-32">
                <div className="absolute inset-0">
                    <img src="/images/about-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#f4ecde]/55" />
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
                    <div className="mb-12 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <GoldDivider label="Latest Articles" />
                        </motion.div>
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-accent text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.02] tracking-[-0.01em] text-[#241408]">
                            Read Before You <span className="text-[#5b1818]">Write</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                        className="mb-14 flex flex-wrap items-center justify-center gap-3"
                    >
                        {categories.map((c) => {
                            const active = activeCategory === c;
                            return (
                                <motion.button
                                    key={c}
                                    variants={fadeUp}
                                    onClick={() => setActiveCategory(c)}
                                    className={`font-accent rounded-full border px-5 py-2.5 text-[1rem] font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
                                        active
                                            ? "border-[#5b1818] bg-[#5b1818] text-[#f4ecde]"
                                            : "border-[#241408]/15 bg-white/40 text-[#241408]/70 hover:border-[#5b1818]/40 hover:text-[#5b1818]"
                                    }`}
                                >
                                    {c}
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.94 }}
                                    transition={{ duration: 0.4, ease }}
                                >
                                    <BlogCard post={post} onOpen={() => setOpenPost(post)} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#090807] py-24 lg:py-28">
                <div className="absolute inset-0">
                    <img src="/images/Black-bg.jpg" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#090807]/45" />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="pointer-events-none absolute right-[10%] top-1/3 h-[400px] w-[400px] rounded-full bg-[#c59d4d]/10 blur-[140px]" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                    className="relative z-10 mx-auto max-w-2xl px-6 text-center sm:px-10"
                >
                    <motion.div variants={fadeUp}>
                        <GoldDivider label="Stay In The Loop" />
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="font-accent text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.1] text-[#f4ecde]">
                        Publishing Tips, Straight To Your Inbox
                    </motion.h2>
                    <motion.p variants={fadeUp} className="font-body mx-auto mt-5 max-w-[460px] text-[1rem] leading-[1.8] text-[#efe6d8]/75">
                        Author resources and craft notes, sent when we have something worth saying, and not before.
                    </motion.p>

                    <motion.form
                        variants={fadeUp}
                        onSubmit={(e) => e.preventDefault()}
                        className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="font-body flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[1rem] text-[#f4ecde] placeholder:text-[#efe6d8]/40 outline-none transition-colors focus:border-[#c59d4d]/60"
                        />
                        <button
                            type="submit"
                            className="font-accent flex items-center justify-center gap-2 rounded-full bg-[#c59d4d] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-[#090807] transition-colors duration-300 hover:bg-[#e0b968]"
                        >
                            Subscribe <ArrowRight size={14} />
                        </button>
                    </motion.form>
                </motion.div>
            </section>

            <section className="relative overflow-hidden bg-[#f4ecde] py-24 lg:py-28">
                <div className="absolute inset-0">
                    <img src="/images/about-bg.png" alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#f4ecde]/55" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease }}
                    className="relative z-10 mx-auto max-w-2xl px-6 text-center sm:px-10"
                >
                    <GoldDivider label="Have A Story To Tell" />
                    <h2 className="font-accent mb-5 text-[clamp(1.8rem,4.4vw,3.2rem)] leading-[1.08] text-[#241408]">
                        Stop Reading About It. Start Writing It.
                    </h2>
                    <p className="font-body mx-auto mb-10 max-w-[480px] text-[1rem] leading-[1.7] text-[#241408]/70">
                        Every article on this page started as someone else's finished
                        book. Let's talk about yours.
                    </p>
                    <a
                        href="#contact"
                        className="font-accent inline-flex items-center gap-2 rounded-xl bg-[#5b1818] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#f4ecde] transition-colors duration-300 hover:bg-[#7a2020]"
                    >
                        Start Your Book's Journey
                        <ArrowRight size={15} strokeWidth={1.6} />
                    </a>
                </motion.div>
            </section>

            <AnimatePresence>
                {openPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenPost(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#090807]/75 p-6 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.96 }}
                            transition={{ duration: 0.35, ease }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#f4ecde] shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenPost(null)}
                                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#090807]/70 text-[#f4ecde] transition-colors hover:bg-[#090807]"
                            >
                                <X size={16} />
                            </button>

                            <div
                                className="relative p-8 pb-10 sm:p-10 sm:pb-12"
                                style={{
                                    background: `linear-gradient(155deg, ${categoryPalette[openPost.category].from}, ${categoryPalette[openPost.category].to})`,
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    {(() => {
                                        const Icon = categoryIcons[openPost.category];
                                        return <Icon size={14} className="text-[#c59d4d]" strokeWidth={1.6} />;
                                    })()}
                                    <span className="font-accent text-[9px] font-bold uppercase tracking-[0.18em] text-[#c59d4d]/80">
                                        {openPost.category}
                                    </span>
                                    <span className="font-accent text-[9px] uppercase tracking-[0.14em] text-[#efe6d8]/40">
                                        · {openPost.readTime}
                                    </span>
                                </div>
                                <h3 className="font-accent mt-4 text-[24px] font-bold leading-[1.15] text-[#f4ecde] sm:text-[28px]">
                                    {openPost.title}
                                </h3>
                            </div>

                            <div className="max-h-[50vh] overflow-y-auto p-8 sm:p-10">
                                <p className="font-body text-[1rem] leading-[1.85] text-[#241408]/80">
                                    {openPost.body}
                                </p>

                                <a
                                    href="#contact"
                                    className="font-accent mt-8 inline-flex items-center gap-2 rounded-xl bg-[#5b1818] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#f4ecde] transition-colors duration-300 hover:bg-[#7a2020]"
                                >
                                    Talk To Our Team
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