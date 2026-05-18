import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import pattern from "@/assets/pattern.jpg";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — Islamic Educational Board" },
      { name: "description", content: "The rich history and legacy of the Islamic Educational Board." },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <>
      <section className="relative bg-hero text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover" }}
          aria-hidden
        />
        <div className="container-x relative py-24 md:py-32">
          <span className="text-xs uppercase tracking-[0.25em] opacity-80">About</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-balance max-w-4xl">
            Our <span className="italic font-light">History.</span>
          </h1>
          <p className="mt-6 max-w-2xl opacity-85 text-lg">
            A century of teaching, preserving tradition, and building a foundation for future generations.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-elevated aspect-[4/5] sticky top-28">
            <img src={about} alt="Historical perspective" className="size-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Legacy</span>
            <h2 className="mt-3 font-display text-4xl text-primary">A century of dedication</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              The Islamic Educational Board — Samastha Kerala Sunni Vidyabhyasa Board — was founded with a profound commitment to preserving and imparting traditional Islamic knowledge. Over the decades, it has evolved from a regional initiative into one of India's largest educational networks.
            </p>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="font-display text-2xl text-primary">Growth & Expansion</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              What began with a handful of madrasas in Kerala has now grown to encompass over ten thousand affiliated institutions. Our reach has expanded beyond state borders, establishing a strong presence in Karnataka, Tamil Nadu, Delhi, Mumbai, Kolkata, and Bengal. Through decades of relentless effort, we have standardized moral education for millions.
            </p>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="font-display text-2xl text-primary">Milestones in Curriculum</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A key part of our history has been the continuous refinement of our curriculum. We have successfully unified the syllabus across vast geographies, ensuring that a student in Calicut and one in Kolkata read the very same lesson on the very same day. Our centralized examinations and valuations have set a gold standard in Islamic academic excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
