
import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
// BenefitsSection and Footer imports are no longer needed here

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* BenefitsSection (features) removed */}
        {/* CTA section removed */}
      </main>
      {/* Footer removed from home page */}
    </div>
  );
}
