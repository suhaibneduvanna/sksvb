import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Calendar } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Exam Results — Islamic Educational Board" },
      { name: "description", content: "Check the latest examination results conducted by the Islamic Educational Board." },
    ],
  }),
  component: ResultsPage,
});

const resultLinks = [
  {
    id: 1,
    title: "Public Examination Results 2025",
    description: "Results for classes 5, 7, 10, and +2 public examinations.",
    date: "April 2025",
    url: "#",
    active: true,
  },
  {
    id: 2,
    title: "Half-Yearly Examination 2024",
    description: "Results for the mid-term evaluations across all affiliated madrasas.",
    date: "December 2024",
    url: "#",
    active: false,
  },
  {
    id: 3,
    title: "Board Scholarship Exam 2024",
    description: "Merit scholarship examination results for outstanding students.",
    date: "October 2024",
    url: "#",
    active: false,
  },
  {
    id: 4,
    title: "Public Examination Results 2024",
    description: "Previous year results for classes 5, 7, 10, and +2.",
    date: "April 2024",
    url: "#",
    active: false,
  },
];

function ResultsPage() {
  return (
    <>
      <section className="container-x pt-26 md:pt-34 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Academics</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Examination <span className="italic font-light">Results.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Access the latest results for public examinations, scholarship tests, and term evaluations conducted by the Samastha Kerala Sunni Vidyabhyasa Board.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl">
          {resultLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`group flex flex-col justify-between p-6 md:p-8 rounded-3xl border transition-all ${item.active
                ? "border-primary/20 bg-primary/5 hover:border-primary/40 hover:shadow-soft"
                : "border-border bg-background hover:border-accent/40 hover:shadow-sm"
                }`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4">
                  <Calendar className="size-3.5" />
                  {item.date}
                  {item.active && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] tracking-wider uppercase">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                Check Results <ExternalLink className="size-4" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
