import { createFileRoute } from "@tanstack/react-router";
import { fullBoard } from "@/data/board";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Board of Directors — Islamic Educational Board" },
      { name: "description", content: "Meet the directors and regional leaders of the Islamic Educational Board." },
      { property: "og:title", content: "Board of Directors — Islamic Educational Board" },
      { property: "og:description", content: "The scholars and leaders shaping moral education across India." },
      { property: "og:image", content: fullBoard[0].image },
    ],
  }),
  component: BoardPage,
});

function BoardPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Leadership</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          The board behind <span className="italic font-light">a million students.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Scholars, educators and administrators committed to a single mission: a patriotic, cultured generation living in religious harmony.
        </p>
      </section>

      <section className="container-x pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullBoard.map((m) => (
          <article key={m.name} className="group rounded-3xl overflow-hidden border border-border bg-background hover:shadow-elevated transition">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={m.image} alt={m.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl text-primary">{m.name}</h2>
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mt-1">{m.role}</div>
              {m.region && <div className="text-xs text-muted-foreground mt-1">{m.region}</div>}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
