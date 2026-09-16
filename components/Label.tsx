type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

export const Label = ({ children, className = "" }: LabelProps) => (
  <p
    className={`text-xs bg-ink w-fit text-off-white px-1 font-semibold ${className}`}
  >
    {children}
  </p>
);
