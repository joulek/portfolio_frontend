"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const { t } = useLanguage();

  const words = t("hero.words");
  const stats = t("hero.stats");

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-bg"
      style={{ background: "var(--bg)" }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9F538, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--text) 1px, transparent 1px),
            linear-gradient(90deg, var(--text) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-medium"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
            background: "var(--card)",
          }}
        >
          <Sparkles size={13} className="text-accent" />
          {t("hero.badge")}
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        </motion.div>

        {/* Headline */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95]"
            style={{ color: "var(--text)" }}
          >
            {t("hero.line1")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <span
              className="font-display text-[clamp(3rem,8vw,7rem)] italic"
              style={{ color: "var(--text)" }}
            >
              {t("hero.line2")}
            </span>

            <span
              className="font-display text-[clamp(3rem,8vw,7rem)] font-black"
              style={{ color: "#C9F538" }}
            >
              {t("hero.line3")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-2"
          >
            <span
              className="font-display text-[clamp(3rem,8vw,7rem)] font-bold"
              style={{ color: "var(--text)" }}
            >
              {t("hero.line4")}
            </span>
          </motion.div>
        </div>

        {/* Words */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-4 mb-10 flex-wrap"
        >
          {words.map((word, i) => (
            <div key={word} className="flex items-center gap-4">
              <span
                className="text-lg uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                {word}
              </span>
              {i < words.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <p style={{ color: "var(--text-muted)" }}>
            {t("hero.sub")}
          </p>

          <div className="flex gap-3">
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full font-semibold text-sm bg-accent text-black hover:opacity-90 transition"
            >
              {t("hero.cta_work")}
            </a>

            <a
              href="#about"
              className="px-7 py-3.5 rounded-full font-semibold text-sm border transition"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              {t("hero.cta_about")}
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-8 mt-16 pt-10 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-xs uppercase" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ opacity: 1 }}
      >
        <span className="text-xs uppercase" style={{ color: "var(--text-muted)" }}>
          {t("hero.scroll")}
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}