import { ArrowRight, ShieldCheck, TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Luz ambiente de fundo elegante */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-sky-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid sutil de fundo corporativo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/20 text-xs font-semibold text-amber-300 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Consultoria Estratégica & Governança Hands-on para PMEs</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Escale a rentabilidade e os processos da sua empresa{" "}
            <span className="text-gold-gradient block mt-1">
              sem depender de você para cada decisão
            </span>
          </h1>

          {/* Subtítulo Voltado para Dores de CEOs */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Ajudamos proprietários, CEOs e diretores de empresas entre R$ 3M e R$ 80M/ano a
            destravarem margem EBITDA, eliminarem a sobrecarga operacional e estruturarem governança
            prática executada lado a lado em 90 dias.
          </p>

          {/* CTAs Principais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#diagnostico"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-[length:200%_auto] hover:bg-right text-slate-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Solicitar Diagnóstico Preliminar (45 min)</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>

            <a
              href="#metodologia"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <span>Conhecer Metodologia de 90 Dias</span>
            </a>
          </div>

          {/* Garantias Institucionais em Micro-Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-1 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Conduzido por Sócios Seniores</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Acordo de Confidencialidade (NDA)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Diagnóstico Inicial Sem Custo</span>
            </div>
          </div>
        </div>

        {/* Faixa de Métricas Executivas em Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 text-center sm:text-left relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              +R$ 140M
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Em valor e margem EBITDA destravados para clientes
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 text-center sm:text-left relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              94%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Taxa de retenção e recomendação direta entre fundadores
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 text-center sm:text-left relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              -60%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Do tempo do CEO consumido por rotinas operacionais
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 text-center sm:text-left relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              D+2
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Fechamento financeiro com DRE gerencial auditável
            </div>
          </div>
        </div>

        {/* Setores Atendidos com Credibilidade Corporativa */}
        <div className="mt-14 pt-10 border-t border-white/5 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Expertise comprovada em setores de alta complexidade operacional
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Indústrias & Manufatura
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Distribuição & Logística B2B
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Serviços Corporativos Especializados
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Empresas de Tecnologia & SaaS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Saúde & Laboratórios
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
