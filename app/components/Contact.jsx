"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  CheckCircle,
  Mail,
  MessageSquare,
  User,
  Briefcase,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/contact";

export default function Contact() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const message =
          data.errors?.[0]?.message ||
          data.message ||
          "Error";
        throw new Error(message);
      }

      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-accent bg-transparent";

  const services = [
    { value: "", label: t("contact.services.placeholder") },
    { value: "brand", label: t("contact.services.list.brand") },
    { value: "web", label: t("contact.services.list.web") },
    { value: "ecommerce", label: t("contact.services.list.ecommerce") },
    { value: "mobile", label: t("contact.services.list.mobile") },
    { value: "uiux", label: t("contact.services.list.uiux") },
    { value: "other", label: t("contact.services.list.other") },
  ];

  const steps = [
    { step: "01", title: t("contact.steps.s1.title"), desc: t("contact.steps.s1.desc") },
    { step: "02", title: t("contact.steps.s2.title"), desc: t("contact.steps.s2.desc") },
    { step: "03", title: t("contact.steps.s3.title"), desc: t("contact.steps.s3.desc") },
    { step: "04", title: t("contact.steps.s4.title"), desc: t("contact.steps.s4.desc") },
  ];

  return (
    <section
      id="contact"
      className="py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] font-medium text-accent mb-4">
            {t("contact.badge")}
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight">
              {t("contact.title1")}
              <br />
              <span className="italic">{t("contact.title2")}</span>
            </h2>

            <p className="max-w-sm text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t("contact.subtitle")}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-8">

            <div
              className="p-6 rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <Mail size={16} className="text-[#0A0A0F]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
                    {t("contact.emailTitle")}
                  </p>

                  <a
                    href="mailto:ynitylearn@gmail.com"
                    style={{ color: "var(--text)" }}
                    className="text-sm font-medium"
                  >
                    ynitylearn@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest font-semibold mb-5" style={{ color: "var(--text-muted)" }}>
                {t("contact.howItWorks")}
              </p>

              <div className="space-y-5">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="text-xs font-mono font-bold w-6" style={{ color: "var(--accent)" }}>
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                        {item.title}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-3xl border text-center"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />

                <h3 className="text-2xl font-bold mb-2">
                  {t("contact.form.successTitle")}
                </h3>

                <p style={{ color: "var(--text-muted)" }}>
                  {t("contact.form.successDesc")}
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2 rounded-full border"
                >
                  {t("contact.form.another")}
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl border space-y-5"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                {status === "error" && (
                  <div className="flex gap-2 p-3 rounded-xl border text-sm text-red-500">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                {/* NAME + EMAIL */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.name")}
                    className={inputClass}
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.email")}
                    className={inputClass}
                  />
                </div>

                {/* SERVICE */}
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {services.map((s) => (
                    <option key={s.label} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.message")}
                  rows={4}
                  className={inputClass}
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-accent font-semibold flex items-center justify-center gap-2"
                >
                  {status === "sending" ? t("contact.form.sending") : t("contact.form.button")}
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}