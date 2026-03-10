type SectionBadgeProps = {
  label: string;
  className?: string;
  bg?: string;
  variant?: "default" | "dark";
};

export function SectionBadge({ label, className = "", bg, variant = "default" }: SectionBadgeProps) {
  const isDark = variant === "dark";
  const dotColor = isDark ? "bg-white/60" : "bg-(--green)";
  const textColor = isDark ? "text-white/60" : "text-(--green)";

  return (
    <div
      className={`inline-flex items-center gap-2 shadow rounded-full px-4 py-1.5 self-start ${className}`}
      style={bg ? { backgroundColor: bg } : undefined}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span className={`text-xs uppercase tracking-widest ${textColor}`}>{label}</span>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
    </div>
  );
}
