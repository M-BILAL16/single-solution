import React from "react";
import { CursorProvider } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HeroStats } from "@/components/HeroStats";
import { ClaritySection } from "@/components/ClaritySection";
import { SolutionsToolkit } from "@/components/SolutionsToolkit";
import { TypographicMoment } from "@/components/TypographicMoment";
import { EngagementSection } from "@/components/EngagementSection";
import { ImpactSection } from "@/components/ImpactSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <CursorProvider>
      <main style={{ minHeight: "100vh", position: "relative" }}>
        <Navigation />
        <Hero />
        <HeroStats />
        <ClaritySection />
        <SolutionsToolkit />
        <TypographicMoment />
        <EngagementSection />
        <ImpactSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </CursorProvider>
  );
}
