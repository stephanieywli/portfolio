type ColourTileProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const ColourTile = ({ label, value, onChange }: ColourTileProps) => (
  <label className="bg-ink/5 hover:bg-ink/10 transition-colors p-2 flex flex-col gap-1 rounded-md cursor-pointer">
    <span className="text-[0.6rem] text-ink-muted uppercase tracking-wider">
      {label}
    </span>
    <div className="flex items-center gap-1.5">
      <input
        type="color"
        value={value}
        onInput={(e) => onChange(e.currentTarget.value)}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="h-4 w-4 rounded-sm border border-ink/20 bg-transparent p-0 cursor-pointer"
      />
      <span className="text-xs font-bold uppercase">{value}</span>
    </div>
  </label>
);
