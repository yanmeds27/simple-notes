import { AlertTriangle, UserX, TrendingDown, EyeOff, Users2, ArrowRight } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: UserX,
      tag: "Centralização Crônica",
      title: "A 'Armadilha do Fundador'",
      description:
        "Todas as decisões críticas — e dezenas de operacionais — continuam dependendo exclusivamente de você. Se você se ausentar por 15 dias, as entregas atrasam e o ritmo do negócio cai drasticamente.",
      impact: "Você se torna o principal teto de crescimento da própria empresa.",
    },
    {
      icon: TrendingDown,
      tag: "Erosão de EBITDA",
      title: "Faturamento Sobe, Caixa Não Acompanha",
      description:
        "O volume de vendas cresce no papel, mas o lucro líquido não reflete o esforço. Custos operacionais ocultos, retrabalho e precificação sem base analítica estão drenando sua margem silenciosamente.",
      impact: "Trabalho redobrado para colher a mesma rentabilidade de anos anteriores.",
    },
    {
      icon: EyeOff,
      tag: "Gestão no Escuro",
      title: "Decisões no 'Feeling' Sem Dados Confiáveis",
      description:
        "Ausência de uma DRE gerencial estruturada em tempo hábil. A contabilidade tradicional entrega relatórios fiscais com semanas de atraso que não servem para manobras táticas rápidas de fluxo de caixa.",
      impact: "Decisões de investimento e corte de custos tomadas sem margem real de contribuição.",
    },
    {
      icon: Users2,
      tag: "Liderança Operacionalizada",
      title: "Gestores que Trazem Problemas, Não Soluções",
      description:
        "Falta de rituais de governança, metas desdobradas e autonomia tática. Os coordenadores e gerentes atuam como bombeiros operacionais em vez de liderarem suas áreas com metas e indicadores claros.",
      impact: "Turnover de talentos-chave e sobrecarga contínua da diretoria executiva.",
    },
  ];

  return (
    <section
      id="problema"
      className="py-20 md:py-28 relative border-t border-white/5 bg-[#090D16]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>O Diagnóstico da Realidade</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Os 4 gargalos que estagnam o crescimento de PMEs no Brasil
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            A maioria das empresas que faturam entre R$ 3M e R$ 80M chega a uma barreira invisível:
            o modelo que as trouxe até aqui não é o mesmo que garantirá a escala sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">
                      {prob.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-start gap-2.5 text-xs text-rose-300/90 bg-rose-500/[0.03] p-3 rounded-lg">
                  <span className="font-bold uppercase tracking-wider text-rose-400 shrink-0">
                    Impacto:
                  </span>
                  <span>{prob.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transição estratégica para a solução */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Reconhece esses sintomas na sua operação atual?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Esses entraves não se resolvem com horas extras nem com palestras motivacionais.
              Exigem método, governança e alinhamento de processos.
            </p>
          </div>
          <a
            href="#solucao"
            className="shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 underline-offset-4 hover:underline"
          >
            <span>Ver como atuamos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
