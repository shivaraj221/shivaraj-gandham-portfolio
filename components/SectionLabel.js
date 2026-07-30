export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
      <span className="font-mono text-reason text-xs md:text-sm shrink-0">{index}</span>
      <span className="h-px flex-1 bg-line" />
      <h2 className="font-display text-xl md:text-3xl font-semibold text-ink tracking-tight shrink-0">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
