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
      className="hero-section"
      style={{
        background: "#0A0A0F",
        backgroundImage:
          "linear-gradient(to bottom, transparent, #0A0A0F 90%), linear-gradient(rgba(110,231,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,249,0.04) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 44px 44px, 44px 44px",
      }}
    >
      {/* Text block — always on top/left, never overlapped */}
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
              marginBottom: "18px",
            }}
          >
            AI/ML Engineer
          </motion.p>

          <motion.h1
            variants={item}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.6rem, 11vw, 7.2rem)",
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
              marginTop: "20px",
              maxWidth: "38ch",
              color: "#8A87A3",
              fontSize: "clamp(0.88rem, 3.5vw, 1rem)",
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            I build autonomous AI systems that solve hard problems — from{" "}
            <span style={{ color: "#EDEDF2" }}>Agentic workflows</span> and{" "}
            <span style={{ color: "#EDEDF2" }}>RAG</span> to production LLMs.
          </motion.p>

          <motion.div
            variants={item}
            className="hero-cta-row"
          >
            <a
              href="#work"
              className="hero-btn-primary"
              onMouseEnter={(e) => (e.currentTarget.style.background = "#EDEDF2")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#6EE7F9")}
            >
              View the work <FiArrowDownRight />
            </a>
            <a
              href="mailto:shivarajgandham6@gmail.com"
              className="hero-btn-secondary"
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
              className="hero-btn-ghost"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6EE7F9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A87A3")}
            >
              <FiGithub /> @shivaraj221
            </a>
          </motion.div>

          {/* Scroll hint — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="hero-scroll-hint"
          >
            <div className="hero-scroll-line" />
            SCROLL
          </motion.div>
        </motion.div>
      </div>

      {/* 3D graphic — in flow on mobile (below text), absolute on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="hero-graphic"
      >
        <KnowledgeGraph />
      </motion.div>
    </section>
  );
}
