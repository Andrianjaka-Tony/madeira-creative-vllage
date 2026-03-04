type SectionBadgeProps = {
  label: string;
  className?: string;
};

export function SectionBadge({ label, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 shadow rounded-full px-4 py-1.5 self-start ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-(--green)" />
      <span className="text-xs uppercase tracking-widest text-(--green)">{label}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-(--green)" />
    </div>
  );
}
