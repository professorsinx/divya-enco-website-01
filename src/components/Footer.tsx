import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { LogoPlaceholder } from "./LogoPlaceholder";

const MAPS_URL = "https://share.google/cZrdSYVdYsBsmT9Ji";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="mt-24 px-4 pb-8">
      <div className="glass mx-auto max-w-7xl rounded-3xl p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            {/* 👉 Logo also appears in the footer — same `src` prop applies */}
            <LogoPlaceholder />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Quality products, in-time delivery and optimum cost through machining, fabrication,
              welding and assembly.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:scale-110 hover:bg-white/10 hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground transition-colors hover:text-primary">
                  101/2, 102 Rasipuram Road,
                  <br />
                  Mathur, Pudukottai – 622 515,
                  <br />
                  Tamil Nadu, India
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary" />
                <span>
                  <a href="mailto:divyaenco@gmail.com" className="block hover:text-primary">divyaenco@gmail.com</a>
                  <a href="mailto:operations@divyaenco.com" className="block hover:text-primary">operations@divyaenco.com</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:+918681880006" className="hover:text-primary">+91 86818 80006</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Divya Enco. All rights reserved.</p>
          <p>Quality · In-time delivery · Optimum cost</p>
        </div>
      </div>
    </footer>
  );
}
