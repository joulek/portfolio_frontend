"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Palette, Code2, ShoppingBag, Smartphone, TrendingUp, Layers } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const icons = [Code2, Palette, Smartphone, Layers, TrendingUp, ShoppingBag];

export default function Services() {
  const [active, setActive] = useState(null);
  const { t } = useLanguage();

  const services = t("services.items");

  return (
    <section
      id="services"
      className="py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-medium text-accent mb-4">
            {t("services.badge")}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight"
              style={{ color: "var(--text)" }}
            >
              {t("services.title1")}
              <br />
              <span className="italic">{t("services.title2")}</span>
            </h2>
            <p
              className="max-w-sm text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t("services.subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Services accordion */}
        <div
          className="border rounded-3xl overflow-hidden"
          style={{ borderColor: "var(--border)" }}
        >
          {services.map((service, i) => {
            const Icon = icons[i];
            const isOpen = active === i;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 p-6 lg:p-8 text-left border-b transition-colors duration-200 hover:bg-[var(--card)] group"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-xs font-mono font-bold tracking-wider flex-shrink-0 w-8"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {service.number}
                  </span>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-accent" : "border"
                    }`}
                    style={!isOpen ? { borderColor: "var(--border)" } : {}}
                  >
                    <Icon
                      size={18}
                      className={isOpen ? "text-[#0A0A0F]" : ""}
                      style={!isOpen ? { color: "var(--text-muted)" } : {}}
                    />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div>
                      <h3
                        className="text-base lg:text-lg font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {service.title}
                      </h3>
                      {!isOpen && (
                        <p
                          className="text-sm mt-0.5 hidden sm:block"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {service.short}
                        </p>
                      )}
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 flex items-center justify-center text-xl font-light flex-shrink-0"
                      style={{ color: isOpen ? "#C9F538" : "var(--text-muted)" }}
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                  style={{ background: "var(--card)" }}
                >
                  <div className="px-6 lg:px-8 py-6 pl-[calc(2rem+2.5rem+1.5rem)] flex flex-col lg:flex-row gap-8">
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {service.description}
                    </p>
                    <div className="flex-shrink-0">
                      <p
                        className="text-xs uppercase tracking-widest mb-3 font-semibold"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {t("services.deliverables_label")}
                      </p>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="text-sm flex items-center gap-2"
                            style={{ color: "var(--text)" }}
                          >
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}