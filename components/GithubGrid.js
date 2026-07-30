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
    <section className="relative py-16 md:py-28 border-t border-line overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionLabel index="06" title="GitHub repositories" />
        <p className="text-muted max-w-2xl -mt-4 mb-8 text-sm md:text-base md:-mt-6">
          {githubProjects.length}+ public repos spanning agentic AI, computer
          vision, automation, and full-stack builds.
        </p>

        {/* Filter pills — scrollable on mobile so they don't wrap messily */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none" style={{ WebkitOverflowScrolling: "touch" }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap flex-shrink-0 ${
                active === c
                  ? "bg-signal text-void border-signal"
                  : "border-line text-muted hover:border-signal hover:text-signal"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid — single col on mobile, 2 col sm, 3 col lg */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
                className="group border border-line rounded-xl p-4 md:p-5 bg-surface/30 card-glow flex flex-col overflow-hidden min-w-0"
              >
                {/* Top row: icon + category — truncate long category labels */}
                <div className="flex items-start justify-between gap-2 min-w-0">
                  <FiGithub className="text-muted group-hover:text-signal transition-colors shrink-0 mt-0.5" />
                  <span className="font-mono text-[10px] uppercase tracking-wide text-reason text-right truncate ml-2 max-w-[60%]">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-ink group-hover:text-signal transition-colors text-sm md:text-base">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed flex-1">{p.desc}</p>
                <p className="mt-4 text-[11px] font-mono text-muted/70 flex items-center gap-1 truncate">
                  <FiStar className="text-[10px] shrink-0" /> {p.repo}
                </p>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
