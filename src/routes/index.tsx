import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <About />
        <Programs />
        <Gallery />
        <Testimonials />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
