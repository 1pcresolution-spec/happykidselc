import artImg from "@/assets/program-art.jpg";
import playImg from "@/assets/program-play.jpg";
import learnImg from "@/assets/program-learn.jpg";

const programs = [
  { img: artImg, age: "6 mo – 2 yrs", title: "Nursery", desc: "A warm, loving space for our youngest learners to explore, bond and discover.", focus: "Bonding · Sensory play · Early communication", tone: "bg-bubble/20" },
  { img: playImg, age: "2 – 3 yrs", title: "Toddlers", desc: "Curiosity meets creativity with hands-on activities and joyful social play.", focus: "Motor skills · Language · Friendships", tone: "bg-sunny/30" },
  { img: learnImg, age: "3 – 5 yrs", title: "Kindergarten", desc: "School-ready confidence built through stories, projects and big imaginations.", focus: "Literacy · Numeracy · Independence", tone: "bg-grass/30" },
];

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-secondary/20 text-secondary px-4 py-1.5 text-sm font-extrabold">Our Programs</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">Tailored for every <span className="text-gradient-rainbow">stage of growth</span></h2>
          <p className="mt-4 text-muted-foreground text-lg font-semibold">Learning and growing together — programs that inspire, engage and nurture natural abilities.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <article key={p.title} className={`rounded-3xl overflow-hidden ${p.tone} border-2 border-border hover:-translate-y-2 transition-transform duration-300 shadow-fun`}>
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="h-56 w-full object-cover" />
              <div className="p-6 bg-card">
                <div className="text-xs font-extrabold text-primary">{p.age}</div>
                <h3 className="mt-1 text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground font-semibold">{p.desc}</p>
                <div className="mt-4 text-sm font-bold text-foreground/80 italic">{p.focus}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}