import { Quote, Star, Building2, TrendingUp, CheckCircle } from "lucide-react";

export function SocialProofSection() {
  const cases = [
    {
      segment: "Indústria Metalmecânica",
      revenue: "Faturamento: R$ 32M/ano",
      title: "Recuperação de 7.2 p.p. na margem líquida e organização do chão de fábrica",
      challenge:
        "Matéria-prima mais cara e compras desorganizadas causavam paradas de máquinas e erosão severa do lucro.",
      solution:
        "Reprecificação científica por lote, governança de compras e POPs que destravaram o fluxo produtivo.",
      resultNumber: "+7.2 p.p.",
      resultLabel: "Margem líquida em 5 meses",
      testimonial:
        "A consultoria da Vértice foi o divisor de águas da nossa indústria. Hoje sei exatamente quanto cada linha de usinagem me entrega de lucro real e minha fábrica não depende mais de mim para resolver gargalos diários.",
      author: "Rogério S. Antunes",
      role: "Diretor Geral",
      company: "Grupo Antunes Metalurgia",
      initials: "RA",
    },
    {
      segment: "Distribuição & Logística",
      revenue: "Faturamento: R$ 58M/ano",
      title: "Destravamento de R$ 3.8M em caixa e redução de 48% na inadimplência",
      challenge:
        "Vendas batiam recordes, mas o caixa vivia no limite por falta de política de crédito e controle de estoque.",
      solution:
        "Controladoria em tempo real, novo DRE gerencial e comitê financeiro semanal com alçadas rígidas.",
      resultNumber: "R$ 3.8M",
      resultLabel: "Caixa livre acumulado sem dívidas",
      testimonial:
        "Eu achava que precisava de mais faturamento para respirar. A Vértice me provou que precisávamos de governança e disciplina de margem. Foi o investimento com maior retorno que já fizemos.",
      author: "Dra. Vanessa Meirelles",
      role: "Sócia-Fundadora",
      company: "MedLog Distribuidora",
      initials: "VM",
    },
    {
      segment: "Serviços Corporativos B2B",
      revenue: "Faturamento: R$ 18M/ano",
      title: "Autonomia de líderes e eliminação da sobrecarga da diretoria executiva",
      challenge:
        "Sócios presos a apagar incêndios com 120 colaboradores em campo. Decisões simples paravam a diretoria.",
      solution:
        "Desenho de rituais de liderança, metas individuais (OKRs) e empoderamento de gerentes com indicadores semanais.",
      resultNumber: "-70%",
      resultLabel: "Interrupções operacionais ao CEO",
      testimonial:
        "Pela primeira vez em doze anos consegui me ausentar por vinte dias sem receber uma única ligação de crise. A equipe assumiu a governança com responsabilidade e o negócio continuou crescendo.",
      author: "Eduardo Marcondes",
      role: "CEO & Co-fundador",
      company: "Vex Engenharia & Facility",
      initials: "EM",
    },
  ];

  return (
    <section id="casos" className="py-20 md:py-28 relative bg-[#090D16]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Casos Reais & Depoimentos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Quem já esteve no seu lugar e transformou seu negócio
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Empresários reais que enfrentavam a mesma centralização e os mesmos gargalos de margem e
            que hoje contam com empresas estruturadas e lucrativas.
          </p>
        </div>

        {/* 3 Cards de Casos Detalhados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {c.segment}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">{c.revenue}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-amber-200 transition-colors">
                  {c.title}
                </h3>

                {/* Destaque Numérico */}
                <div className="p-4 rounded-xl bg-amber-400/[0.04] border border-amber-400/20 mb-6">
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">
                    {c.resultNumber}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 font-medium">{c.resultLabel}</div>
                </div>

                {/* Citação */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-white/5 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-300 italic relative z-10 leading-relaxed font-normal">
                    "{c.testimonial}"
                  </p>
                </div>
              </div>

              {/* Autor */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center font-bold text-xs text-slate-950 shadow-md shrink-0">
                  {c.initials}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs sm:text-sm font-bold text-white truncate">{c.author}</div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {c.role} • {c.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
