"use client";

const items = [
  "UI/UX Design",
  "Web Development",
  "Brand Identity",
  "Motion Design",
  "React & Next.js",
  "E-commerce",
  "Creative Direction",
  "Mobile Apps",
];

export default function Marquee() {
  const repeated = [...items, ...items];
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6 text-sm uppercase tracking-widest font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}
