import { palettes, type Publication } from "@/data/publications";
import logo from "@/assets/ieb-logo.png";

type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, string> = {
  sm: "aspect-[3/4] text-[10px]",
  md: "aspect-[3/4] text-xs",
  lg: "aspect-[3/4] text-sm",
};

export function BookCover({ pub, size = "md" }: { pub: Publication; size?: Size }) {
  const p = palettes[pub.palette % palettes.length];
  return (
    <div
      className={`relative ${sizeMap[size]} w-full rounded-md overflow-hidden shadow-elevated`}
      style={{ background: `linear-gradient(140deg, ${p.from}, ${p.to})` }}
    >
      {/* Spine */}
      <div className="absolute inset-y-0 left-0 w-2 bg-black/25" />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, white 0, transparent 40%), radial-gradient(circle at 80% 90%, white 0, transparent 35%)",
        }}
      />
      <div className="relative h-full flex flex-col justify-between p-4 text-white">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-6 w-6 object-contain opacity-90" />
          <span className="text-[9px] uppercase tracking-[0.2em] opacity-80">IEB</span>
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-[0.25em] opacity-80">{pub.subject}</div>
          <div className="font-display font-semibold leading-tight mt-1">{pub.title}</div>
          <div className="mt-3 flex items-center justify-between text-[10px] opacity-85">
            <span>Class {pub.classLevel}</span>
            <span>{pub.syllabus}</span>
          </div>
          <div className="text-[10px] mt-1 opacity-75 font-arabic">{pub.language}</div>
        </div>
      </div>
    </div>
  );
}
