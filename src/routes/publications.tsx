import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import books from "@/assets/books.jpg";
import { publications } from "@/data/publications";
import { BookCover } from "@/components/site/BookCover";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Islamic Educational Board" },
      { name: "description", content: "Browse our publications." },
      { property: "og:title", content: "Publications — Islamic Educational Board" },
      { property: "og:description", content: "Filter our complete catalogue by search." },
      { property: "og:image", content: books },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((p) => {
      if (q) {
        const hay = `${p.title} ${p.author}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query]);

  return (
    <>
      <section className="container-x pt-26 md:pt-34 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Publications</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          The complete <span className="italic font-light">textbook catalogue.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Search for any subject or author. Every textbook is published by the Islamic Educational Board for use across our affiliated madrasas.
        </p>
      </section>

      {/* FILTERS */}
      <section className="container-x pb-8">
        <div className="rounded-3xl border border-border bg-background p-5 md:p-6 shadow-soft space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full rounded-full border border-input bg-background pl-11 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          Showing <span className="text-primary font-semibold">{filtered.length}</span> of {publications.length} publications
        </div>
      </section>

      {/* GRID */}
      <section className="container-x pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">No publications match your filters.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="group">
                <BookCover pub={p} />
                <h3 className="mt-3 text-sm font-display text-primary leading-snug">{p.title}</h3>
                <div className="text-[11px] text-muted-foreground mt-1 truncate">
                  {p.author}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">
            Content built around <span className="italic font-light">harmony.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The curriculum and syllabus include lessons in moral values, environment studies, secular vision and mission, the elimination of communalism and terrorism. Every page calls for religious harmony and patriotism.
          </p>
        </div>
      </section>
    </>
  );
}
