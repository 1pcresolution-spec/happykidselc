import aboutImg from "@/assets/program-learn.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Tailored learning programs for every age",
  "Inclusive, diverse and welcoming community",
  "Skilled, caring and qualified educators",
  "Daily updates so parents stay connected",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/40 relative overflow-hidden">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-bubble/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-rainbow rounded-[2.5rem] opacity-40 blur-xl" />
          <img src={aboutImg} alt="Educator reading to children" loading="lazy" width={1024} height={1024} className="relative rounded-[2rem] shadow-fun border-4 border-white object-cover aspect-[5/4]" />
          <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl px-6 py-4 shadow-pop animate-wiggle">
            <div className="text-3xl font-extrabold">10+</div>
            <div className="text-xs font-bold">Years of joy</div>
          </div>
        </div>
        <div>
          <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-extrabold">About Happy Kids</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">Where every child's <span className="text-gradient-rainbow">happiness</span> comes first.</h2>
          <p className="mt-5 text-lg text-muted-foreground font-semibold">
            At Happy Kids Childcare, we provide a loving, safe and enriching environment where your little ones learn, grow and thrive. We nurture natural curiosity through age-appropriate activities and personalised care.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 font-semibold">
                <CheckCircle2 className="h-5 w-5 text-grass mt-0.5 shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}