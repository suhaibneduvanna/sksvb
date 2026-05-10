import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Islamic Educational Board" },
      { name: "description", content: "Reach out to the Islamic Educational Board headquarters in Calicut, Kerala, or our regional offices in Delhi, Mumbai, Kolkata, Bengaluru and more." },
      { property: "og:title", content: "Contact — Islamic Educational Board" },
      { property: "og:description", content: "Get in touch with our headquarters and regional offices across India." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Calicut", role: "Main Headquarters", state: "Kerala" },
  { city: "Delhi", role: "Regional Office", state: "" },
  { city: "Mumbai", role: "Regional Office", state: "Maharashtra" },
  { city: "Kolkata", role: "Regional Office", state: "" },
  { city: "Bengaluru", role: "Regional Office", state: "Karnataka" },
  { city: "Bengal", role: "Regional Office", state: "" },
];

function ContactPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Contact</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Let's build a better<br /><span className="italic font-light">tomorrow, together.</span>
        </h1>
      </section>

      <section className="container-x pb-20 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <form
          className="lg:col-span-3 rounded-3xl border border-border bg-background p-8 md:p-10 shadow-soft space-y-5"
          onSubmit={(e) => { e.preventDefault(); alert("Thank you. We'll be in touch."); }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
            />
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft hover:shadow-glow transition">
            Send message
          </button>
        </form>

        {/* Info */}
        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl bg-hero text-primary-foreground p-8">
            <h3 className="font-display text-2xl">Headquarters</h3>
            <ul className="mt-5 space-y-3 text-sm opacity-90">
              <li className="flex gap-3"><MapPin className="size-4 mt-0.5" /> Calicut, Kerala, India</li>
              <li className="flex gap-3"><Phone className="size-4 mt-0.5" /> +91 495 000 0000</li>
              <li className="flex gap-3"><Mail className="size-4 mt-0.5" /> info@ieboard.org</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border p-8">
            <h3 className="font-display text-xl text-primary">Office hours</h3>
            <p className="mt-3 text-sm text-muted-foreground">Saturday — Thursday<br /> 9:00 AM — 5:00 PM IST</p>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl text-primary">Regional offices</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((o) => (
              <div key={o.city} className="rounded-2xl bg-background border border-border p-6 hover:border-accent/40 transition">
                <div className="text-xs uppercase tracking-widest text-accent font-semibold">{o.role}</div>
                <div className="font-display text-2xl text-primary mt-2">{o.city}</div>
                {o.state && <div className="text-sm text-muted-foreground mt-1">{o.state}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
      />
    </div>
  );
}
