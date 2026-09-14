import { Search, Compass, Wrench, Award, CheckCircle2 } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      phase: "Fase 01",
      timeline: "Semanas 1 e 2",
      icon: Search,
      title: "Diagnóstico 360° & Raio-X de Margem",
      description:
        "Imersão profunda nos dados financeiros, processos operacionais e entrevistas estruturadas com a diretoria e líderes de área. Identificamos os vazamentos de margem e os primeiros quick wins para gerar alívio imediato no caixa.",
      deliverable: "Relatório de Raio-X Estratégico + Plano de Quick Wins de Caixa",
    },
    {
      phase: "Fase 02",
      timeline: "Semanas 3 e 4",
      icon: Compass,
      title: "Desenho do Plano Tático de 90 Dias",
      description:
        "Construção conjunta do mapa de prioridades. Selecionamos os 20% de processos que destravam 80% do resultado. Estabelecemos metas de EBITDA, cronograma de entregas e alçadas de decisão para cada gestor.",
      deliverable: "Matriz Tática de Prioridades + Alçadas de Decisão + Metas Financeiras",
    },
    {
      phase: "Fase 03",
      timeline: "Semanas 5 a 10",
      icon: Wrench,
      title: "Execução Hands-on na Operação",
      description:
        "Nossos sócios seniores atuam dentro da sua empresa. Reescrevemos rotinas críticas, ajustamos precificação, treinamos seus líderes e participamos dos comitês operacionais para garantir que a mudança seja cumprida.",
      deliverable: "POPs Ativos + Nova Precificação Implantada + DRE Gerencial D+2",
    },
    {
      phase: "Fase 04",
      timeline: "Semanas 11 e 12",
      icon: Award,
      title: "Governança & Rituais de Sustentação",
      description:
        "Instalação dos painéis de bordo executivos (dashboards), rituais de conselho consultivo mensal e consolidação da autonomia gerencial. A empresa passa a rodar com ritmo previsível sem exigir a presença diária do fundador.",
      deliverable: "Dashboard Executivo Automatizado + Comitê de Governança Instituído",
    },
  ];

  return (
    <section
      id="metodologia"
      className="py-20 md:py-28 relative bg-[#090D16]/70 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <span>Metodologia dos 90 Dias</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Como funciona a jornada da sua empresa rumo à autonomia
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Um processo estruturado em 4 fases claras, com entregáveis palpáveis e sem paralisar a
            sua rotina operacional.
          </p>
        </div>

        {/* Timeline / Grid de Fases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                      {step.phase}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">{step.timeline}</span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-300 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Entregável Principal:
                  </span>
                  <div className="text-xs text-amber-200/90 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
