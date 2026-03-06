interface TaglineProps {
  title: string;
  bgColor?: string;
}

export default function Tagline({ title, bgColor = "#F6F7F1" }: TaglineProps) {
  return (
    <div
      className="mb-4 w-fit px-4 h-[40px] rounded-[40px] flex items-center justify-center gap-[10px]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-[6px] h-[6px] bg-[#272727] rounded-full" />
      <span className="text-[#272727] text-[18px] font-medium leading-none">{title}</span>
      <div className="w-[6px] h-[6px] bg-[#272727] rounded-full" />
    </div>
  );
}
