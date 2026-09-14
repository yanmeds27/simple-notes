import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { LeadFormSection } from "@/components/landing/LeadFormSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-amber-500/20 selection:text-amber-200 font-sans">
      {/* Barra de Navegação Corporativa */}
      <Navbar />

      {/* Conteúdo Principal Estruturado */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Problema: Gargalos de Crescimento das PMEs */}
        <ProblemSection />

        {/* 3. Solução: Consultoria Hands-on */}
        <SolutionSection />

        {/* 4. Como Funciona: Metodologia dos 90 Dias */}
        <HowItWorksSection />

        {/* 5. Benefícios Mensuráveis & Antes vs Depois */}
        <BenefitsSection />

        {/* 6. Prova Social & Casos Reais de Estudo */}
        <SocialProofSection />

        {/* Formulário Principal de Qualificação e Geração de Leads */}
        <LeadFormSection />

        {/* 7. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 8. Chamada Final para Ação (CTA) */}
        <CtaSection />
      </main>

      {/* 9. Rodapé Corporativo */}
      <Footer />
    </div>
  );
}
