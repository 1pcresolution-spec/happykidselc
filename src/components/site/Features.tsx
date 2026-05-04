import { Shield, GraduationCap, Heart, Blocks } from "lucide-react";

const items = [
  { icon: Shield, title: "Safe Environment", desc: "Secure premises with strict safety protocols.", color: "bg-sky/30 text-sky" },
  { icon: GraduationCap, title: "Qualified Staff", desc: "Trained, caring educators who love what they do.", color: "bg-bubble/30 text-bubble" },
  { icon: Heart, title: "Nurturing Care", desc: "Warm, empathetic interactions every single day.", color: "bg-secondary/30 text-secondary" },
  { icon: Blocks, title: "Play-Based Learning", desc: "Activities that spark curiosity and joy.", color: "bg-grass/30 text-grass" },
];

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-3xl bg-card p-6 border-2 border-border hover:-translate-y-2 hover:shadow-fun transition-all duration-300">
            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${it.color}`}>
              <it.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold">{it.title}</h3>
            <p className="mt-2 text-muted-foreground font-semibold">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}