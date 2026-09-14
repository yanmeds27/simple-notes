import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowLeft,
  MessageSquare,
  FileText,
  UserCheck,
} from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  component: ObrigadoPage,
});

interface StoredLead {
  id?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  createdAt?: string;
}

function ObrigadoPage() {
  const [lead, setLead] = useState<StoredLead | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = sessionStorage.getItem("last_submitted_lead");
        if (raw) {
          setLead(JSON.parse(raw));
        }
      } catch {
        // ignora
      }
    }
  }, []);

  const protocol = lead?.id || `VRT-${Math.floor(100000 + Math.random() * 900000)}`;

  // Mensagem personalizada para WhatsApp caso o executivo queira adiantar a conversa
  const whatsappNumber = "5511999996200"; // Número corporativo
  const whatsappMessage = encodeURIComponent(
    `Olá, acabei de solicitar um Diagnóstico Estratégico no site da Vértice (Protocolo: ${protocol}${
      lead?.company ? ` - Empresa: ${lead.company}` : ""
    }). Gostaria de verificar a disponibilidade de agenda dos sócios.`,
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#090D16] text-white flex flex-col justify-between selection:bg-amber-500/20 selection:text-amber-200 font-sans">
      {/* Topo simplificado com marca */}
      <header className="py-6 border-b border-white/10 bg-[#090D16]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center p-0.5 shadow-md">
              <div className="w-full h-full bg-[#0B0F19] rounded-[6px] flex items-center justify-center">
                <span className="font-serif font-black text-sm text-amber-300">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1">
                VÉRTICE
                <span className="text-[10px] text-amber-400 font-semibold bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/20">
                  B2B
                </span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                Gestão Estratégica & Governança
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao site</span>
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal de Confirmação */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden text-center">
            {/* Glow de fundo focal */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Ícone de Sucesso */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/10 text-amber-400">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Solicitação Confirmada com Sucesso</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {lead?.name
                ? `Obrigado, ${lead.name.split(" ")[0]}!`
                : "Solicitação Recebida com Sucesso!"}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Recebemos os dados da sua empresa{" "}
              {lead?.company && (
                <strong className="text-white font-semibold">({lead.company})</strong>
              )}
              . Nosso comitê técnico já iniciou a preparação prévia do seu material.
            </p>

            {/* Protocolo do Lead */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 font-mono">
              <span>Protocolo de Atendimento:</span>
              <span className="text-amber-300 font-bold">{protocol}</span>
            </div>

            {/* Linha do Tempo: O Que Acontece a Seguir */}
            <div className="mt-12 text-left pt-10 border-t border-white/10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400/90 mb-6 text-center sm:text-left">
                Próximos Passos da Sessão Diagnóstica
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-amber-400 shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Análise Setorial Preliminar (até 4 horas úteis)
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Nossos sócios seniores avaliam os dados do seu segmento para identificar os
                      principais benchmarks de margem EBITDA e custos operacionais de mercado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-amber-400 shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Contato Direto de um Sócio Especialista
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Entraremos em contato via WhatsApp ou e-mail corporativo para confirmar o
                      melhor dia e horário para a sessão de 45 minutos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-amber-400 shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Realização da Sessão de Diagnóstico Estratégico
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Reunião executiva online e individual com a entrega do Raio-X de Gargalos e as
                      3 iniciativas prioritárias para os próximos 90 dias da sua empresa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações de Conversão Adicional / Contato WhatsApp */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Antecipar Agendamento via WhatsApp</span>
              </a>

              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
              >
                <span>Retornar à Página Inicial</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Todas as informações estão protegidas sob Acordo de Confidencialidade (NDA).
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé Simples */}
      <footer className="py-6 border-t border-white/5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Vértice Gestão Estratégica & Governança Ltda. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}
