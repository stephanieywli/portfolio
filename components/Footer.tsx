import Link from "next/link";
import { RESUME_LINK, SOCIAL_LINKS } from "@/lib/links";

export const Footer = () => {
  return (
    <footer className="mx-6 md:mx-12 4k:max-w-6xl 4k:!mx-auto mt-6 sm:mt-0 pb-6 pt-4 border-t border-ink/10 sm:border-t-0 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs tracking-wide text-ink-muted gap-3">
      <div className="flex items-center gap-2">
        <span className="font-bold text-ink tracking-tighter">SL</span>
        <span className="text-ink/30">/</span>
        <span className="text-[0.7rem]">portfolio 2026</span>
      </div>
      <nav
        aria-label="Resume and social links"
        className="grid grid-cols-2 gap-2 min-[410px]:flex min-[410px]:items-center min-[410px]:gap-5 text-[0.6rem]"
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
