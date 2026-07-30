import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const roles = [
  {
    period: "Jun 2024 — Present",
    title: "AI/ML Engineer",
    org: "ForgeByte",
    points: [
      "Designed enterprise AI applications using Agentic AI, LLMs, and RAG architectures",
      "Built scalable systems for semantic retrieval, intelligent reasoning, and automated decision-making",
      "Developed production-ready FastAPI backends integrating AI models into enterprise workflows",
      "Implemented multi-LLM routing across OpenAI, Gemini, and Groq to optimize cost, latency, and quality",
      "Built hybrid semantic retrieval using embeddings, reranking, and vector databases",
    ],
  },
  {
    period: "Dec 2023 — May 2024",
    title: "Associate Engineer Trainee (Intern)",
    org: "TestPerform Technologies Pvt Ltd",
    points: [
      "Developed and maintained backend REST APIs using Python for enterprise applications",
      "Supported integration of Machine Learning and NLP models into business applications",
      "Worked on semantic search, document retrieval, and AI-driven data processing",
      "Gained hands-on experience with FastAPI, SQL, Git, and software testing",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionLabel index="03" title="Experience" />

        <div className="relative border-l border-line ml-2 md:ml-6 space-y-12 md:space-y-16">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-signal shadow-[0_0_16px_2px_rgba(110,231,249,0.6)]" />
              <p className="font-mono text-xs text-muted mb-2">{r.period}</p>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                {r.title} <span className="text-muted font-normal">— {r.org}</span>
              </h3>
              <ul className="mt-4 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="text-muted text-sm md:text-base leading-relaxed flex gap-3">
                    <span className="text-reason mt-1.5 shrink-0">▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
