import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionLabel from "./SectionLabel";
import { liveProjects } from "@/data/projects";

export default function LiveProjects() {
  return (
    <section className="relative py-16 md:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionLabel index="05" title="Live deployments" />
        <p className="text-muted max-w-2xl -mt-6 mb-12">
          Shipped products, running right now. Click through and try them.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {liveProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative border border-line rounded-2xl p-6 bg-surface/40 card-glow flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-signal/5 blur-2xl group-hover:bg-signal/15 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-reason">
                    {p.kind}
                  </span>
                  <FiArrowUpRight className="text-muted group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink group-hover:text-signal transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-muted">{p.tag}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
              <p className="relative mt-5 text-xs font-mono text-signal/80 truncate">
                {p.url.replace("https://", "")}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
