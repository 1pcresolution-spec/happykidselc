import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";
import hero1 from "@/assets/hero-kids.jpg";
import hero2 from "@/assets/program-play.jpg";
import hero3 from "@/assets/program-art.jpg";
import hero4 from "@/assets/program-learn.jpg";

const slides = [hero1, hero2, hero3, hero4];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-30 [background:var(--gradient-sun)]" />
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sunny/40 blur-2xl animate-float" />
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-bubble/40 blur-2xl animate-bounce-slow" />
      <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-grass/30 blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-sm font-bold">
            <Sparkles className="h-4 w-4" /> Welcome to Happy Kids
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            Caring for <span className="text-sunny">little hearts</span>,
            <br />
            nurturing <span className="text-accent">big dreams</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 max-w-xl font-semibold">
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
          <div className="mt-10 flex items-center gap-6 text-sm font-bold">
            <div className="flex items-center gap-2"><Heart className="h-5 w-5 text-bubble" /> Loving care</div>
            <div className="flex items-center gap-2"><Star className="h-5 w-5 text-sunny" /> Qualified educators</div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-fun border-4 border-white/40">
            {slides.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Happy children playing and learning"
                width={1024}
                height={1280}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <span key={idx} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-3 bg-white/40"}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white text-foreground rounded-2xl shadow-fun px-5 py-4 items-center gap-3 animate-float">
            <div className="h-12 w-12 rounded-full bg-grass/30 flex items-center justify-center text-2xl">🌈</div>
            <div>
              <div className="font-extrabold">200+ Happy Families</div>
              <div className="text-xs text-muted-foreground font-semibold">trust us every day</div>
            </div>
          </div>
          <div className="hidden sm:flex absolute -top-6 -right-6 bg-white text-foreground rounded-2xl shadow-pop px-5 py-4 items-center gap-3 animate-bounce-slow">
            <div className="h-12 w-12 rounded-full bg-sunny/40 flex items-center justify-center text-2xl">⭐</div>
            <div>
              <div className="font-extrabold">5-Star Care</div>
              <div className="text-xs text-muted-foreground font-semibold">rated by parents</div>
            </div>
          </div>
        </div>
      </div>

      <svg className="block w-full h-12 -mb-1 text-background" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}