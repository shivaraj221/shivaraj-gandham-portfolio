export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Shivaraj Gandham. Built with Next.js.
        </p>
        <p className="font-mono text-xs text-muted">
          designed &amp; engineered end-to-end
        </p>
      </div>
    </footer>
  );
}
