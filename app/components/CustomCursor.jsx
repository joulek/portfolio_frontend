"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const links = document.querySelectorAll("a, button, [data-hover]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  useEffect(() => {
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      setRing((prev) => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  return (
    <>
      {/* This component relies on .cursor-dot / .cursor-ring being defined in
          your global CSS (position: fixed, size, border-radius, pointer-events: none,
          transition on transform/opacity, z-index above your content). Add them there
          if they aren't already — they're intentionally left out here since they're
          shared, static styling rather than component logic. */}
      <div
        className="cursor-dot"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          transform: clicking ? "scale(0.5)" : hovering ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: ring.x - 18,
          top: ring.y - 18,
          transform: hovering ? "scale(1.6)" : clicking ? "scale(0.8)" : "scale(1)",
          opacity: hovering ? 0.6 : 1,
        }}
      />
    </>
  );
}