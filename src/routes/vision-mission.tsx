import { createFileRoute } from "@tanstack/react-router";
import pattern from "@/assets/pattern.jpg";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Islamic Educational Board" },
      { name: "description", content: "Our vision and mission for Islamic education." },
    ],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
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
            Our Vision <span className="italic font-light">& Mission</span>
          </h1>
          <p className="mt-6 max-w-2xl opacity-85 text-lg">
            Guiding generations toward a harmonious and spiritually enlightened future through comprehensive moral education.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 border border-border/60 shadow-soft">
            <h2 className="font-display text-4xl text-primary mb-6">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To be the premier educational board that shapes a patriotic, cultured, and spiritually grounded generation. We envision a society where every student embodies the highest moral values, contributing positively to their communities and fostering religious harmony and national integration across India and beyond.
            </p>
          </div>
          
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <h2 className="font-display text-4xl text-primary mb-6">Our Mission</h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To provide standardized, high-quality moral and spiritual education across all affiliated madrasas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To develop a comprehensive curriculum that instills core Islamic values alongside a secular, harmonious worldview.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To train and support a dedicated network of educators to nurture the next generation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>To conduct centralized, fair evaluations and issue recognized certifications for academic excellence.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
