import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ieb-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/board", label: "Board" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/publications", label: "Publications" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/activities", label: "Activities" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img src={logo} alt="Islamic Educational Board" className="h-12 w-12 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-semibold text-primary text-base tracking-tight">
              Islamic Educational Board
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Samastha Kerala Sunni Vidyabhyasa Board
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary rounded-full transition-colors relative"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:shadow-glow transition-shadow"
          >
            Get in touch
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground/80 rounded-lg hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
