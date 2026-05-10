import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Scale, Users, Flag, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Islamic Educational Board" },
      { name: "description", content: "From grade -2 to +2, our curriculum balances moral values, environmental studies, religious harmony and modern pedagogy." },
      { property: "og:title", content: "Curriculum — Islamic Educational Board" },
      { property: "og:description", content: "A holistic syllabus blending moral values, history, environmental responsibility and worship." },
    ],
  }),
  component: CurriculumPage,
});

const themes = [
  { icon: Heart, title: "Moral values", text: "Respecting parents, teachers and society — irrespective of caste or religion." },
  { icon: Leaf, title: "Environmental care", text: "Protecting the environment from pollution as a religious and civic duty." },
  { icon: Scale, title: "Secular vision", text: "A clear secular mission alongside spiritual learning." },
  { icon: ShieldCheck, title: "Against social evils", text: "Discouraging lies, financial cheating, theft and the use of intoxicants." },
  { icon: Users, title: "National integration", text: "Both boys and girls motivated to work for a friendly, harmonious society." },
  { icon: Flag, title: "History & patriotism", text: "Lessons on India's freedom struggle and leaders who protected human values." },
];

const stages = [
  { stage: "Pre-Primary", grades: "-2 to 0", focus: "Foundational moral habits, basics of worship, language readiness." },
  { stage: "Lower Primary (LP)", grades: "1 — 4", focus: "Moral values, Quranic basics, environment studies, three languages." },
  { stage: "Upper Primary (UP)", grades: "5 — 7", focus: "History of religions, Indian heritage, deeper jurisprudence basics." },
  { stage: "Secondary", grades: "8 — 10", focus: "Comparative ethics, civic responsibility, secular vision and mission." },
  { stage: "Higher Secondary", grades: "+1 to +2", focus: "Advanced theology, leadership, national integration projects." },
];

function CurriculumPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Curriculum</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Two hours, every<br />
          <span className="italic font-light">morning, for life.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          In more than 90% of our affiliated madrasas, children acquire spiritual
          and moral education for two hours before 9 AM, then attend government
          schools for general education.
        </p>
      </section>

      <section className="container-x py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border bg-background p-7 hover:shadow-elevated hover:border-accent/40 transition-all">
              <div className="size-12 rounded-2xl bg-secondary text-primary flex items-center justify-center">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Stages</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">From the first letter to higher learning.</h2>

          <div className="mt-12 space-y-3">
            {stages.map((s, i) => (
              <div
                key={s.stage}
                className="grid md:grid-cols-12 gap-4 md:gap-6 items-center bg-background rounded-2xl p-6 md:p-8 border border-border/60 hover:border-accent/40 transition"
              >
                <div className="md:col-span-1 font-display text-3xl text-accent font-semibold">{String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-3">
                  <div className="font-display text-xl text-primary">{s.stage}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Grades {s.grades}</div>
                </div>
                <p className="md:col-span-8 text-muted-foreground">{s.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="rounded-[2rem] bg-hero text-primary-foreground p-10 md:p-14">
          <h2 className="font-display text-3xl md:text-4xl text-balance max-w-3xl">
            Common books. Common uniform. Common examinations — across every affiliated institution.
          </h2>
          <p className="mt-5 max-w-2xl opacity-85">
            Centralised valuations are conducted by the Board, and certificates
            are issued under a single recognised standard. Periodic motivation
            classes are also held for parents.
          </p>
        </div>
      </section>
    </>
  );
}
