import Link from "next/link";
import { RESUME_LINK, SOCIAL_LINKS } from "@/lib/links";

export const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-12 pb-6 flex flex-col sm:flex-row justify-between items-center text-xs tracking-wide text-ink-muted gap-3">
      <div className="flex items-center gap-2">
        <span className="font-bold text-ink tracking-tighter">SL</span>
        <span className="text-ink/30">/</span>
        <span className="text-[11px]">portfolio 2026</span>
      </div>
      <nav
        aria-label="Resume and social links"
        className="flex items-center gap-5 text-[9px]"
      >
        <Link
          href={RESUME_LINK.href}
          download={RESUME_LINK.download}
          className="text-sm text-ink-muted hover:text-ink hover:no-underline hover:opacity-100 transition-colors"
        >
          {RESUME_LINK.label} ↓
        </Link>
        {SOCIAL_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-ink hover:no-underline hover:opacity-100 transition-colors"
          >
            {label} ↗
          </Link>
        ))}
      </nav>
    </footer>
  );
};
