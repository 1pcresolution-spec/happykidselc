import logo from "@/assets/logo-mark.png";
import { Facebook, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Happy Kids" width={48} height={48} className="h-12 w-12" />
            <div className="text-2xl font-extrabold text-gradient-rainbow">Happy Kids</div>
          </div>
          <p className="mt-4 max-w-md opacity-80 font-semibold">Happy Kids Childcare is more than a childcare center—it's a home away from home for your child. We are dedicated to fostering happiness, creativity and confidence in every child we care for.</p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61569811643619" aria-label="Facebook" className="h-10 w-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition"><Facebook className="h-5 w-5" /></a>
            <a href="https://www.instagram.com/happykids.org.au/" aria-label="Instagram" className="h-10 w-10 rounded-full bg-background/10 hover:bg-bubble flex items-center justify-center transition"><Instagram className="h-5 w-5" /></a>
            <a href="mailto:info@happykids.org.au" aria-label="Email" className="h-10 w-10 rounded-full bg-background/10 hover:bg-sky flex items-center justify-center transition"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-extrabold mb-4">Pages</h4>
          <ul className="space-y-2 opacity-80 font-semibold">
            <li><a href="#home" className="hover:text-sunny">Home</a></li>
            <li><a href="#about" className="hover:text-sunny">About</a></li>
            <li><a href="#programs" className="hover:text-sunny">Programs</a></li>
            <li><a href="#contact" className="hover:text-sunny">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold mb-4">Visit</h4>
          <p className="opacity-80 font-semibold">262 Corfield St, Gosnells,<br />Western Australia 6110</p>
          <p className="mt-3 opacity-80 font-semibold">08-94903843</p>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-background/10 text-sm opacity-70 font-semibold">© {new Date().getFullYear()} SAAA, Inc. All rights reserved.</div>
    </footer>
  );
}