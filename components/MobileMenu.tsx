import { PAGES, type View } from "@/components/Menu";

const MOBILE_LABELS: Record<View, string> = {
  home: "home",
  experience: "exp",
  projects: "work",
  more: "more",
};

type MobileMenuProps = {
  selected: View;
  onSelect: (page: View) => void;
};

export const MobileMenu = ({ selected, onSelect }: MobileMenuProps) => (
  <nav
    aria-label="Mobile navigation menu"
    className="md:hidden w-full pb-3 mb-6 border-b border-ink/10 flex flex-col gap-2.5"
  >
    <div className="flex items-center justify-start text-[10px] text-ink-muted tracking-wider uppercase">
      <span>directory ↴</span>
    </div>
    <div className="flex items-center justify-between text-xs font-mono tracking-tight">
      {PAGES.map((page, i) => {
        const isSelected = page === selected;
        return (
          <div key={page} className="flex items-center gap-2">
            {i > 0 && <span className="text-ink/30">/</span>}
            <button
              onClick={() => onSelect(page)}
              className={
                isSelected
                  ? "font-bold text-accent"
                  : "text-ink/60 hover:text-ink transition-colors hover:cursor-pointer"
              }
            >
              {isSelected ? `[${MOBILE_LABELS[page]}]` : MOBILE_LABELS[page]}
            </button>
          </div>
        );
      })}
    </div>
  </nav>
);
