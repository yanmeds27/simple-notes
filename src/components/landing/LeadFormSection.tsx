import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Loader2,
  Calendar,
  CheckCircle2,
  Building,
  Mail,
  User,
  Phone,
} from "lucide-react";
import { submitLead, formatPhoneBR, type LeadFormData } from "@/lib/leads";

interface FormErrors {
  name?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  company?: string | undefined;
}

export function LeadFormSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenueRange: "R$ 3M a R$ 10M/ano",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Informe seu nome completo.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Informe um e-mail corporativo válido.";
    }

    const rawPhone = formData.phone.replace(/\D/g, "");
    if (rawPhone.length < 10) {
      errs.phone = "Informe o telefone com DDD (mínimo 10 dígitos).";
    }

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      errs.company = "Informe o nome da sua empresa.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitLead(formData);
      if (res.success) {
        // Redireciona para a página de agradecimento
        navigate({ to: "/obrigado" });
      } else {
        setGeneralError("Houve uma instabilidade temporária. Por favor, tente novamente.");
      }
    } catch (err: unknown) {
      console.error(err);
      setGeneralError("Ocorreu um erro ao enviar sua solicitação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (val: string) => {
    setFormData((prev) => ({ ...prev, phone: formatPhoneBR(val) }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  return (
    <section id="diagnostico" className="py-20 md:py-28 relative scroll-mt-10">
      {/* Glow de fundo focal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Coluna de Proposta de Valor e Critérios */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>Sessão Executiva Individual</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Solicite um Diagnóstico Estratégico Preliminar{" "}
                <span className="text-gold-gradient block">(45 minutos)</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Uma análise 1 a 1 conduzida por um dos nossos sócios especialistas. Iremos avaliar a
                estrutura de custos, processos e governança da sua empresa para mapear onde estão os
                vazamentos de margem e o que priorizar nos próximos 90 dias.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong className="text-white">Raio-X de Margem:</strong> avaliação de
                    precificação, custos fixos e dependência operacional do fundador.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong className="text-white">Plano de Ação Tático:</strong> três iniciativas
                    de alto impacto para implantar no próximo trimestre.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong className="text-white">Confidencialidade Rigorosa:</strong> todas as
                    informações compartilhadas são protegidas por termo de sigilo (NDA).
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  Atendimento limitado a <strong>6 novos diagnósticos por mês</strong> para garantir
                  a dedicação exclusiva dos sócios seniores.
                </span>
              </div>
            </div>

            {/* Coluna do Formulário Executivo */}
            <div className="lg:col-span-6">
              <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-white/15 shadow-2xl relative">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Agende sua sessão executiva
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Preencha os dados da sua empresa para que nosso comitê prepare o material
                    prévio.
                  </p>
                </div>

                {generalError && (
                  <div className="mb-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                    {generalError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome Completo */}
                  <div>
                    <label
                      htmlFor="form-nome"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="form-nome"
                        type="text"
                        placeholder="Ex: Carlos Eduardo Silveira"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all ${
                          errors.name
                            ? "border-rose-500 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* E-mail Corporativo */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      E-mail Corporativo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="form-email"
                        type="email"
                        inputMode="email"
                        placeholder="Ex: carlos@suaempresa.com.br"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all ${
                          errors.email
                            ? "border-rose-500 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div>
                    <label
                      htmlFor="form-telefone"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Telefone / WhatsApp com DDD *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="form-telefone"
                        type="tel"
                        inputMode="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all ${
                          errors.phone
                            ? "border-rose-500 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  {/* Nome da Empresa */}
                  <div>
                    <label
                      htmlFor="form-empresa"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Nome da Empresa *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        id="form-empresa"
                        type="text"
                        placeholder="Ex: Silveira Logística & Distribuição"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, company: e.target.value }));
                          if (errors.company)
                            setErrors((prev) => ({ ...prev, company: undefined }));
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all ${
                          errors.company
                            ? "border-rose-500 ring-1 ring-rose-500/50"
                            : "border-white/10"
                        }`}
                      />
                    </div>
                    {errors.company && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.company}</p>
                    )}
                  </div>

                  {/* Faixa de Faturamento Anual (Qualificação de PME) */}
                  <div>
                    <label
                      htmlFor="form-faturamento"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Faixa Estimada de Faturamento Anual
                    </label>
                    <select
                      id="form-faturamento"
                      value={formData.revenueRange}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, revenueRange: e.target.value }))
                      }
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all cursor-pointer"
                    >
                      <option value="R$ 3M a R$ 10M/ano">R$ 3M a R$ 10M / ano</option>
                      <option value="R$ 10M a R$ 30M/ano">R$ 10M a R$ 30M / ano</option>
                      <option value="R$ 30M a R$ 80M/ano">R$ 30M a R$ 80M / ano</option>
                      <option value="Acima de R$ 80M/ano">Acima de R$ 80M / ano</option>
                    </select>
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processando solicitação...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar Diagnóstico Estratégico</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Aviso LGPD / Confidencialidade */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400 text-center">
                    <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Seus dados são 100% confidenciais. Política estrita contra spam.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
