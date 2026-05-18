import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, GraduationCap, Globe2, HeartHandshake, Sparkles } from "lucide-react";
import hero from "@/assets/hero-classroom.jpg";
import books from "@/assets/books.jpg";
import pattern from "@/assets/pattern.jpg";
import logo from "@/assets/ieb-logo.png";
import aboutImg from "@/assets/about.jpg";
import { news } from "@/data/news";
import { directors } from "@/data/board";
import { PublicationCarousel } from "@/components/site/PublicationCarousel";
import { HeroSlider } from "@/components/site/HeroSlider";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Islamic Educational Board — Moral & Spiritual Education" },
      { name: "description", content: "Headed by Indian Grand Mufti Sheikh Aboobacker, the Islamic Educational Board oversees more than ten thousand madrasas educating a million students across India." },
      { property: "og:title", content: "Islamic Educational Board" },
      { property: "og:description", content: "A patriotic, cultured generation through religious harmony, moral education, and modern teaching." },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "10,000+", label: "Affiliated Madrasas" },
  { value: "5 Million+", label: "Students Educated" },
  { value: "50,000+", label: "Teachers Trained" },
  { value: "400+", label: "Textbooks Published" },
];

const pillars = [
  { icon: BookOpen, title: "Moral Curriculum", text: "Lessons in moral values, environmental care, secular vision, and religious harmony from grade -2 to +2." },
  { icon: Globe2, title: "Six Languages", text: "Textbooks in Arabic, Malayalam, Kannada, Tamil, Urdu and English serving learners across India." },
  { icon: HeartHandshake, title: "Communal Harmony", text: "A friendly atmosphere built on respect for all, irrespective of caste or religion." },
  { icon: GraduationCap, title: "Trained Teachers", text: "Educators trained in modern methodology and child psychology guide every classroom." },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function HomePage() {
  const latestNews = news.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* STATS */}
      <section className="container-x -mt-16 relative z-10">
        <div className="rounded-3xl shadow-elevated border border-border/60 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-border/60 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="p-5 sm:p-6 md:p-8 text-center bg-background flex flex-col justify-center">
              <div className="font-display text-xl sm:text-2xl md:text-3xl text-primary font-semibold tracking-tight">{s.value}</div>
              <div className="text-[8px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-widest text-muted-foreground mt-1 sm:mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Our mission</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance text-primary">
            Educating hearts, shaping<br />
            <span className="italic font-light">a confident India.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            From grade -2 to +2, the Madrasa education aims at molding a
            patriotic, cultured generation living with religious harmony — students
            who respect their parents, teachers and every member of society.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            In more than 90% of our madrasas, children acquire spiritual and moral
            education for two hours each early morning, before joining government
            schools for general education.
          </p>
          <Link
            to="/history"
            className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Read our story <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-[10/10] rounded-3xl overflow-hidden shadow-elevated">
            <img src={aboutImg} alt="Islamic textbooks" className="size-full object-cover" loading="lazy" />
          </div>
          {/* <div className="absolute -bottom-8 -right-4 md:-right-8 bg-accent-gradient text-accent-foreground rounded-2xl p-6 max-w-xs shadow-glow">
            <div className="font-display text-3xl font-semibold">140+</div>
            <div className="text-sm opacity-90 mt-1">Textbooks across Arabic, Malayalam, Kannada, Tamil, Urdu & English.</div>
          </div> */}
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-secondary/40 py-16">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">What we stand for</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary text-balance">
              Four pillars of a complete education.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group bg-background rounded-3xl p-7 border border-border/60 hover:border-accent/40 hover:shadow-elevated transition-all"
              >
                <div className="size-12 rounded-2xl bg-accent-gradient flex items-center justify-center text-accent-foreground shadow-soft group-hover:shadow-glow transition">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS SHOWCASE */}
      <section className="container-x py-16 grid lg:grid-cols-12 gap-12 items-center overflow-hidden">
        <div className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Our publications</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary text-balance">
            140 textbooks.<br />
            <span className="italic font-light">Six languages. One vision.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">
            From foundational Aqeedah to advanced Fiqh, our textbooks cover every class from -2 to +2 in both Shafi and Hanafi traditions, plus a common moral curriculum. Written in Arabic, Malayalam, Kannada, Tamil, Urdu and English — every page calls for religious harmony and patriotism.
          </p>
          {/* <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
            Centralised valuations and a unified syllabus mean a student in Calicut and one in Kolkata read the very same lesson, on the very same day.
          </p> */}
          <Link
            to="/publications"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:shadow-elevated transition"
          >
            Browse the catalogue <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="lg:col-span-6 w-full min-w-0">
          <div className="rounded-[2rem] bg-cream-gradient border border-border/60 p-5 sm:p-8 md:p-12 shadow-soft overflow-hidden">
            <PublicationCarousel />
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="bg-secondary/40 py-16">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Director board</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary text-balance">
                The scholars guiding<br /><span className="italic font-light">the movement.</span>
              </h2>
            </div>
            <Link to="/board" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Meet the full board <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {directors.map((d) => (
              <article key={d.name} className="group rounded-3xl overflow-hidden border border-border bg-background hover:shadow-elevated transition">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-primary">{d.name}</h3>
                  <div className="text-xs uppercase tracking-widest text-accent font-semibold mt-1">{d.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="container-x py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Latest news</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary text-balance">
              What's happening<br /><span className="italic font-light">across our network.</span>
            </h2>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            All news <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {latestNews.map((n) => (
            <Link
              key={n.slug}
              to="/news/$slug"
              params={{ slug: n.slug }}
              className="group rounded-3xl overflow-hidden border border-border bg-background hover:shadow-elevated hover:border-accent/40 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={n.image} alt={n.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-accent font-semibold">{n.category}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="size-3" />{formatDate(n.date)}</span>
                </div>
                <h3 className="mt-3 font-display text-xl text-primary leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pt-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-hero text-primary-foreground p-10 md:p-16">
          <div
            className="absolute inset-0 opacity-15 mix-blend-overlay"
            style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover" }}
            aria-hidden
          />
          <div className="relative grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-balance">
                Become part of a movement<br />
                <span className="italic font-light">a million students strong.</span>
              </h2>
              <p className="mt-4 opacity-85 max-w-xl">
                Affiliate your madrasa, receive our textbooks, or simply learn more
                about how we are shaping a better tomorrow.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-semibold shadow-elevated hover:shadow-glow transition"
              >
                Connect with us <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
