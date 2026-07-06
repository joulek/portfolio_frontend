"use client";
import { Globe, ArrowUp, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

// LinkedIn icon custom
function LinkedinIcon({ size = 16, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const socials = [
    { icon: Globe, label: t("footer.social.portfolio"), href: "#" },
    { icon: LinkedinIcon, label: "Yosr LinkedIn", href: "https://www.linkedin.com/in/yosr-linkedin/" },
    { icon: LinkedinIcon, label: "Nourhene LinkedIn", href: "https://www.linkedin.com/in/nourhene-abbes-/" },
  ];

  const links = [
    { label: t("footer.nav.about"), href: "#about" },
    { label: t("footer.nav.services"), href: "#services" },
    { label: t("footer.nav.work"), href: "#work" },
    { label: t("footer.nav.contact"), href: "#contact" },
  ];

  return (
    <footer
      className="pt-20 pb-8 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">

          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="font-display text-2xl font-bold" style={{ color: "var(--text)" }}>
                YNITY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>

            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              {t("footer.description")}
            </p>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-accent hover:text-accent transition"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex gap-16 flex-wrap">

            <div>
              <p className="text-xs uppercase mb-5" style={{ color: "var(--text-muted)" }}>
                {t("footer.navigation")}
              </p>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-accent transition"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase mb-5" style={{ color: "var(--text-muted)" }}>
                {t("footer.contact")}
              </p>

              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:ynitylearn@gmail.com"
                    className="text-sm flex items-center gap-2 hover:text-accent transition"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Mail size={14} />
                    ynitylearn@gmail.com
                  </a>
                </li>

                <li className="text-sm flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {t("footer.status")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {t("footer.copyright")}
          </p>

          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {t("footer.made")}
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-full border flex items-center justify-center hover:border-accent hover:text-accent transition"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}