import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";
import heroPoster from "@/assets/hero-kids.jpg";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden text-primary-foreground min-h-[90vh] flex items-center">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      {/* Color wash so text stays readable while video shows through */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sunny/40 blur-2xl animate-float" />
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-bubble/40 blur-2xl animate-bounce-slow" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-sm font-bold">
            <Sparkles className="h-4 w-4" /> Welcome to Happy Kids
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            Caring for <span className="text-sunny">little hearts</span>,
            <br />
            nurturing <span className="text-accent">big dreams</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/95 max-w-xl font-semibold drop-shadow-lg">
            A vibrant, safe and joyful early learning centre in Gosnells where every child gets to play, learn and shine — every single day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full text-base font-bold h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-pop">
              <a href="#contact">Enrol Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base font-bold h-14 px-8 bg-white/10 border-white/40 text-primary-foreground hover:bg-white/20">
              <a href="#programs">Explore Programs</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm font-bold drop-shadow">
            <div className="flex items-center gap-2"><Heart className="h-5 w-5 text-bubble" /> Loving care</div>
            <div className="flex items-center gap-2"><Star className="h-5 w-5 text-sunny" /> Qualified educators</div>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 right-0 block w-full h-12 text-background" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}