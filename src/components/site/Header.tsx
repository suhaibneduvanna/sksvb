import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/ieb-mark.png";
import mark from "@/assets/ieb-mark.png";

type NavItem = {
  label: string;
  to?: string;
  submenus?: { label: string; to: string; external?: boolean }[];
};

const nav: NavItem[] = [
  {
    label: "About",
    submenus: [
      { label: "Vision & Mission", to: "/vision-mission" },
      { label: "History", to: "/history" },
      { label: "Leadership", to: "/board" },
    ],
  },
  {
    label: "Academics",
    submenus: [
      { label: "Curriculum", to: "/curriculum" }, // Placeholder since no dedicated page yet
      { label: "Publications", to: "/publications" },
    ],
  },
  {
    label: "Media",
    submenus: [
      { label: "News & Updates", to: "/news" },
      { label: "Gallery", to: "/gallery" },
      { label: "Videos", to: "/videos" },
    ],
  },
  {
    label: "Resources",
    submenus: [
      { label: "Circulars", to: "/circulars" },
      { label: "Downloads", to: "/downloads" },
    ],
  },
  {
    label: "Services",
    submenus: [
      { label: "Madrasa Login", to: "http://svb.samastha.in/?role=madrasa", external: true },
      { label: "Muallim Login", to: "https://svb.samastha.in/?role=muallim", external: true },
      { label: "Range/Division Login", to: "https://svb.samastha.in/?role=rangeadmin", external: true },
      { label: "Thadreeb Course", to: "https://thadreeb.samastha.in/", external: true },
      { label: "Madrasa Books (Order)", to: "https://svb.samastha.in/book_depo/order", external: true },

    ],
  },
  { label: "Results", to: "/results" },
  { label: "Contact", to: "/contact" },
];

function MobileNavItem({ n, setOpen }: { n: NavItem; setOpen: (v: boolean) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!n.submenus) {
    return (
      <Link
        to={n.to!}
        onClick={() => setOpen(false)}
        className="px-3 py-3 text-base font-medium text-foreground/80 rounded-lg hover:bg-secondary mt-1"
        activeProps={{ className: "text-primary bg-secondary" }}
      >
        {n.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between px-3 py-3 text-base font-medium text-foreground/80 rounded-lg hover:bg-secondary mt-1"
      >
        {n.label}
        <ChevronDown className={`size-4 opacity-50 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>
      {isExpanded && (
        <div className="flex flex-col gap-1 pl-2 border-l-2 border-border/40 ml-4 mb-2 mt-1">
          {n.submenus.map((sub) => (
            sub.external ? (
              <a
                key={sub.label}
                href={sub.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/80 rounded-lg hover:bg-secondary flex items-center justify-between"
              >
                {sub.label}
                <svg className="size-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            ) : (
              <Link
                key={sub.label}
                to={sub.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/80 rounded-lg hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
              >
                {sub.label}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="bg-background/75 backdrop-blur-xl border border-border/40 rounded-full shadow-soft hover:shadow-elevated transition-shadow flex items-center justify-between h-16 sm:h-20 px-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-1 min-w-0" onClick={() => setOpen(false)}>
          <img src={mark} alt="Islamic Educational Board" className="h-10 w-10 object-contain sm:hidden shrink-0" />
          <img src={logo} alt="Islamic Educational Board" className="h-13 w-13 object-contain hidden sm:block shrink-0" />
          <div className="leading-tight mt-0.5 min-w-0">
            <div className="font-ibm font-semibold text-primary text-[11px] sm:text-base tracking-tight truncate sm:whitespace-normal">
              ISLAMIC EDUCATIONAL BOARD
            </div>
            <div className="font-open-sans text-[7px] sm:text-[8px] uppercase tracking-[0.1em] sm:tracking-[0.18em] text-muted-foreground mt-0.5 truncate sm:whitespace-normal">
              SAMASTHA KERALA SUNNI VIDYABHYASA BOARD
            </div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((n) => (
            n.submenus ? (
              <div key={n.label} className="relative group">
                <button className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary rounded-full transition-colors flex items-center gap-1">
                  {n.label}
                  <ChevronDown className="size-3.5 opacity-50 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
                  <div className="bg-background border border-border/40 shadow-elevated rounded-xl p-2 min-w-48 flex flex-col gap-1">
                    {n.submenus.map((sub) => (
                      sub.external ? (
                        <a
                          key={sub.label}
                          href={sub.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary hover:bg-secondary rounded-lg transition-colors whitespace-nowrap flex items-center justify-between"
                        >
                          {sub.label}
                          <svg className="size-3 opacity-50 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary hover:bg-secondary rounded-lg transition-colors whitespace-nowrap"
                          activeProps={{ className: "text-primary bg-secondary" }}
                        >
                          {sub.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.label}
                to={n.to!}
                className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary rounded-full transition-colors relative"
                activeProps={{ className: "text-primary bg-secondary" }}
              >
                {n.label}
              </Link>
            )
          ))}
        </nav>

        <button
          className="xl:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 border border-border/40 bg-background/95 backdrop-blur-xl rounded-3xl shadow-elevated overflow-y-auto max-h-[80vh]">
          <div className="py-4 px-4 flex flex-col gap-1">
            {nav.map((n) => (
              <MobileNavItem key={n.label} n={n} setOpen={setOpen} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
