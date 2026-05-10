import { createFileRoute } from "@tanstack/react-router";
import scholar from "@/assets/scholar.jpg";
import pattern from "@/assets/pattern.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Islamic Educational Board" },
      { name: "description", content: "Headed by Indian Grand Mufti Moulana Sheikh Aboobacker, the Islamic Educational Board has shaped Islamic and moral education in India for generations." },
      { property: "og:title", content: "About the Islamic Educational Board" },
      { property: "og:description", content: "Discover the story, leadership and vision behind one of India's largest madrasa networks." },
      { property: "og:image", content: scholar },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
            A century of teaching, <span className="italic font-light">a future of harmony.</span>
          </h1>
          <p className="mt-6 max-w-2xl opacity-85 text-lg">
            The Islamic Educational Board — Samastha Kerala Sunni Vidyabhyasa
            Board — is one of India's largest networks of Islamic schools,
            educating more than a million students every year.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-elevated aspect-[4/5] sticky top-28">
            <img src={scholar} alt="Indian Grand Mufti Moulana Sheikh Aboobacker" className="size-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Leadership</span>
            <h2 className="mt-3 font-display text-4xl text-primary">Indian Grand Mufti Moulana Sheikh Aboobacker</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              The Board is headed by the great Islamic scholar, Indian Grand Mufti
              Moulana Sheikh Aboobacker. Under his guidance, the Board has grown
              into a movement that fuses spiritual depth with academic rigor.
            </p>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="font-display text-2xl text-primary">Our reach</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Around one million students and 50,000 teachers in LP, UP, Secondary
              and Higher Secondary classes acquire moral education through us.
              Institutions share common textbooks, uniforms and public examinations.
              Centralized valuations are conducted and certificates are issued by
              the Educational Board.
            </p>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="font-display text-2xl text-primary">A presence across India</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our Board has recognised madrasas in Kerala, Karnataka, Tamil Nadu
              and many other states. The main headquarters is in Calicut, Kerala,
              with regional offices in Delhi, Mumbai, Kolkata, Bengal, Bangalore
              and beyond.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { city: "Calicut", role: "Headquarters" },
                { city: "Delhi", role: "Regional Office" },
                { city: "Mumbai", role: "Regional Office" },
                { city: "Kolkata", role: "Regional Office" },
                { city: "Bengaluru", role: "Regional Office" },
                { city: "Bengal", role: "Regional Office" },
              ].map((o) => (
                <div key={o.city} className="rounded-2xl border border-border p-5 hover:border-accent/40 transition">
                  <div className="font-display text-xl text-primary">{o.city}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{o.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="font-display text-2xl text-primary">Welfare beyond classrooms</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Board also supervises a wide range of humanitarian welfare
              activities — for the public in general, and for the staff and
              students in particular — extending the reach of moral education
              into everyday community life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
