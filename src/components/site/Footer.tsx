import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/ieb-mark.png";

export function Footer() {
  return (
    <footer className="mt-32 bg-primary text-primary-foreground">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-background/10 backdrop-blur flex items-center justify-center">
              <img src={logo} alt="" className="h-9 w-9 object-contain brightness-0 invert" />
            </div>
            <div>
              <div className="font-ibm text-[11px] sm:text-base font-semibold">ISLAMIC EDUCATIONAL BOARD</div>
              <div className="font-open-sans text-[7px] sm:text-[8px] uppercase tracking-[0.1em] sm:tracking-[0.18em] mt-0.5 truncate sm:whitespace-normal opacity-80">SAMASTHA KERALA SUNNI VIDYABHYASA BOARD</div>
            </div>
          </div>
          <p className="text-sm opacity-75 max-w-md leading-relaxed">
            Shaping a patriotic, cultured generation through moral and spiritual
            education across more than ten thousand affiliated madrasas.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 hover:text-accent transition">About the Board</Link></li>
            <li><Link to="/curriculum" className="hover:opacity-100 hover:text-accent transition">Curriculum</Link></li>
            <li><Link to="/publications" className="hover:opacity-100 hover:text-accent transition">Publications</Link></li>
            <li><Link to="/activities" className="hover:opacity-100 hover:text-accent transition">Activities</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90 mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /><span>Samastha Centre,
              Markaz Complex Road,
              Calicut - 06, Kerala, India</span></li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 shrink-0" /><span>madrasaalhind@gmail.com</span></li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0" /><span>+91-495-2772840</span></li>

          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Islamic Educational Board. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/terms" className="hover:opacity-100 hover:text-accent transition">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:opacity-100 hover:text-accent transition">Privacy Policy</Link>
            <Link to="/refund" className="hover:opacity-100 hover:text-accent transition">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
