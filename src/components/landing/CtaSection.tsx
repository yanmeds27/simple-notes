import { ArrowRight, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorativo com iluminação radial suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-14 rounded-3xl border border-white/15 text-center shadow-2xl relative overflow-hidden">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Próximo Ciclo de Consultoria Aberto</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Não deixe mais um trimestre passar com margens comprimidas e sobrecarga na diretoria
          </h2>

          <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo para transformar sua empresa em um ativo autônomo, previsível e
            lucrativo. Agende uma sessão diagnóstica de 45 minutos com um dos nossos sócios
            seniores.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#diagnostico"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Solicitar Diagnóstico Estratégico</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>Sessão 1 a 1 de 45 minutos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Acordo de Confidencialidade (NDA)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Sem custo ou compromisso comercial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
