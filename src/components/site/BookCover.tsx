import type { Publication } from "@/data/publications";

type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, string> = {
  sm: "aspect-[3/4] text-[10px]",
  md: "aspect-[3/4] text-xs",
  lg: "aspect-[3/4] text-sm",
};

export function BookCover({ pub, size = "md" }: { pub: Publication; size?: Size }) {
  return (
    <div
      className={`relative ${sizeMap[size]} w-full rounded-md overflow-hidden shadow-elevated bg-secondary/20 flex items-center justify-center`}
    >
      {pub.image ? (
        <img src={pub.image} alt={pub.title} className="size-full object-cover" loading="lazy" />
      ) : (
        <span className="text-muted-foreground opacity-50">No Cover</span>
      )}
    </div>
  );
}
