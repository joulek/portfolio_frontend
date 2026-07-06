"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Heart } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

function TeamCard({ member, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const gradients = [
    "from-[#C9F538] to-[#8B5CF6]",
    "from-[#8B5CF6] to-[#C9F538]",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative rounded-3xl p-8 border overflow-hidden group"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition`} />

      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}>
        <Code2 size={22} className="text-[#0A0A0F]" />
      </div>

      <h3 className="font-display text-2xl font-bold" style={{ color: "var(--text)" }}>
        {member.name}
      </h3>

      <p className="text-sm font-medium mb-4 text-accent">
        {member.role}
      </p>

      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
        {member.bio}
      </p>

      <div className="flex flex-wrap gap-2">
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs border"
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
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const teamMembers = t("about.team");

  const values = [
    {
      icon: Lightbulb,
      title: t("about.values.creative.title"),
      desc: t("about.values.creative.desc"),
    },
    {
      icon: Code2,
      title: t("about.values.craft.title"),
      desc: t("about.values.craft.desc"),
    },
    {
      icon: Heart,
      title: t("about.values.care.title"),
      desc: t("about.values.care.desc"),
    },
  ];

  return (
    <section id="about" className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            {t("about.badge")}
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold">
              {t("about.title1")}
              <br />
              <span className="italic">{t("about.title2")}</span>
            </h2>

            <p className="max-w-md text-base leading-relaxed lg:text-right" style={{ color: "var(--text-muted)" }}>
              {t("about.subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border"
                style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
              >
                <Icon size={20} className="text-accent mb-4" />
                <h4 className="font-semibold mb-2" style={{ color: "var(--text)" }}>
                  {val.title}
                </h4>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}