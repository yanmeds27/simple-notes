import { ShieldCheck, Mail, MapPin, PhoneCall, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060910] text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Coluna 1 & 2: Identidade */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B0F19] rounded-[6px] flex items-center justify-center">
                  <span className="font-serif font-black text-sm text-amber-300">V</span>
                </div>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                VÉRTICE <span className="text-xs text-amber-400 font-semibold">B2B</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Consultoria tática hands-on especializada em governança de processos, engenharia de
              margem EBITDA e descentralização para Pequenas e Médias Empresas em expansão no
              Brasil.
            </p>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/18).
              </span>
            </div>
          </div>

          {/* Coluna 3: Navegação */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-white">Navegação</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#problema" className="hover:text-amber-300 transition-colors">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#solucao" className="hover:text-amber-300 transition-colors">
                  Nossa Solução
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-amber-300 transition-colors">
                  Metodologia de 90 Dias
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-amber-300 transition-colors">
                  Resultados & Retorno
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-amber-300 transition-colors">
                  Casos de Estudo
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Segmentos */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-white">
              Setores Atendidos
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Indústria & Fabricação</li>
              <li>Distribuição & Atacado B2B</li>
              <li>Logística & Supply Chain</li>
              <li>Serviços Corporativos</li>
              <li>Tecnologia & Softwares B2B</li>
              <li>Saúde, Clínicas & Labs</li>
            </ul>
          </div>

          {/* Coluna 5: Contato Executivo */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-white">
              Canais Corporativos
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300">contato@verticegestao.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-300">(11) 3195-6200</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Av. Brig. Faria Lima, 3477 — Itaim Bibi, São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior com copyright e botão voltar ao topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Vértice Gestão Estratégica & Governança Ltda. Todos os
            direitos reservados. CNPJ: 42.819.301/0001-84.
          </div>

          <div className="flex items-center gap-6">
            <a href="#diagnostico" className="hover:text-amber-300 transition-colors">
              Termo de Confidencialidade (NDA)
            </a>
            <a href="#diagnostico" className="hover:text-amber-300 transition-colors">
              Política de Privacidade
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
