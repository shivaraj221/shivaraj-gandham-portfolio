export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-reason text-sm">{index}</span>
      <span className="h-px flex-1 bg-line" />
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
