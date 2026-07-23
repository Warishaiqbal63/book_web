import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom"; // React Router Link import kiya
import { Phone, Mail, Menu, ChevronDown, ChevronRight, X } from "lucide-react";

const servicesMenu = [
    {
        label: "Writing Services",
        links: [
            "Book Writing",
            "Ghostwriting",
            "Children's Book Writing",
            "Sci-Fi Writing",
            "Memoir Writing",
            "Fiction Writing",
            "SEO Content Writing",
            "Mystery Writing",
            "Historical Writing",
            "Fantasy Writing",
            "Non-Fiction Writing",
            "Script Writing",
            "Horror Writing",
        ],
    },
    {
        label: "Editing & Publishing",
        links: [
            "Book Proofreading",
            "Book Editing",
            "Ebook Creation",
            "Audiobook Narration",
            "Book Formatting",
            "Children's Book Editing",
            "Book Publishing",
        ],
    },
    {
        label: "Design, Printing & Marketing",
        links: [
            "Book Cover Design",
            "Author Website Design",
            "Book Printing",
            "Book Marketing",
        ],
    },
];

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/Blog" },
    { label: "Contact", href: "/contact" },
];

const dropdownVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

const subVariants = {
    hidden: { opacity: 0, x: -6 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.18, ease: "easeOut" as const } },
    exit: { opacity: 0, x: -4, transition: { duration: 0.12 } },
};

const slugify = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [activeService, setActiveService] = useState<string>(servicesMenu[0].label);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

    const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleServicesEnter = () => {
        if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
        setServicesOpen(true);
    };

    const handleServicesLeave = () => {
        servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 100);
    };

    const activeLinks = servicesMenu.find((s) => s.label === activeService)?.links ?? [];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
            style={{
                background: scrolled ? "rgba(11, 9, 6, 0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(14px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
            }}
        >
            <div className="flex h-[36px] items-center justify-end gap-4 px-4 sm:gap-8 sm:px-8 lg:h-[40px]">
                <a
                    href="tel:1112220000"
                    className="group flex items-center gap-1.5 font-body text-[13px] text-parchment/90 transition-colors hover:text-gold"
                >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-oxblood transition-colors group-hover:bg-oxblood-light">
                        <Phone size={9} className="text-parchment" />
                    </span>
                    <span className="hidden sm:inline">(111) 222-0000</span>
                </a>
                <a
                    href="mailto:info@wordsworthpublishing.com"
                    className="group flex items-center gap-1.5 font-body text-[13px] text-parchment/90 transition-colors hover:text-gold"
                >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-oxblood transition-colors group-hover:bg-oxblood-light">
                        <Mail size={9} className="text-parchment" />
                    </span>
                    <span className="hidden sm:inline">info@wordsworthpublishing.com</span>
                </a>
            </div>

            <nav className="flex h-[86px] items-center justify-between px-4 sm:h-[96px] sm:px-8 lg:h-[112px] xl:h-[124px] xl:px-10">
                <Link to="/" className="flex h-full shrink-0 items-center gap-3 sm:gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold font-accent text-2xl text-gold sm:h-16 sm:w-16 sm:text-3xl lg:h-[76px] lg:w-[76px] lg:text-[34px] xl:h-[86px] xl:w-[86px] xl:text-[38px]">
                        W
                    </span>
                    <span className="leading-tight">
                        <span className="block font-accent text-lg tracking-[0.15em] text-parchment sm:text-2xl lg:text-[28px] xl:text-[32px]">
                            WORDSWORTH
                        </span>
                        <span className="block font-body text-[10px] tracking-[0.35em] text-gold sm:text-xs sm:tracking-[0.4em] lg:text-sm lg:tracking-[0.45em]">
                            PUBLISHING
                        </span>
                    </span>
                </Link>

                <ul className="hidden items-center lg:flex">
                    {navItems.map((item) => {
                        if (item.label === "Services") {
                            return (
                                <li
                                    key="Services"
                                    className="relative"
                                    onMouseEnter={handleServicesEnter}
                                    onMouseLeave={handleServicesLeave}
                                >
                                    <Link
                                        to="/services"
                                        className="flex items-center gap-1.5 px-4 py-2 font-body text-[17px] font-semibold text-parchment transition-colors duration-300 hover:text-gold xl:text-[18px]"
                                    >
                                        Services
                                        <ChevronDown
                                            size={13}
                                            className={`text-gold/50 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </Link>

                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                variants={dropdownVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                onMouseEnter={handleServicesEnter}
                                                onMouseLeave={handleServicesLeave}
                                                className="absolute top-full right-0 z-50 flex origin-top"
                                                style={{
                                                    width: "680px",
                                                    background: "rgba(11, 9, 6, 0.97)",
                                                    backdropFilter: "blur(20px)",
                                                    WebkitBackdropFilter: "blur(20px)",
                                                    border: "1px solid rgba(201, 162, 75, 0.15)",
                                                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                                                }}
                                            >
                                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />

                                                <div className="w-[240px] shrink-0 border-r border-gold/10 pt-6 pb-4">
                                                    {servicesMenu.map((srv) => (
                                                        <button
                                                            key={srv.label}
                                                            onMouseEnter={() => setActiveService(srv.label)}
                                                            className={`flex w-full items-center justify-between px-5 py-3 text-left font-body text-[13px] font-semibold transition-colors ${activeService === srv.label
                                                                    ? "bg-gold/15 text-gold"
                                                                    : "text-parchment/70 hover:bg-parchment/5 hover:text-parchment"
                                                                }`}
                                                        >
                                                            {srv.label}
                                                            <ChevronRight size={13} className="shrink-0 opacity-50" />
                                                        </button>
                                                    ))}
                                                </div>

                                                <div className="flex-1 px-5 pt-6 pb-4">
                                                    <p className="mb-4 font-accent text-[11px] tracking-[0.25em] text-gold">
                                                        {activeService.toUpperCase()}
                                                    </p>
                                                    <AnimatePresence mode="wait">
                                                        <motion.ul
                                                            key={activeService}
                                                            variants={subVariants}
                                                            initial="hidden"
                                                            animate="visible"
                                                            exit="exit"
                                                            className="grid grid-cols-2 gap-x-4"
                                                        >
                                                            {activeLinks.map((link) => (
                                                                <li key={link}>
                                                                    <Link
                                                                        to={`/InnerServices/${slugify(link)}`}
                                                                        className="group flex items-center gap-2 rounded px-2 py-1.5 font-body text-[13px] text-parchment/75 transition-colors hover:bg-parchment/5 hover:text-gold"
                                                                    >
                                                                        <span className="h-1 w-1 shrink-0 rounded-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
                                                                        {link}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    </AnimatePresence>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        }

                        return (
                            <li key={item.label}>
                                <Link
                                    to={item.href}
                                    className="flex items-center px-4 py-2 font-body text-[17px] font-semibold text-parchment transition-colors duration-300 hover:text-gold xl:text-[18px]"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <button
                    className="p-2 text-parchment transition-colors lg:hidden"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden lg:hidden"
                        style={{
                            background: "rgba(11, 9, 6, 0.97)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                        }}
                    >
                        <ul className="flex flex-col gap-1 px-6 py-4">
                            {navItems.map((item) => {
                                if (item.label === "Services") {
                                    return (
                                        <li key="Services">
                                            <div className="flex items-center border-b border-parchment/5">
                                                <Link
                                                    to="/services"
                                                    className="flex-1 px-3 py-3 text-left font-body text-[14px] font-semibold text-parchment/85 transition-colors hover:text-gold"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    Services
                                                </Link>
                                                <button
                                                    className="p-3 text-gold/50 transition-colors hover:text-gold"
                                                    onClick={() => setMobileServicesOpen((v) => !v)}
                                                    aria-label="Toggle services submenu"
                                                >
                                                    <ChevronDown
                                                        size={14}
                                                        className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </button>
                                            </div>

                                            <AnimatePresence>
                                                {mobileServicesOpen && (
                                                    <motion.ul
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden pl-2"
                                                    >
                                                        {servicesMenu.map((srv) => (
                                                            <li key={srv.label}>
                                                                <button
                                                                    className="flex w-full items-center justify-between border-b border-parchment/5 px-3 py-2.5 text-left font-body text-[13px] font-semibold text-parchment/70 transition-colors hover:text-gold"
                                                                    onClick={() =>
                                                                        setMobileSubOpen(
                                                                            mobileSubOpen === srv.label ? null : srv.label
                                                                        )
                                                                    }
                                                                >
                                                                    {srv.label}
                                                                    <ChevronDown
                                                                        size={12}
                                                                        className={`text-gold/40 transition-transform ${mobileSubOpen === srv.label ? "rotate-180" : ""
                                                                            }`}
                                                                    />
                                                                </button>
                                                                <AnimatePresence>
                                                                    {mobileSubOpen === srv.label && (
                                                                        <motion.ul
                                                                            initial={{ opacity: 0, height: 0 }}
                                                                            animate={{ opacity: 1, height: "auto" }}
                                                                            exit={{ opacity: 0, height: 0 }}
                                                                            className="overflow-hidden pl-4"
                                                                        >
                                                                            {srv.links.map((link) => (
                                                                                <li key={link}>
                                                                                    <Link
                                                                                        to={`/InnerServices/${slugify(link)}`}
                                                                                        className="block px-3 py-2 font-body text-[12px] text-parchment/50 transition-colors hover:text-gold"
                                                                                        onClick={() => setMobileOpen(false)}
                                                                                    >
                                                                                        {link}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </motion.ul>
                                                                    )}
                                                                </AnimatePresence>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    );
                                }
                                return (
                                    <li key={item.label}>
                                        <Link
                                            to={item.href}
                                            className="block border-b border-parchment/5 px-3 py-3 font-body text-[14px] font-semibold text-parchment/85 transition-colors hover:text-gold"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}