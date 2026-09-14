import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().min(2, "Por favor, informe seu nome completo.").max(100, "Nome muito longo."),
  email: z
    .string()
    .email("Informe um e-mail válido.")
    .refine((val) => {
      return !val.includes("test@test.com");
    }, "Por favor, informe seu e-mail corporativo principal."),
  phone: z
    .string()
    .min(10, "Informe um telefone válido com DDD (mínimo 10 dígitos).")
    .max(20, "Telefone inválido."),
  company: z
    .string()
    .min(2, "Informe o nome da sua empresa.")
    .max(120, "Nome da empresa muito longo."),
  revenueRange: z.string().optional(),
});

export type LeadFormData = z.infer<typeof LeadSchema>;

export interface LeadSubmissionPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  revenueRange?: string | undefined;
  id: string;
  createdAt: string;
  utmSource?: string | undefined;
  utmMedium?: string | undefined;
  utmCampaign?: string | undefined;
  pageUrl?: string | undefined;
  userAgent?: string | undefined;
}

export interface SubmissionResponse {
  success: boolean;
  leadId: string;
  message: string;
}

/**
 * Aplica máscara de telefone brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
 */
export function formatPhoneBR(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) {
    return digits.length > 0 ? `(${digits}` : "";
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

/**
 * Despacha o lead para o webhook de CRM configurado.
 * Se nenhuma URL de webhook estiver configurada (VITE_CRM_WEBHOOK_URL),
 * armazena localmente em localStorage e simula resposta de sucesso em ambiente de desenvolvimento.
 */
export async function submitLead(data: LeadFormData): Promise<SubmissionResponse> {
  const validated = LeadSchema.parse(data);
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  // Captura parâmetros de UTM se estiver no navegador
  let utmSource: string | undefined;
  let utmMedium: string | undefined;
  let utmCampaign: string | undefined;
  let pageUrl: string | undefined;
  let userAgent: string | undefined;

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    utmSource = params.get("utm_source") ?? undefined;
    utmMedium = params.get("utm_medium") ?? undefined;
    utmCampaign = params.get("utm_campaign") ?? undefined;
    pageUrl = window.location.href;
    userAgent = window.navigator.userAgent;
  }

  const payload: LeadSubmissionPayload = {
    name: validated.name,
    email: validated.email,
    phone: validated.phone,
    company: validated.company,
    revenueRange: validated.revenueRange,
    id: leadId,
    createdAt: now,
    utmSource,
    utmMedium,
    utmCampaign,
    pageUrl,
    userAgent,
  };

  // Salva no localStorage como backup e para depuração local
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("vertice_leads_captured") || "[]");
      existing.unshift(payload);
      localStorage.setItem("vertice_leads_captured", JSON.stringify(existing.slice(0, 50)));
      sessionStorage.setItem("last_submitted_lead", JSON.stringify(payload));
    } catch {
      // ignora falha em storage
    }
  }

  // URL configurável via variável de ambiente Vite
  const webhookUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.["VITE_CRM_WEBHOOK_URL"]) ||
    (typeof window !== "undefined" &&
      ((window as unknown as Record<string, unknown>)["CRM_WEBHOOK_URL"] as string | undefined));

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          event: "b2b_lead_captured",
          data: payload,
        }),
      });

      if (!response.ok) {
        console.warn(
          `[Webhook CRM] Servidor retornou código ${response.status}. O lead foi salvo localmente.`,
        );
      }
    } catch (err) {
      console.warn("[Webhook CRM] Falha ao enviar para o webhook do CRM:", err);
      // Não trava a jornada do usuário se o webhook de terceiro oscilar
    }
  } else {
    // Modo de desenvolvimento / sem webhook conectado ainda
    console.info(
      "[CRM Webhook Ready] Lead pronto para despacho. Configure VITE_CRM_WEBHOOK_URL para integrar com seu CRM (HubSpot, RD Station, ActiveCampaign, etc.):",
      payload,
    );
    // Simula uma breve latência de rede para feedback UX natural
    await new Promise((resolve) => setTimeout(resolve, 600));
  }

  return {
    success: true,
    leadId,
    message: "Solicitação recebida com sucesso.",
  };
}
