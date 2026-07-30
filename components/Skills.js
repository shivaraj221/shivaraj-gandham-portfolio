import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const groups = [
  {
    title: "AI & Generative AI",
    accent: "text-signal",
    items: ["LLMs", "Agentic AI", "RAG", "Prompt Engineering", "LangGraph", "LangChain", "CrewAI", "Semantic Search", "Embeddings", "Vector Search"],
  },
  {
    title: "Machine Learning",
    accent: "text-reason",
    items: ["Scikit-learn", "TensorFlow", "Feature Engineering", "NLP", "Hugging Face Transformers", "Model Evaluation"],
  },
  {
    title: "Backend & APIs",
    accent: "text-signal",
    items: ["FastAPI", "Django REST Framework", "Flask", "REST APIs", "Authentication & RBAC"],
  },
  {
    title: "Data & Vector Stores",
    accent: "text-reason",
    items: ["PostgreSQL", "SQLite", "Qdrant", "FAISS", "Pinecone", "Weaviate", "ChromaDB"],
  },
  {
    title: "Cloud & DevOps",
    accent: "text-signal",
    items: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Data Processing",
    accent: "text-reason",
    items: ["Pandas", "NumPy", "ETL Pipelines", "OCR", "OpenCV"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionLabel index="02" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border border-line rounded-2xl p-6 bg-surface/40 card-glow"
            >
              <h3 className={`font-mono text-sm uppercase tracking-wide ${g.accent} mb-4`}>
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs font-mono text-ink/90 bg-surface2 border border-line rounded-full px-3 py-1"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
