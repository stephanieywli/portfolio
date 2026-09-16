type MetaTileProps = {
  label: string;
  value: React.ReactNode;
  onClick?: () => void;
};

export const MetaTile = ({ label, value, onClick }: MetaTileProps) => {
  const content = (
    <>
      <span className="text-[10px] text-ink-muted uppercase tracking-wider">
        {label}
      </span>
      <span className="text-xs font-bold">{value}</span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="bg-ink/5 hover:bg-ink/10 transition-colors p-2 flex flex-col gap-1 rounded-md items-start text-left cursor-pointer"
      >
        {content}
      </button>
    );
  }

  return (
    <div className="bg-ink/5 p-2 flex flex-col gap-1 rounded-md">
      {content}
    </div>
  );
};
