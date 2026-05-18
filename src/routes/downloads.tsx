import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, FileDown } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Islamic Educational Board" },
      { name: "description", content: "Download forms, documents, and resources from the Islamic Educational Board." },
    ],
  }),
  component: DownloadsPage,
});

const downloadCategories = [
  {
    title: "Forms & Applications",
    items: [
      { id: 1, name: "Madrasa Affiliation Application Form", type: "PDF", size: "1.2 MB", url: "#" },
      { id: 2, name: "Student Admission Register Format", type: "PDF", size: "850 KB", url: "#" },
      { id: 3, name: "Public Exam Registration Form", type: "PDF", size: "1.5 MB", url: "#" },
      { id: 4, name: "Teacher Transfer Application", type: "PDF", size: "450 KB", url: "#" },
    ],
  },
  {
    title: "Syllabus & Curriculum",
    items: [
      { id: 5, name: "Complete Syllabus (Shafi & Hanafi)", type: "PDF", size: "3.4 MB", url: "#" },
      { id: 6, name: "Academic Calendar 2024-25", type: "PDF", size: "2.1 MB", url: "#" },
      { id: 7, name: "Examination Time Table Guidelines", type: "PDF", size: "1.1 MB", url: "#" },
    ],
  },
  {
    title: "Circulars & Guidelines",
    items: [
      { id: 8, name: "Madrasa Working Hours Guidelines", type: "PDF", size: "500 KB", url: "#" },
      { id: 9, name: "Uniform Code for Students", type: "PDF", size: "400 KB", url: "#" },
    ],
  },
];

function DownloadsPage() {
  return (
    <>
      <section className="container-x pt-26 md:pt-34 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Resources</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Public <span className="italic font-light">Downloads.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Access and download essential forms, syllabus copies, circulars, and other important documents related to madrasa administration and academics.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="max-w-4xl space-y-12">
          {downloadCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-display font-semibold text-primary mb-6 flex items-center gap-3">
                <FileText className="size-6 text-accent" />
                {category.title}
              </h2>
              <div className="bg-background rounded-3xl border border-border overflow-hidden shadow-soft">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={item.id}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4 hover:bg-secondary/20 transition-colors ${itemIdx !== category.items.length - 1 ? "border-b border-border/60" : ""
                      }`}
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/5 text-primary shrink-0">
                        <FileDown className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
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
          ))}
        </div>
      </section>
    </>
  );
}
