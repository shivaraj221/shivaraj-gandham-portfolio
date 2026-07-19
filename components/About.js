import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const stats = [
  { label: "Repositories shipped", value: "25+" },
  { label: "Live deployments", value: "5" },
  { label: "Years building AI systems", value: "1+" },
  { label: "LLM providers integrated", value: "4" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionLabel index="01" title="About" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <p className="text-xl md:text-2xl font-display leading-relaxed text-ink">
              I build systems that <span className="text-signal">retrieve</span>,{" "}
              <span className="text-reason">reason</span>, and{" "}
              <span className="text-signal">act</span> — turning raw enterprise
              data into AI that actually makes decisions.
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              As an AI/ML Engineer at ForgeByte, I specialize in Agentic AI,
              Generative AI, Large Language Models, and Retrieval-Augmented
              Generation. I design production-grade AI platforms — multi-agent
              workflows, hybrid semantic retrieval, multi-LLM routing, and
              secure enterprise APIs — using LangGraph, FastAPI, PostgreSQL,
              and vector databases like Qdrant and FAISS across AWS
              cloud-native architectures.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Outside of client work I ship a wide spread of side projects:
              computer vision tools, trading pipelines, generative media
              Spaces, and full-stack products — most of them public on GitHub,
              a few of them live in production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-2 grid grid-cols-2 gap-6"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-line rounded-2xl p-5 bg-surface/50"
              >
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-mono text-muted leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
