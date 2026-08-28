import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-mark.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Happy Kids logo" width={48} height={48} className="h-12 w-12 animate-wiggle" />
          <div className="leading-tight">
            <div className="text-xl font-extrabold text-gradient-rainbow">Happy Kids</div>
            <div className="text-xs text-muted-foreground font-semibold">Early Learning Centre</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0894903843" className="flex items-center gap-2 text-sm font-bold text-primary">
            <Phone className="h-4 w-4" /> 08-94903843
          </a>
          <Button asChild size="lg" className="rounded-full font-bold shadow-pop bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href="#contact">Enrol Now</a>
          </Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-bold py-2">{l.label}</a>
            ))}
            <Button asChild className="rounded-full bg-secondary text-secondary-foreground">
              <a href="#contact">Enrol Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}