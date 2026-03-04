import { LucideIcon } from "lucide-react";

const variants = {
  hero: "bg-(--beige) text-(--green)",
  default: "bg-(--green) text-(--beige)",
};
type Variants = keyof typeof variants;

type Props = {
  text: string;
  icon: LucideIcon;
  variant?: Variants;
  className?: string;
};
export function Button({ text, icon, variant = "hero", className }: Props) {
  const Icon = icon;

  return (
    <button
      className={`py-3.5 px-6 flex items-center gap-2 tracking-tight font-semibold rounded-full cursor-pointer ${variants[variant]} ${className}`}
    >
      <span>{text}</span>
      <Icon className="h-5 w-5" />
    </button>
  );
}
