import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { news } from "@/data/news";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News & Updates — Islamic Educational Board" },
      { name: "description", content: "Latest news, events and announcements from the Islamic Educational Board." },
      { property: "og:title", content: "News & Updates — Islamic Educational Board" },
      { property: "og:description", content: "Stay informed about programmes, publications and events." },
      { property: "og:image", content: news[0].image },
    ],
  }),
  component: NewsPage,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function NewsPage() {
  const [feature, ...rest] = news;
  return (
    <>
      <section className="container-x pt-26 md:pt-34 pb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">News & Updates</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Stories from across <span className="italic font-light">our movement.</span>
        </h1>
      </section>

      <section className="container-x pb-12">
        <Link
          to="/news/$slug"
          params={{ slug: feature.slug }}
          className="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-border bg-background hover:shadow-elevated transition-all"
        >
          <div className="aspect-[16/11] overflow-hidden">
            <img src={feature.image} alt={feature.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-accent font-semibold">{feature.category}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="size-3" />{formatDate(feature.date)}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-primary text-balance">{feature.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{feature.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
              Read story <ArrowRight className="size-4" />
            </div>
          </div>
        </Link>
      </section>

      <section className="container-x pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((n) => (
          <Link
            key={n.slug}
            to="/news/$slug"
            params={{ slug: n.slug }}
            className="group rounded-3xl overflow-hidden border border-border bg-background hover:shadow-elevated hover:border-accent/40 transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={n.image} alt={n.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                <span className="text-accent font-semibold">{n.category}</span>
                <span>•</span>
                <span>{formatDate(n.date)}</span>
              </div>
              <h3 className="mt-3 font-display text-xl text-primary leading-snug">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
