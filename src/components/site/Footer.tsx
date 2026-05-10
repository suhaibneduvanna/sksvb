import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/ieb-logo.png";

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
              <div className="font-display text-lg font-semibold">Islamic Educational Board</div>
              <div className="font-arabic text-sm opacity-80">هيئة التعليم السني بعموم كيرالا</div>
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
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-90 mb-4">Headquarters</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /><span>Calicut, Kerala, India</span></li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 shrink-0" /><span>info@ieboard.org</span></li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0" /><span>+91 495 000 0000</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Islamic Educational Board. All rights reserved.</p>
          <p>Samastha Kerala Sunni Vidyabhyasa Board</p>
        </div>
      </div>
    </footer>
  );
}
