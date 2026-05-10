import { createFileRoute } from "@tanstack/react-router";
import { HandHeart, Users, Sparkles, BookHeart } from "lucide-react";
import pattern from "@/assets/pattern.jpg";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Islamic Educational Board" },
      { name: "description", content: "From humanitarian welfare to teacher training and parent motivation classes — discover the work of the Islamic Educational Board beyond the classroom." },
      { property: "og:title", content: "Activities — Islamic Educational Board" },
      { property: "og:description", content: "Welfare, training and outreach across India." },
    ],
  }),
  component: ActivitiesPage,
});

const activities = [
  {
    icon: HandHeart,
    title: "Humanitarian welfare",
    text: "The Board supervises welfare initiatives serving the public, and especially the staff and students within our network.",
  },
  {
    icon: Users,
    title: "Parent motivation",
    text: "Periodic motivation classes for parents extend learning from the classroom into the home.",
  },
  {
    icon: BookHeart,
    title: "Teacher training",
    text: "Only teachers trained in modern methodology and child psychology are appointed across affiliated madrasas.",
  },
  {
    icon: Sparkles,
    title: "Centralised examinations",
    text: "Common public examinations and centralised valuations ensure uniform standards and certified outcomes.",
  },
];

function ActivitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover" }} aria-hidden />
        <div className="container-x relative py-24 md:py-32">
          <span className="text-xs uppercase tracking-[0.25em] opacity-80">Activities</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-balance max-w-4xl">
            Beyond the classroom, <span className="italic font-light">into society.</span>
          </h1>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 gap-6">
        {activities.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl bg-background border border-border p-8 md:p-10 hover:border-accent/40 hover:shadow-elevated transition-all">
            <div className="size-14 rounded-2xl bg-accent-gradient text-accent-foreground flex items-center justify-center shadow-soft">
              <Icon className="size-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-primary">{title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">
            A friendly atmosphere — for every learner.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Madrasas motivate both boys and girls to work for national
            integration, encouraging communal harmony and discouraging social
            evils such as lies, financial cheating, theft and the use of liquors.
            History lessons cover the leaders who worked for our nation's
            independence and the protection of human values.
          </p>
        </div>
      </section>
    </>
  );
}
