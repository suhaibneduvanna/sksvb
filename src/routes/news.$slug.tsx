import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar } from "lucide-react";
import { getNewsBySlug, news } from "@/data/news";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = getNewsBySlug(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
        { title: `${loaderData.item.title} — Islamic Educational Board` },
        { name: "description", content: loaderData.item.excerpt },
        { property: "og:title", content: loaderData.item.title },
        { property: "og:description", content: loaderData.item.excerpt },
        { property: "og:image", content: loaderData.item.image },
      ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-4xl text-primary">Story not found</h1>
      <Link to="/news" className="mt-6 inline-flex text-accent font-semibold">Back to news</Link>
    </div>
  ),
  component: NewsArticle,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function NewsArticle() {
  const { item } = Route.useLoaderData();
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <article className="container-x pt-26 md:pt-34 pb-10 max-w-4xl">
        <Link to="/news" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> All news
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-accent font-semibold">{item.category}</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="size-3" />{formatDate(item.date)}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-6xl text-primary text-balance leading-[1.05]">
          {item.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">{item.excerpt}</p>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-elevated aspect-[16/9]">
          <img src={item.image} alt={item.title} className="size-full object-cover" />
        </div>

        <div className="prose prose-lg mt-10 max-w-none">
          {item.body.map((p: string, i: number) => (
            <p key={i} className="text-foreground/85 leading-relaxed text-lg mb-5">
              {p}
            </p>
          ))}
        </div>
      </article>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl text-primary">Continue reading</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {related.map((n) => (
              <Link
                key={n.slug}
                to="/news/$slug"
                params={{ slug: n.slug }}
                className="group rounded-3xl overflow-hidden border border-border bg-background hover:shadow-elevated transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={n.image} alt={n.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-widest text-accent font-semibold">{n.category}</div>
                  <h3 className="mt-2 font-display text-lg text-primary leading-snug">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
