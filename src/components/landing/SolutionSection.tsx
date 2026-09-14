import { ShieldCheck, Layers, BarChart3, Target, CheckCircle2, ArrowRight } from "lucide-react";

export function SolutionSection() {
  const pillars = [
    {
      icon: Layers,
      pillarNumber: "01",
      title: "Governança & Processos Autônomos",
      tagline: "Descentralização tática e redução da dependência do fundador",
      points: [
        "Mapeamento e simplificação dos fluxos operacionais críticos (compras, logística, entrega).",
        "Implementação de POPs (Procedimentos Operacionais Padrão) objetivos que a equipe de fato executa.",
        "Criação de Comitê Executivo e rituais de liderança semanais focados em resultados, não em reuniões infinitas.",
        "Definição de alçadas de decisão claras para cada nível gerencial.",
      ],
    },
    {
      icon: BarChart3,
      pillarNumber: "02",
      title: "Controladoria & Engenharia de Margem",
      tagline: "Visão clara do lucro real e proteção de caixa em tempo real",
      points: [
        "Estruturação de DRE Gerencial entregue até o 2º dia útil, separando margem bruta por produto/serviço.",
        "Revisão científica da matriz de precificação com base em custos diretos, indiretos e tributação.",
        "Saneamento cirúrgico de gastos operacionais e renegociação estruturada com fornecedores-chave.",
        "Modelo preditivo de fluxo de caixa com projeção de 90 dias e gatilhos de investimento seguro.",
      ],
    },
    {
      icon: Target,
      pillarNumber: "03",
      title: "Tração Comercial B2B & Gestão de Pessoas",
      tagline: "Previsibilidade de receita e líderes focados em metas",
      points: [
        "Padronização do funil de vendas B2B com SLA rígido entre prospecção, proposta e fechamento.",
        "Desdobramento de metas e indicadores individuais (KPIs/OKRs) para gestores de departamento.",
        "Estruturação de planos de incentivos e remuneração variável atrelados ao EBITDA, não só ao faturamento.",
        "Desenvolvimento prático da postura gerencial dos líderes para resolverem impasses sem o CEO.",
      ],
    },
  ];

  return (
    <section id="solucao" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Consultoria Tática Hands-on</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Não entregamos relatórios teóricos.{" "}
            <span className="text-gold-gradient block">Entramos na trincheira para executar.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Diferente de consultorias tradicionais que entregam apresentações de centenas de slides
            e vão embora, a Vértice atua lado a lado com a diretoria para desenhar, implantar e
            testar cada processo até que ele funcione sem você.
          </p>
        </div>

        {/* 3 Pilares Estruturados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-white/20 group-hover:text-amber-400/30 transition-colors font-mono">
                      {item.pillarNumber}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-amber-300/80 font-medium mb-6">{item.tagline}</p>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#diagnostico"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-amber-300 transition-colors"
                  >
                    <span>Avaliar aplicação para sua empresa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
