import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowUp, Send } from "lucide-react";

function IconFacebook({ size = 15 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 3h-3a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V3Z" />
        </svg>
    );
}

function IconInstagram({ size = 15 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    );
}

function IconTwitter({ size = 15 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l7.6 9.3L4.4 20H7l6-6.5 5 6.5h4l-8-9.8L20 4h-2.6l-5.3 6-4.5-6H4Z" />
        </svg>
    );
}

function IconLinkedin({ size = 15 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7.5 10v7M7.5 7v.01M12 17v-4.5c0-1.4 1-2.5 2.3-2.5s2.2 1.1 2.2 2.5V17" />
        </svg>
    );
}

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
];

const serviceLinks = [
    { label: "Book Publishing", href: "/InnerServices/book-publishing" },
    { label: "Book Editing", href: "/InnerServices/book-editing" },
    { label: "Ghostwriting", href: "/InnerServices/ghostwriting" },
    { label: "Book Cover Design", href: "/InnerServices/book-cover-design" },
    { label: "Book Marketing", href: "/InnerServices/book-marketing" },
];

const socials = [
    { icon: IconFacebook, href: "#", label: "Facebook" },
    { icon: IconInstagram, href: "#", label: "Instagram" },
    { icon: IconTwitter, href: "#", label: "Twitter" },
    { icon: IconLinkedin, href: "#", label: "LinkedIn" },
];

function AnimatedLink({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            className="group relative inline-flex w-fit items-center font-body text-[14px] text-parchment/70 transition-colors duration-300 hover:text-gold"
        >
            {label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
        </a>
    );
}

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer className="relative w-full overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/images/Craft-bg.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/78" />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(90% 60% at 50% 0%, rgba(201,162,75,0.08) 0%, transparent 60%)",
                    }}
                />
                {/* Bottom-to-top dark gradient — deepens toward the base so the giant
                    watermark text and the bottom bar sit on a clean, dark backdrop */}
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(4,2,1,0.95) 0%, rgba(4,2,1,0.75) 40%, rgba(4,2,1,0.25) 75%, transparent 100%)",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 sm:px-10 lg:px-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="flex flex-col items-start justify-between gap-8 border-b border-gold/20 pb-14 lg:flex-row lg:items-center"
                >
                    <div>
                        <span className="font-accent text-[13px] font-bold uppercase tracking-[0.34em] text-gold">
                            Stay In The Loop
                        </span>
                        <p className="mt-3 max-w-sm font-body text-[1rem] leading-[1.7] text-parchment/70">
                            Subscribe for publishing tips, author resources,
                            and updates from OakMont Publications.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex w-full max-w-md items-center gap-2 rounded-full border border-gold/30 bg-parchment/5 p-1.5 pl-5 backdrop-blur-sm"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="w-full bg-transparent font-body text-[14px] text-parchment placeholder:text-parchment/40 focus:outline-none"
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.94 }}
                            className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-oxblood text-parchment transition-colors hover:bg-oxblood-light"
                            aria-label="Subscribe"
                        >
                            <Send size={16} />
                        </motion.button>
                    </form>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={container}
                    className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-8"
                >
                    <motion.div variants={fadeUp}>
                        <a href="/" className="flex items-center gap-3">
                            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-gold font-accent text-xl text-gold">
                                O
                            </span>
                            <span className="leading-tight">
                                <span className="block font-accent text-lg tracking-[0.15em] text-parchment">
                                    OAKMONT
                                </span>
                                <span className="block font-body text-[10px] tracking-[0.35em] text-gold">
                                    PUBLICATIONS
                                </span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-xs font-body text-[14px] leading-[1.8] text-parchment/60">
                            Your story, our expertise. We help authors at
                            every stage of the journey, from first draft to
                            final shelf.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {socials.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    whileHover={{ y: -4, rotate: -6 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold/80 transition-colors hover:border-gold hover:text-gold"
                                >
                                    <s.icon size={15} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <span className="font-accent text-[12px] uppercase tracking-[0.24em] text-gold">
                            Quick Links
                        </span>
                        <ul className="mt-5 flex flex-col gap-3">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <AnimatedLink href={item.href} label={item.label} />
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <span className="font-accent text-[12px] uppercase tracking-[0.24em] text-gold">
                            Our Services
                        </span>
                        <ul className="mt-5 flex flex-col gap-3">
                            {serviceLinks.map((item) => (
                                <li key={item.label}>
                                    <AnimatedLink href={item.href} label={item.label} />
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <span className="font-accent text-[12px] uppercase tracking-[0.24em] text-gold">
                            Get In Touch
                        </span>
                        <ul className="mt-5 flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="mt-0.5 flex-none text-gold/70" />
                                <a
                                    href="tel:1231231234"
                                    className="font-body text-[14px] text-parchment/70 transition-colors hover:text-gold"
                                >
                                    (123) 123-1234
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-0.5 flex-none text-gold/70" />
                                <a
                                    href="mailto:hello@oakmontpublications.com"
                                    className="font-body text-[14px] text-parchment/70 transition-colors hover:text-gold"
                                >
                                    hello@oakmontpublications.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 flex-none text-gold/70" />
                                <span className="font-body text-[14px] leading-snug text-parchment/70">
                                    Proudly serving authors across the United States
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>

            {/* Giant sliding wordmark — an infinite marquee (two copies back-to-back)
                so "PUBLICATIONS" is never clipped by the container; it simply keeps
                scrolling into full view rather than sitting cropped in one spot. */}
            <div className="relative z-10 overflow-hidden border-t border-gold/10 py-2">
                <motion.div
                    className="flex w-max items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                >
                    {[0, 1].map((i) => (
                        <span
                            key={i}
                            className="select-none px-8 font-accent text-[13vw] font-bold leading-none tracking-[-0.02em] text-parchment/[0.09] sm:text-[9vw]"
                        >
                            OAKMONT PUBLICATIONS
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between sm:px-10 lg:px-10">
                <p className="font-body text-[13px] text-parchment/50">
                    © {new Date().getFullYear()} OakMont Publications. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="/privacy-policy"
                        className="font-body text-[13px] text-parchment/50 transition-colors hover:text-gold"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms"
                        className="font-body text-[13px] text-parchment/50 transition-colors hover:text-gold"
                    >
                        Terms &amp; Conditions
                    </a>

                    <motion.button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.92 }}
                        aria-label="Back to top"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
                    >
                        <ArrowUp size={15} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}