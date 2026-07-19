import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiStar } from "react-icons/fi";
import SectionLabel from "./SectionLabel";
import { githubProjects, categories } from "@/data/projects";

export default function GithubGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? githubProjects : githubProjects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionLabel index="06" title="GitHub repositories" />
        <p className="text-muted max-w-2xl -mt-6 mb-8">
          {githubProjects.length}+ public repos spanning agentic AI, computer
          vision, automation, and full-stack builds.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
                active === c
                  ? "bg-signal text-void border-signal"
                  : "border-line text-muted hover:border-signal hover:text-signal"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.a
                key={p.repo}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                href={`https://github.com/${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-line rounded-xl p-5 bg-surface/30 card-glow flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <FiGithub className="text-muted group-hover:text-signal transition-colors shrink-0 mt-0.5" />
                  <span className="font-mono text-[10px] uppercase tracking-wide text-reason text-right">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-ink group-hover:text-signal transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed flex-1">{p.desc}</p>
                <p className="mt-4 text-[11px] font-mono text-muted/70 flex items-center gap-1">
                  <FiStar className="text-[10px]" /> {p.repo}
                </p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
