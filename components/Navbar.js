import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
          transition: "background 0.3s, backdrop-filter 0.3s",
          background: scrolled || open ? "rgba(10,10,15,0.95)" : "transparent",
          backdropFilter: scrolled || open ? "blur(12px)" : "none",
          borderBottom: open ? "1px solid rgba(237,237,242,0.06)" : "none",
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
            zIndex: 201,
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
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
              >
                <span style={{ color: "#6EE7F9" }}>0{i + 1}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
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
          className="show-on-mobile"
          style={{
            background: "none",
            border: "none",
            color: "#EDEDF2",
            cursor: "pointer",
            padding: "4px",
            zIndex: 201,
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-end",
          }}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon lines — all same color */}
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            background: "#EDEDF2",
            borderRadius: "2px",
            transition: "transform 0.3s, opacity 0.3s",
            transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block",
            width: "16px",
            height: "2px",
            background: "#EDEDF2",
            borderRadius: "2px",
            transition: "opacity 0.3s, width 0.3s",
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            background: "#EDEDF2",
            borderRadius: "2px",
            transition: "transform 0.3s",
            transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </motion.header>

      {/* Mobile full-screen menu — rendered outside header to cover full screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(10,10,15,0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 199,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "24px",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#EDEDF2",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(237,237,242,0.06)",
                }}
              >
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#6EE7F9",
                  letterSpacing: "0.06em",
                  minWidth: "28px",
                }}>
                  0{i + 1}
                </span>
                {l.label}
              </motion.a>
            ))}

            {/* Mobile CTA in menu */}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{
                marginTop: "24px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#6EE7F9",
                color: "#0A0A0F",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              let&apos;s talk →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .hide-on-mobile { display: none !important; }
          .show-on-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .show-on-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
