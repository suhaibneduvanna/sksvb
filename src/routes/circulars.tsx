import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download, Calendar } from "lucide-react";

export const Route = createFileRoute("/circulars")({
  head: () => ({
    meta: [
      { title: "Circulars — Islamic Educational Board" },
      { name: "description", content: "Official circulars, notifications, and orders from the Islamic Educational Board." },
    ],
  }),
  component: CircularsPage,
});

const circulars = [
  {
    id: 1,
    title: "Revised Working Hours for Madrasas During Ramadan",
    number: "Cir/2024/45",
    date: "15 February 2024",
    type: "PDF",
    size: "450 KB",
    url: "#",
  },
  {
    id: 2,
    title: "Guidelines for Half-Yearly Examinations",
    number: "Cir/2023/112",
    date: "10 November 2023",
    type: "PDF",
    size: "620 KB",
    url: "#",
  },
  {
    id: 3,
    title: "Notification: Teacher Training Programs 2023-24",
    number: "Cir/2023/89",
    date: "25 August 2023",
    type: "PDF",
    size: "380 KB",
    url: "#",
  },
  {
    id: 4,
    title: "Updated Academic Calendar Implementation",
    number: "Cir/2023/45",
    date: "12 May 2023",
    type: "PDF",
    size: "890 KB",
    url: "#",
  },
  {
    id: 5,
    title: "Instructions Regarding Public Exam Center Affiliation",
    number: "Cir/2023/12",
    date: "05 February 2023",
    type: "PDF",
    size: "510 KB",
    url: "#",
  },
];

function CircularsPage() {
  return (
    <>
      <section className="container-x pt-26 md:pt-34 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Resources</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Official <span className="italic font-light">Circulars.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Stay updated with the latest official orders, notifications, and administrative guidelines issued by the Samastha Kerala Sunni Vidyabhyasa Board.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="max-w-4xl">
          <div className="bg-background rounded-3xl border border-border overflow-hidden shadow-soft">
            {circulars.map((item, idx) => (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-6 hover:bg-secondary/20 transition-colors ${idx !== circulars.length - 1 ? "border-b border-border/60" : ""
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/5 text-primary shrink-0 hidden sm:block">
                    <FileText className="size-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground mb-2">
                      <span className="px-2 py-0.5 rounded bg-secondary text-primary border border-primary/10">
                        {item.number}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
                      <span className="uppercase tracking-wider font-semibold">{item.type}</span>
                      <span>•</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={item.url}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors shrink-0"
                >
                  <Download className="size-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
