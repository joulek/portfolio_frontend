"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";



export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoLetters = "YNITY".split("");
const navLinks = [
  { label: t("nav.about"), href: "#about" },
  { label: t("nav.services"), href: "#services" },
  { label: t("nav.work"), href: "#work" },
  { label: t("nav.contact"), href: "#contact" },
];
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-xl border-b" : "py-6"
        }`}
      style={{
        background: scrolled ? "var(--navbar-bg)" : "transparent",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="relative flex items-center gap-1"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <span className="text-xl font-display font-bold tracking-tight flex">
            {logoLetters.map((letter, i) => (
              <motion.span
                key={i}
                animate={
                  logoHovered
                    ? {
                      y: [0, -8, 0],
                      color: i % 2 === 0 ? "#C9F538" : "var(--text)",
                    }
                    : { y: 0, color: "var(--text)" }
                }
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
                style={{ color: "var(--text)", display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-accent ml-0.5"
            animate={logoHovered ? { scale: [1, 1.8, 1] } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium relative group transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="group-hover:text-[var(--text)] transition-colors duration-200">
                {link.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}
          {mounted && (
            <button
              onClick={toggleLang}
              className="w-9 h-9 rounded-full flex items-center justify-center border text-xs font-semibold transition-all duration-200 hover:scale-110"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              aria-label="Toggle language"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          )}

          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-accent text-[#0A0A0F] hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-full flex items-center justify-center border"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
          {mounted && (
  <button
    onClick={toggleLang}
    className="w-9 h-9 rounded-full flex items-center justify-center border text-xs font-semibold"
    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
  >
    {lang === "en" ? "FR" : "EN"}
  </button>
)}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--text)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              background: "var(--navbar-bg)",
              backdropFilter: "blur(20px)",
              borderColor: "var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium py-1"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-accent text-[#0A0A0F] text-center"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}