"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Work() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const projects = t("work.projects");
  const filters = t("work.filters");

  // Default to first filter ("All" / "Tous") when language hasn't set one yet
  const active = activeFilter ?? filters[0];

  const filtered =
    active === filters[0]
      ? projects
      : projects.filter((p) =>
          p.tags.some(
            (tag) =>
              tag.toLowerCase().includes(active.toLowerCase()) ||
              p.category.toLowerCase().includes(active.toLowerCase())
          )
        );

  return (
    <section id="work" className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-medium text-accent mb-4">
            {t("work.badge")}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight"
              style={{ color: "var(--text)" }}
            >
              {t("work.title1")}
              <br />
              <span className="italic">{t("work.title2")}</span>
            </h2>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === f ? "bg-accent text-[#0A0A0F] border-accent" : "hover:scale-105"
              }`}
              style={
                active !== f
                  ? { borderColor: "var(--border)", color: "var(--text-muted)" }
                  : {}
              }
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const showImage = project.image && !failedImages[project.id];

            return (
              <motion.a
                href={project.link}
                key={project.id}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="project-card group relative rounded-3xl border overflow-hidden flex flex-col"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                {/* Preview area */}
                <div
                  className={`h-48 relative flex items-end p-6 overflow-hidden ${
                    showImage ? "" : `bg-gradient-to-br ${project.bg}`
                  }`}
                  style={{ background: showImage ? undefined : "var(--bg-secondary)" }}
                >
                  {showImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={`${project.title} homepage preview`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                      }
                    />
                  )}

                  {showImage && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05) 60%)",
                      }}
                    />
                  )}

                  {!showImage && (
                    <>
                      <div
                        className="absolute top-6 right-6 w-16 h-16 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ background: project.color }}
                      />
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          background: `radial-gradient(circle at 80% 20%, ${project.color}, transparent 60%)`,
                        }}
                      />
                    </>
                  )}

                  <span
                    className="absolute top-6 left-6 text-xs font-mono font-bold px-3 py-1 rounded-full border z-10"
                    style={{
                      borderColor: showImage ? "rgba(255,255,255,0.3)" : "var(--border)",
                      color: showImage ? "#fff" : "var(--text-muted)",
                      background: showImage ? "rgba(0,0,0,0.35)" : "var(--card)",
                    }}
                  >
                    {project.year}
                  </span>

                  <span
                    className="relative z-10 text-xs uppercase tracking-widest font-semibold"
                    style={{ color: showImage ? "#fff" : project.color }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="font-display text-xl font-bold group-hover:text-accent transition-colors duration-200"
                      style={{ color: "var(--text)" }}
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 mt-1"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                          background: "var(--bg-secondary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
            {t("work.cta_text")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#0A0A0F] font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            {t("work.cta_btn")}
            <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}