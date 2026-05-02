import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN?.trim();
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID?.trim();

interface LeadPrimeiraVia {
  tipo: "primeira-via";
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  estado: string;
  possuiRG: string;
  viagemMarcada: string;
  dataViagem?: string;
  observacoes?: string;
}

interface LeadRenovacao {
  tipo: "renovacao";
  nome: string;
  email: string;
  telefone: string;
  estado: string;
  numeroPassaporte?: string;
  dataValidade?: string;
  motivoRenovacao: string;
  viagemMarcada: string;
  dataViagem?: string;
  observacoes?: string;
}

type LeadData = LeadPrimeiraVia | LeadRenovacao;

function formatarData(data: string): string {
  if (!data) return "—";
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function montarFichaPrimeiraVia(lead: LeadPrimeiraVia): string {
  const urgencia = lead.viagemMarcada === "sim" ? "🔴 URGENTE" : "🟢 Normal";

  return [
    `📋 *NOVA LEAD — PRIMEIRA VIA*`,
    `${urgencia}`,
    ``,
    `👤 *Dados Pessoais*`,
    `Nome: ${lead.nome}`,
    `Email: ${lead.email}`,
    `Telefone: ${lead.telefone}`,
    `Nascimento: ${formatarData(lead.dataNascimento)}`,
    `Estado: ${lead.estado}`,
    ``,
    `📄 *Situação*`,
    `Possui RG: ${lead.possuiRG === "sim" ? "Sim" : "Não"}`,
    `Viagem marcada: ${lead.viagemMarcada === "sim" ? "Sim" : "Não"}`,
    ...(lead.viagemMarcada === "sim"
      ? [`Data da viagem: ${formatarData(lead.dataViagem || "")}`]
      : []),
    ...(lead.observacoes ? [``, `💬 *Observações*`, lead.observacoes] : []),
    ``,
    `⏰ ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
  ].join("\n");
}

function montarFichaRenovacao(lead: LeadRenovacao): string {
  const urgencia = lead.viagemMarcada === "sim" ? "🔴 URGENTE" : "🟢 Normal";

  return [
    `🔄 *NOVA LEAD — RENOVAÇÃO*`,
    `${urgencia}`,
    ``,
    `👤 *Dados Pessoais*`,
    `Nome: ${lead.nome}`,
    `Email: ${lead.email}`,
    `Telefone: ${lead.telefone}`,
    `Estado: ${lead.estado}`,
    ``,
    `📄 *Passaporte Atual*`,
    ...(lead.numeroPassaporte
      ? [`Número: ${lead.numeroPassaporte}`]
      : [`Número: não informado`]),
    ...(lead.dataValidade
      ? [`Validade: ${formatarData(lead.dataValidade)}`]
      : [`Validade: não informada`]),
    `Motivo: ${lead.motivoRenovacao}`,
    ``,
    `✈️ *Viagem*`,
    `Viagem marcada: ${lead.viagemMarcada === "sim" ? "Sim" : "Não"}`,
    ...(lead.viagemMarcada === "sim"
      ? [`Data da viagem: ${formatarData(lead.dataViagem || "")}`]
      : []),
    ...(lead.observacoes ? [``, `💬 *Observações*`, lead.observacoes] : []),
    ``,
    `⏰ ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
  ].join("\n");
}

async function enviarTelegram(texto: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID não configurados");
    return false;
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: texto,
      parse_mode: "Markdown",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Erro Telegram:", err);
    return false;
  }

  return true;
}

function validarCamposObrigatorios(data: LeadData): string | null {
  if (!data.nome?.trim()) return "Nome é obrigatório";
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "E-mail inválido";
  if (data.telefone?.replace(/\D/g, "").length < 10)
    return "Telefone inválido";
  if (!data.estado) return "Estado é obrigatório";
  if (!data.viagemMarcada) return "Campo viagem é obrigatório";

  if (data.tipo === "primeira-via") {
    if (!data.dataNascimento) return "Data de nascimento é obrigatória";
    if (!data.possuiRG) return "Campo RG é obrigatório";
  }

  if (data.tipo === "renovacao") {
    if (!data.motivoRenovacao) return "Motivo da renovação é obrigatório";
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validação server-side
    const erro = validarCamposObrigatorios(data);
    if (erro) {
      return NextResponse.json({ error: erro }, { status: 400 });
    }

    // Montar ficha
    const ficha =
      data.tipo === "primeira-via"
        ? montarFichaPrimeiraVia(data)
        : montarFichaRenovacao(data);

    // Enviar pro Telegram
    const enviado = await enviarTelegram(ficha);

    if (!enviado) {
      return NextResponse.json(
        { error: "Erro ao enviar. Tente novamente em instantes." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
