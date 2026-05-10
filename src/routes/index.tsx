import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap, Globe2, HeartHandshake, Sparkles } from "lucide-react";
import hero from "@/assets/hero-classroom.jpg";
import books from "@/assets/books.jpg";
import pattern from "@/assets/pattern.jpg";
import logo from "@/assets/ieb-logo.png";

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
  { value: "1 Million", label: "Students Educated" },
  { value: "50,000", label: "Teachers Trained" },
  { value: "140+", label: "Textbooks Published" },
];

const pillars = [
  { icon: BookOpen, title: "Moral Curriculum", text: "Lessons in moral values, environmental care, secular vision, and religious harmony from grade -2 to +2." },
  { icon: Globe2, title: "Six Languages", text: "Textbooks in Arabic, Malayalam, Kannada, Tamil, Urdu and English serving learners across India." },
  { icon: HeartHandshake, title: "Communal Harmony", text: "A friendly atmosphere built on respect for all, irrespective of caste or religion." },
  { icon: GraduationCap, title: "Trained Teachers", text: "Educators trained in modern methodology and child psychology guide every classroom." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/60" aria-hidden />
        <div className="container-x relative pt-20 pb-28 md:pt-32 md:pb-40 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="size-3.5" /> Est. by Samastha Kerala
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-semibold text-balance">
              Knowledge,<br />
              <span className="italic font-light bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">faith</span>{" "}
              and the next<br />generation.
            </h1>
            <p className="font-arabic text-2xl md:text-3xl mt-6 opacity-80" dir="rtl">
              هيئة التعليم السني بعموم كيرالا
            </p>
            <p className="mt-6 max-w-xl text-base md:text-lg opacity-85 leading-relaxed text-pretty">
              Headed by Indian Grand Mufti Moulana Sheikh Aboobacker, the Islamic
              Educational Board nurtures a patriotic, cultured generation through
              moral and spiritual learning across India.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-semibold shadow-elevated hover:shadow-glow transition"
              >
                About the Board <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/curriculum"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
              >
                View Curriculum
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img src={hero} alt="Madrasa classroom" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-6 -bottom-6 bg-background text-foreground rounded-2xl shadow-elevated p-5 max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="size-10 object-contain" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Founded for</div>
                  <div className="font-display font-semibold">Religious Harmony</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x -mt-16 relative z-10">
        <div className="rounded-3xl bg-background shadow-elevated border border-border/60 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="p-8 text-center">
              <div className="font-display text-3xl md:text-4xl text-primary font-semibold">{s.value}</div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="container-x py-28 md:py-36 grid lg:grid-cols-2 gap-16 items-center">
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
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Read our story <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
            <img src={books} alt="Islamic textbooks" className="size-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-accent-gradient text-accent-foreground rounded-2xl p-6 max-w-xs shadow-glow">
            <div className="font-display text-3xl font-semibold">140+</div>
            <div className="text-sm opacity-90 mt-1">Textbooks across Arabic, Malayalam, Kannada, Tamil, Urdu & English.</div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-secondary/40 py-28">
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

      {/* CTA */}
      <section className="container-x py-28">
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
