import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about",      label: "about" },
  { href: "#skills",     label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#work",       label: "work" },
  { href: "#contact",    label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 5vw",
        mixBlendMode: "difference",
        transition: "background 0.3s",
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Logo */}
      <a
        href="#top"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          letterSpacing: "0.02em",
          color: "#EDEDF2",
          textDecoration: "none",
        }}
      >
        SG<span style={{ color: "#6EE7F9" }}>.</span>
      </a>

      {/* Desktop nav links */}
      <ul
        style={{
          display: "flex",
          gap: "36px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="hide-on-mobile"
      >
        {links.map((l, i) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.04em",
                color: "#EDEDF2",
                textDecoration: "none",
                opacity: 0.7,
                transition: "opacity 0.25s",
                position: "relative",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
            >
              <span style={{ color: "#6EE7F9" }}>0{i + 1}</span> {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hide-on-mobile"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.78rem",
          letterSpacing: "0.04em",
          color: "#EDEDF2",
          textDecoration: "none",
          border: "1px solid rgba(237,237,242,0.2)",
          borderRadius: "999px",
          padding: "8px 20px",
          opacity: 0.8,
          transition: "opacity 0.25s, border-color 0.25s",
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.borderColor = "#6EE7F9"; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = "0.8"; e.currentTarget.style.borderColor = "rgba(237,237,242,0.2)"; }}
      >
        let&apos;s talk
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "#EDEDF2",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
        className="show-on-mobile"
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#0A0A0F",
            padding: "24px 5vw",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.9rem",
                color: "#8A87A3",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#6EE7F9" }}>0{i + 1}</span> {l.label}
            </a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          .show-on-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-on-mobile { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
