import { createFileRoute } from "@tanstack/react-router";
import books from "@/assets/books.jpg";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Islamic Educational Board" },
      { name: "description", content: "Over 140 textbooks published in Arabic, Malayalam, Kannada, Tamil, Urdu and English for madrasas across India." },
      { property: "og:title", content: "Publications — Islamic Educational Board" },
      { property: "og:description", content: "Textbooks in six languages serving more than ten thousand affiliated madrasas." },
      { property: "og:image", content: books },
    ],
  }),
  component: PublicationsPage,
});

const languages = [
  { name: "Arabic", native: "العربية", count: "Foundational" },
  { name: "Malayalam", native: "മലയാളം", count: "Primary" },
  { name: "Kannada", native: "ಕನ್ನಡ", count: "Regional" },
  { name: "Tamil", native: "தமிழ்", count: "Regional" },
  { name: "Urdu", native: "اردو", count: "Liturgical" },
  { name: "English", native: "English", count: "Global" },
];

function PublicationsPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Publications</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance">
            140 textbooks.<br />
            <span className="italic font-light">Six languages.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We have published about 140 textbooks for different classes in
            madrasa, written in Arabic, Malayalam, Kannada, Tamil, Urdu and
            English — making moral education accessible across India.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-elevated aspect-[5/4]">
          <img src={books} alt="Stack of Islamic Educational Board textbooks" className="size-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {languages.map((l) => (
            <div
              key={l.name}
              className="group relative rounded-3xl border border-border bg-background p-8 hover:border-accent/40 hover:shadow-elevated transition-all overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-accent-gradient opacity-0 group-hover:opacity-15 blur-2xl transition" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{l.count}</div>
              <div className="mt-3 font-display text-3xl text-primary">{l.name}</div>
              <div className="mt-2 font-arabic text-2xl text-accent">{l.native}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">
            Content built around <span className="italic font-light">harmony.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The curriculum and syllabus include lessons in moral values,
            environment studies, secular vision and mission, the elimination of
            communalism and terrorism. Every page calls for religious harmony
            and patriotism.
          </p>
        </div>
      </section>
    </>
  );
}
