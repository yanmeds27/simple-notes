import { Check, X, TrendingUp, Clock, Shield, BarChart, Sparkles } from "lucide-react";

export function BenefitsSection() {
  const comparison = [
    {
      criterion: "Rotina do Fundador / CEO",
      without:
        "Preso a apagar incêndios 10h por dia, microgerenciando tarefas e assinando cada pagamento.",
      with: "Foco exclusivo em estratégia, grandes contas e expansão, com tempo livre para a vida pessoal.",
    },
    {
      criterion: "Visão Financeira & Margem",
      without:
        "Descobre o resultado real 30 dias após o mês fechar. Dúvidas constantes sobre precificação e lucro.",
      with: "DRE gerencial em D+2, margem por linha de produto e fluxo de caixa projetado para 90 dias.",
    },
    {
      criterion: "Autonomia da Liderança",
      without:
        "Gestores trazem impasses e dúvidas básicas, transferindo a responsabilidade sempre para você.",
      with: "Líderes que operam com metas claras (KPIs), rituais de prestação de contas e autonomia tática.",
    },
    {
      criterion: "Processos e Qualidade",
      without:
        "Conhecimento centralizado na cabeça de funcionários antigos. Se alguém sai, a área colapsa.",
      with: "POPs documentados e aplicados, onboarding rápido e processos à prova de dependência pessoal.",
    },
    {
      criterion: "Valuation e Solidez",
      without:
        "Empresa de alto risco caso o dono precise se ausentar; baixo valor de mercado perante investidores.",
      with: "Ativo estruturado, governança auditável e alta atratividade para crédito, sócios ou sucessão.",
    },
  ];

  const statCards = [
    {
      metric: "+38%",
      label: "Ganho Médio de EBITDA",
      detail: "Otimização de custos ocultos e reprecificação de clientes nos primeiros 6 meses.",
      icon: TrendingUp,
    },
    {
      metric: "-60%",
      label: "Horas do CEO em Operação",
      detail: "Redução drástica de interrupções diárias e reuniões desnecessárias de alinhamento.",
      icon: Clock,
    },
    {
      metric: "D+2",
      label: "Fechamento Gerencial",
      detail: "DRE gerencial e relatórios de margem disponíveis no segundo dia útil de cada mês.",
      icon: BarChart,
    },
    {
      metric: "100%",
      label: "Processos Mapeados",
      detail: "Rituais de governança e alçadas de decisão formalizadas e em execução contínua.",
      icon: Shield,
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Impacto Mensurável</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            A transformação prática na rotina e no caixa do seu negócio
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Mais do que consultoria, entregamos a paz de espírito de liderar uma empresa lucrativa,
            organizada e independente da sua presença física diária.
          </p>
        </div>

        {/* Cards de Métricas de Retorno */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-200 transition-colors">
                  {stat.metric}
                </div>
                <div className="text-sm font-bold text-slate-200 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-2 leading-relaxed">{stat.detail}</div>
              </div>
            );
          })}
        </div>

        {/* Quadro Comparativo Antes vs Depois */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 bg-white/[0.02] border-b border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-white text-center sm:text-left">
              Comparativo Direto: Como sua empresa opera hoje vs com a Vértice
            </h3>
          </div>

          <div className="divide-y divide-white/5">
            {comparison.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white/[0.015] transition-colors"
              >
                <div className="md:col-span-3 text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wide">
                  {item.criterion}
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 bg-rose-500/[0.03] p-3 rounded-lg border border-rose-500/10">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.without}</span>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-center text-slate-600 font-bold">
                  →
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-amber-200/90 bg-amber-400/[0.04] p-3 rounded-lg border border-amber-400/20">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug font-medium text-white/95">{item.with}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
