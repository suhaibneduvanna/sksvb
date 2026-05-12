import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Islamic Educational Board" },
      { name: "description", content: "Photographs from events, classrooms and leadership moments at the Islamic Educational Board." },
      { property: "og:title", content: "Gallery — Islamic Educational Board" },
      { property: "og:description", content: "A visual record of our work across India." },
      { property: "og:image", content: gallery[0].src },
    ],
  }),
  component: GalleryPage,
});

const filters = ["All", "Events", "Classrooms", "Leadership", "Publications"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Gallery</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Our work, <span className="italic font-light">in pictures.</span>
        </h1>
      </section>

      <section className="container-x pb-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border text-foreground/70 hover:border-accent/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {items.map((g, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-3xl border border-border hover:shadow-elevated transition relative"
            >
              <img src={g.src} alt={g.caption} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <span className="text-primary-foreground text-sm font-medium">{g.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur flex items-center justify-center p-6"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X className="size-8" />
          </button>
          <figure className="max-w-5xl max-h-[85vh]">
            <img src={items[open].src} alt={items[open].caption} className="max-h-[80vh] w-auto rounded-2xl" />
            <figcaption className="text-center text-white/85 mt-4">{items[open].caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
