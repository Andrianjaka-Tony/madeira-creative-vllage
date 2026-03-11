"use client";

const FORM_URL = "https://forms.gle/RKq6z77pzecVbxxT9";

export function StickyBookBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#e5e5e5] px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-4">
      <div>
        <p className="text-[11px] text-[#888] uppercase tracking-widest">From</p>
        <p className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[20px] font-bold leading-none">
          2,550€
        </p>
      </div>
      <a
        href="#book"
        className="flex-1 bg-[#1a3328] text-white text-center py-3 rounded-full text-[15px] font-medium"
      >
        Reserve My Spot →
      </a>
    </div>
  );
}
