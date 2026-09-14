import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      id: "item-1",
      question: "Qual é o tempo de dedicação semanal exigido de mim e da minha equipe?",
      answer:
        "Nosso objetivo é reduzir sua carga de trabalho, não sobrecarregar sua rotina com burocracia. O CEO e a diretoria dedicam em média 2 horas semanais para reuniões estratégicas de alinhamento e tomadas de decisão. A execução prática e os ajustes operacionais são conduzidos diretamente pelos nossos sócios junto aos gestores de cada área, com o mínimo de atrito possível.",
    },
    {
      id: "item-2",
      question: "Como funciona o Acordo de Confidencialidade (NDA) e o sigilo de dados?",
      answer:
        "A confidencialidade é inegociável. Antes de analisar qualquer planilha, DRE ou contrato da sua empresa, formalizamos um Acordo de Não Divulgação (NDA) assinado juridicamente por ambas as partes. Todas as suas informações de faturamento, margens e clientes são tratadas com sigilo absoluto e protegidas nos termos da LGPD.",
    },
    {
      id: "item-3",
      question: "Qual é a real diferença entre a Vértice e as consultorias tradicionais?",
      answer:
        "As consultorias convencionais cobram honorários astronômicos para produzir apresentações de 200 slides e delegam o trabalho diário para analistas recém-formados. Na Vértice, todo o projeto é conduzido pessoalmente por sócios seniores que já foram executivos e empresários. Não entregamos relatórios para você se virar: nós sentamos ao seu lado e implementamos os processos na prática.",
    },
    {
      id: "item-4",
      question: "Em quanto tempo começamos a enxergar os primeiros resultados práticos no caixa?",
      answer:
        "Nas primeiras 3 a 4 semanas já identificamos e ativamos os chamados 'quick wins' de caixa: saneamento de desperdícios invisíveis, renegociação de compras e correção de erros crônicos na precificação. Os resultados estruturais de governança, autonomia e expansão de margem EBITDA se consolidam ao longo do ciclo de 90 dias.",
    },
    {
      id: "item-5",
      question:
        "Minha empresa fatura entre R$ 3M e R$ 15M/ano. Esse formato se aplica ao meu porte?",
      answer:
        "Sim, este é exatamente o estágio em que mais agregamos valor. É o momento em que a empresa cresceu além da capacidade do fundador de controlar tudo de cabeça, mas ainda não comporta a contratação de uma diretoria executiva C-level de custo fixo elevado. Entramos como esse braço de gestão sênior para estruturar a base e permitir que o negócio dobre de tamanho com segurança.",
    },
    {
      id: "item-6",
      question: "O que exatamente acontece na sessão de Diagnóstico Preliminar de 45 minutos?",
      answer:
        "É uma conversa executiva, 100% sem compromisso comercial prévio, entre você e um dos nossos sócios especialistas. Analisamos os principais números do seu negócio, os gargalos de processos e a rotina da liderança. Você sairá da reunião com uma visão clara de onde estão as maiores oportunidades de margem e o que priorizar.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#090D16]/70 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Respostas diretas para as principais perguntas de CEOs e Diretores
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Transparência total sobre prazos, modelo de entrega e investimento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-white/5 last:border-b-0 py-1"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Chamada para conversa direta caso haja outra dúvida */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400">
            Tem uma pergunta específica sobre o seu segmento de mercado?{" "}
            <a
              href="#diagnostico"
              className="text-amber-300 font-semibold hover:underline underline-offset-4"
            >
              Envie no formulário de diagnóstico
            </a>{" "}
            para conversarmos diretamente.
          </p>
        </div>
      </div>
    </section>
  );
}
