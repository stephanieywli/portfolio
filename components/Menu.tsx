export type View = "home" | "projects" | "more" | "experience";

export const PAGES: View[] = ["home", "experience", "projects", "more"];

type MenuProps = {
  selected: View;
  onSelect: (page: View) => void;
};

export const Menu = ({ selected, onSelect }: MenuProps) => (
  <div className="hidden md:block group relative w-fit mb-12 md:-translate-y-8">
    <div className="border absolute w-full h-full left-1.5 top-1.5 -z-10 border-ink bg-off-white opacity-40 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
    <div className="flex flex-col gap-1 items-center border p-4 relative bg-off-white transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
      ⤵
      {PAGES.map((page) => {
        const isSelected = page === selected;
        return (
          <button
            key={page}
            onClick={() => onSelect(page)}
            className={`text-base cursor-pointer min-w-26 transition-transform duration-200 ease-out hover:translate-x-[3px] ${
              isSelected
                ? "font-semibold"
                : "text-ink/70 hover:text-ink hover:underline underline-offset-4 decoration-ink/40"
            }`}
          >
            {isSelected ? (
              <span className="border-b border-dotted border-ink">{page}</span>
            ) : (
              page
            )}
          </button>
        );
      })}
      ⤴
    </div>
  </div>
);
