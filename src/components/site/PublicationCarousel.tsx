import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { publications } from "@/data/publications";
import { BookCover } from "./BookCover";

const featured = publications.filter((p) => ["10", "8", "+2", "5", "+1", "7"].includes(p.classLevel)).slice(0, 8);

export function PublicationCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {featured.map((p) => (
            <div key={p.id} className="flex-[0_0_100%] min-w-0 px-2">
              <div className="mx-auto max-w-[260px]">
                <BookCover pub={p} size="lg" />
                <div className="text-center mt-5">
                  <div className="text-[11px] uppercase tracking-widest text-accent font-semibold">{p.subject}</div>
                  <div className="font-display text-lg text-primary mt-1">{p.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {p.syllabus === "Common" ? "Common" : `${p.syllabus} school`} • {p.language}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous"
          onClick={() => embla?.scrollPrev()}
          className="size-10 rounded-full border border-border bg-background hover:border-accent/50 hover:text-accent flex items-center justify-center transition"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-1.5 bg-border"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={() => embla?.scrollNext()}
          className="size-10 rounded-full border border-border bg-background hover:border-accent/50 hover:text-accent flex items-center justify-center transition"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
