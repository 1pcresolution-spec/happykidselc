import { Play } from "lucide-react";
import g1 from "@/assets/hero-kids.jpg";
import g2 from "@/assets/program-art.jpg";
import g3 from "@/assets/program-play.jpg";
import g4 from "@/assets/program-learn.jpg";

const items = [g1, g2, g3, g4, g2, g3];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-rainbow opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-accent/30 text-accent-foreground px-4 py-1.5 text-sm font-extrabold">Moments of joy</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">Watch our little ones <span className="text-gradient-rainbow">play & shine</span></h2>
        </div>
        <div className="mt-12 relative rounded-[2rem] overflow-hidden shadow-fun border-4 border-white aspect-video bg-black">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={g1}>
            <source src="https://cdn.pixabay.com/video/2020/09/08/49375-457490454_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shadow-pop animate-bounce-slow">
              <Play className="h-5 w-5 fill-current" />
            </div>
            <div>
              <div className="font-extrabold text-lg">A day at Happy Kids</div>
              <div className="text-sm opacity-90 font-semibold">Smiles, songs and endless discovery</div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-pop hover:scale-105 transition-transform">
              <img src={src} alt="Gallery" loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}