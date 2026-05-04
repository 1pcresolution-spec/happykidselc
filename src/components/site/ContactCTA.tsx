import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-sunny/30 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-bubble/30 blur-3xl animate-bounce-slow" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-extrabold">Visit us</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">Join the Happy Kids family today!</h2>
          <p className="mt-4 text-lg font-semibold opacity-90">Book a tour and see the joy for yourself. We can't wait to meet you.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3"><MapPin className="h-6 w-6 text-sunny shrink-0" /><div><div className="font-extrabold">Address</div><div className="opacity-90 font-semibold">262 Corfield St, Gosnells, WA 6110</div></div></div>
            <div className="flex items-start gap-3"><Phone className="h-6 w-6 text-sunny shrink-0" /><div><div className="font-extrabold">Phone</div><a href="tel:0894903843" className="opacity-90 font-semibold hover:underline">08-9490 3843</a></div></div>
            <div className="flex items-start gap-3"><Mail className="h-6 w-6 text-sunny shrink-0" /><div><div className="font-extrabold">Email</div><a href="mailto:info@happykids.org.au" className="opacity-90 font-semibold hover:underline">info@happykids.org.au</a></div></div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-card text-foreground rounded-3xl p-8 shadow-fun border-4 border-white/40 space-y-4">
          <h3 className="text-2xl font-extrabold">Book a tour</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Your name" required className="rounded-xl h-12" />
            <Input type="email" placeholder="Email address" required className="rounded-xl h-12" />
          </div>
          <Input type="tel" placeholder="Phone number" className="rounded-xl h-12" />
          <Input placeholder="Child's age" className="rounded-xl h-12" />
          <Textarea placeholder="Tell us a little about your child..." rows={4} className="rounded-xl" />
          <Button type="submit" size="lg" className="w-full rounded-full h-14 font-extrabold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-pop">
            <Send className="h-4 w-4 mr-2" /> Send Enquiry
          </Button>
        </form>
      </div>
    </section>
  );
}