import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { flagshipProjects } from "@/data/projects";

export default function Flagship() {
  return (
    <section id="work" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionLabel index="04" title="Flagship builds" />
        <p className="text-muted max-w-2xl -mt-6 mb-12">
          Enterprise-grade AI platforms built in production — the systems
          behind the resume.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {flagshipProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-line rounded-2xl p-7 bg-surface/40 card-glow flex flex-col"
            >
              <div
                className={`w-10 h-10 rounded-full mb-6 flex items-center justify-center font-mono text-xs ${
                  p.accent === "signal" ? "bg-signal/10 text-signal" : "bg-reason/10 text-reason"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink">{p.title}</h3>
              <p className={`mt-1 text-sm font-mono ${p.accent === "signal" ? "text-signal" : "text-reason"}`}>
                {p.subtitle}
              </p>
              <p className="mt-4 text-sm text-muted leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono text-ink/80 bg-surface2 border border-line rounded-full px-2.5 py-1"
                  >
                    {s}
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
