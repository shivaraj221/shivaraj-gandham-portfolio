import { motion } from "framer-motion";
import { FiMail, FiGithub, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-[140px] px-5 md:px-[5vw] border-t border-[rgba(237,237,242,0.09)]"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          display: "block",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.75rem",
          color: "#6EE7F9",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        06 — Get in touch
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.9rem, 7vw, 5.5rem)",
          letterSpacing: "-0.02em",
          maxWidth: "16ch",
          lineHeight: 1.06,
          color: "#EDEDF2",
          marginBottom: "40px",
        }}
      >
        Have an AI system worth building?{" "}
        <a
          href="mailto:shivarajgandham6@gmail.com"
          style={{
            color: "#EDEDF2",
            textDecoration: "none",
            backgroundImage: "linear-gradient(#6EE7F9, #6EE7F9)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 100%",
            backgroundSize: "0% 2px",
            transition: "background-size 0.4s",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 2px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 2px")}
        >
          Let&apos;s make it real.
        </a>
      </motion.h2>

      {/* Contact cards — 2-col grid on mobile, row on sm+ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-6 sm:gap-12"
      >
        {/* Email */}
        <div>
          <span style={{
            display: "block",
            fontFamily: "'JetBrains Mono', monospace",
            color: "#6EE7F9",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "10px",
          }}>Email</span>
          <a
            href="mailto:shivarajgandham6@gmail.com"
            style={{
              color: "#8A87A3",
              textDecoration: "none",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.25s",
              wordBreak: "break-all",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#EDEDF2")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8A87A3")}
          >
            <FiMail style={{ flexShrink: 0 }} /> shivarajgandham6@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div>
          <span style={{
            display: "block",
            fontFamily: "'JetBrains Mono', monospace",
            color: "#6EE7F9",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "10px",
          }}>Phone</span>
          <a
            href="tel:+918309170903"
            style={{
              color: "#8A87A3",
              textDecoration: "none",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.25s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#EDEDF2")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8A87A3")}
          >
            <FiPhone style={{ flexShrink: 0 }} /> +91 83091 70903
          </a>
        </div>

        {/* GitHub */}
        <div>
          <span style={{
            display: "block",
            fontFamily: "'JetBrains Mono', monospace",
            color: "#6EE7F9",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "10px",
          }}>GitHub</span>
          <a
            href="https://github.com/shivaraj221"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#8A87A3",
              textDecoration: "none",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.25s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#EDEDF2")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8A87A3")}
          >
            <FiGithub style={{ flexShrink: 0 }} /> @shivaraj221
          </a>
        </div>

        {/* Based in */}
        <div>
          <span style={{
            display: "block",
            fontFamily: "'JetBrains Mono', monospace",
            color: "#6EE7F9",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "10px",
          }}>Based in</span>
          <p style={{ color: "#8A87A3", fontSize: "0.85rem", margin: 0 }}>
            Hyderabad, India
          </p>
        </div>
      </motion.div>
    </section>
  );
}
