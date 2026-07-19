import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiMail } from "react-icons/fi";

const KnowledgeGraph = dynamic(() => import("./KnowledgeGraph"), { ssr: false });

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "#0A0A0F",
        backgroundImage:
          "linear-gradient(to bottom, transparent, #0A0A0F 90%), linear-gradient(rgba(110,231,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,249,0.04) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 44px 44px, 44px 44px",
      }}
    >
      {/* 3D graphic — full-height, right half of screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="hero-graphic"
      >
        <KnowledgeGraph />
      </motion.div>

      {/* Left text content — sits on top, takes left half */}
      <div className="hero-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero-text-wrapper"
        >
          <motion.p
            variants={item}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#6EE7F9",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            AI/ML Engineer
          </motion.p>

          <motion.h1
            variants={item}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.8rem, 7vw, 7.2rem)",
              lineHeight: 0.94,
              letterSpacing: "-0.02em",
              color: "#EDEDF2",
            }}
          >
            <span style={{ display: "block" }}>Shivaraj</span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(90deg, #6EE7F9, #A78BFA)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gandham
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            style={{
              marginTop: "28px",
              maxWidth: "40ch",
              color: "#8A87A3",
              fontSize: "1rem",
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            I build autonomous AI systems that solve hard problems. Experienced across the full spectrum of modern AI — from{" "}
            <span style={{ color: "#EDEDF2" }}>Agentic workflows</span> and{" "}
            <span style={{ color: "#EDEDF2" }}>RAG</span> to production LLMs.
          </motion.p>

          <motion.div
            variants={item}
            style={{
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#6EE7F9",
                color: "#0A0A0F",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.82rem",
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#EDEDF2")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE7F9")}
            >
              View the work <FiArrowDownRight />
            </a>
            <a
              href="mailto:shivarajgandham6@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(237,237,242,0.15)",
                color: "#EDEDF2",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.82rem",
                padding: "12px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#6EE7F9";
                e.currentTarget.style.color = "#6EE7F9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(237,237,242,0.15)";
                e.currentTarget.style.color = "#EDEDF2";
              }}
            >
              <FiMail /> say hello
            </a>
            <a
              href="https://github.com/shivaraj221"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#8A87A3",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.82rem",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6EE7F9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A87A3")}
            >
              <FiGithub /> @shivaraj221
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            style={{
              marginTop: "60px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              color: "#8A87A3",
            }}
          >
            <div
              style={{
                width: "1px",
                height: "36px",
                background: "linear-gradient(#8A87A3, transparent)",
                animation: "pulse-line 2s infinite",
              }}
            />
            SCROLL
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
