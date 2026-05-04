import { Star } from "lucide-react";

const quotes = [
  { name: "Julie Smith", text: "Safe and nurturing! My child loves going to Happy Kids every day. The staff truly care!" },
  { name: "John Golding", text: "Happy Kids has been a game-changer. The teachers are kind, patient and experienced!" },
  { name: "Steward Patric", text: "Amazing facilities and play-based learning. My little one is always excited to share what they've learned!" },
  { name: "Lura Robert", text: "The focus on safety and health is reassuring. Happy Kids feels like a second home for my child." },
  { name: "Nilaya Sharma", text: "Flexible programs and engaging activities — perfect for working parents like us!" },
  { name: "Mathew Wade", text: "We've seen such positive growth in our child, both socially and academically. Highly recommend!" },
];
const colors = ["bg-sunny/30", "bg-bubble/30", "bg-sky/30", "bg-grass/30", "bg-secondary/30", "bg-accent/40"];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-extrabold">Loved by parents</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">Stories from our <span className="text-gradient-rainbow">Happy Kids family</span></h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={q.name} className={`rounded-3xl p-7 ${colors[i % colors.length]} border-2 border-border hover:-translate-y-1 transition`}>
              <div className="flex gap-1 text-sunny">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-foreground font-semibold text-lg leading-relaxed">"{q.text}"</blockquote>
              <figcaption className="mt-5 font-extrabold">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}