"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  ArrowLeft,
  CheckCircle,
  Shield,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Loader2,
  FileText,
} from "lucide-react";

const estados = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const motivosRenovacao = [
  "Passaporte vencido",
  "Passaporte próximo do vencimento",
  "Páginas cheias",
  "Passaporte danificado",
  "Mudança de nome",
  "Passaporte perdido ou roubado",
  "Outro motivo",
];

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  estado: string;
  numeroPassaporte: string;
  dataValidade: string;
  motivoRenovacao: string;
  viagemMarcada: string;
  dataViagem: string;
  observacoes: string;
}

export default function AssessoriaRenovacao() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    numeroPassaporte: "",
    dataValidade: "",
    motivoRenovacao: "",
    viagemMarcada: "",
    dataViagem: "",
    observacoes: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState("");
  const [erros, setErros] = useState<Partial<Record<keyof FormData, string>>>({});

  function formatarTelefone(valor: string) {
    const nums = valor.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    if (name === "telefone") {
      setForm((prev) => ({ ...prev, telefone: formatarTelefone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (erros[name as keyof FormData]) {
      setErros((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validar(): boolean {
    const novosErros: Partial<Record<keyof FormData, string>> = {};
    if (!form.nome.trim()) novosErros.nome = "Informe seu nome completo";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      novosErros.email = "Informe um e-mail válido";
    if (form.telefone.replace(/\D/g, "").length < 10)
      novosErros.telefone = "Informe um telefone válido com DDD";
    if (!form.estado) novosErros.estado = "Selecione seu estado";
    if (!form.motivoRenovacao) novosErros.motivoRenovacao = "Selecione o motivo";
    if (!form.viagemMarcada) novosErros.viagemMarcada = "Selecione uma opção";
    if (form.viagemMarcada === "sim" && !form.dataViagem)
      novosErros.dataViagem = "Informe a data da viagem";
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validar()) return;
    setEnviando(true);
    setErroEnvio("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tipo: "renovacao" }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar");
      }

      setEnviado(true);
    } catch (err) {
      setErroEnvio(
        err instanceof Error
          ? err.message
          : "Erro ao enviar. Tente novamente."
      );
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary-dark flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-text mb-4">
            Guia recebido com sucesso!
          </h1>
          <p className="text-text-muted mb-2">
            Obrigado, <strong>{form.nome.split(" ")[0]}</strong>!
          </p>
          <p className="text-text-muted mb-8 leading-relaxed">
            Nossa equipe analisará suas informações e entrará em contato pelo
            telefone ou e-mail informado para dar início à sua assessoria de
            renovação de passaporte.
          </p>
          <div className="bg-accent rounded-xl p-4 mb-8 text-sm text-text-muted">
            <div className="flex items-center gap-2 justify-center">
              <Shield className="w-4 h-4 text-primary" />
              Seus dados estão protegidos conforme a LGPD
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Renovação de Passaporte
            </h1>
          </div>
          <p className="text-white/80 max-w-2xl">
            Preencha o guia abaixo com suas informações. Nossa equipe analisará
            seus dados e entrará em contato para orientá-lo na renovação.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Dados Pessoais */}
          <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Dados Pessoais
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text mb-1.5">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo como no passaporte"
                  className={`w-full px-4 py-3 rounded-xl border ${erros.nome ? "border-red-400 bg-red-50" : "border-border"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`}
                />
                {erros.nome && (
                  <p className="text-red-500 text-xs mt-1">{erros.nome}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  <Mail className="w-3.5 h-3.5 inline mr-1" />
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={`w-full px-4 py-3 rounded-xl border ${erros.email ? "border-red-400 bg-red-50" : "border-border"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`}
                />
                {erros.email && (
                  <p className="text-red-500 text-xs mt-1">{erros.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  <Phone className="w-3.5 h-3.5 inline mr-1" />
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className={`w-full px-4 py-3 rounded-xl border ${erros.telefone ? "border-red-400 bg-red-50" : "border-border"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`}
                />
                {erros.telefone && (
                  <p className="text-red-500 text-xs mt-1">{erros.telefone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  <MapPin className="w-3.5 h-3.5 inline mr-1" />
                  Estado *
                </label>
                <select
                  name="estado"
                  value={form.estado}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${erros.estado ? "border-red-400 bg-red-50" : "border-border"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white`}
                >
                  <option value="">Selecione</option>
                  {estados.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
                {erros.estado && (
                  <p className="text-red-500 text-xs mt-1">{erros.estado}</p>
                )}
              </div>
            </div>
          </div>

          {/* Passaporte Atual */}
          <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Passaporte Atual
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Numero do passaporte (se tiver)
                </label>
                <input
                  type="text"
                  name="numeroPassaporte"
                  value={form.numeroPassaporte}
                  onChange={handleChange}
                  placeholder="Ex: BR123456"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  <Calendar className="w-3.5 h-3.5 inline mr-1" />
                  Data de validade
                </label>
                <input
                  type="date"
                  name="dataValidade"
                  value={form.dataValidade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text mb-2">
                  Motivo da renovação *
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {motivosRenovacao.map((motivo) => (
                    <label
                      key={motivo}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all text-sm ${
                        form.motivoRenovacao === motivo
                          ? "border-primary bg-primary/5 text-primary font-medium"
                          : "border-border text-text-muted hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="motivoRenovacao"
                        value={motivo}
                        checked={form.motivoRenovacao === motivo}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          form.motivoRenovacao === motivo
                            ? "border-primary"
                            : "border-slate-300"
                        }`}
                      >
                        {form.motivoRenovacao === motivo && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      {motivo}
                    </label>
                  ))}
                </div>
                {erros.motivoRenovacao && (
                  <p className="text-red-500 text-xs mt-1">{erros.motivoRenovacao}</p>
                )}
              </div>
            </div>
          </div>

          {/* Viagem */}
          <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-text mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Viagem
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Tem viagem marcada? *
                </label>
                <div className="flex gap-4">
                  {["sim", "nao"].map((opt) => (
                    <label
                      key={opt}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all text-sm font-medium ${
                        form.viagemMarcada === opt
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-text-muted hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="viagemMarcada"
                        value={opt}
                        checked={form.viagemMarcada === opt}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {opt === "sim" ? "Sim" : "Não"}
                    </label>
                  ))}
                </div>
                {erros.viagemMarcada && (
                  <p className="text-red-500 text-xs mt-1">{erros.viagemMarcada}</p>
                )}
              </div>

              <AnimatePresence>
                {form.viagemMarcada === "sim" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Data prevista da viagem *
                    </label>
                    <input
                      type="date"
                      name="dataViagem"
                      value={form.dataViagem}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${erros.dataViagem ? "border-red-400 bg-red-50" : "border-border"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`}
                    />
                    {erros.dataViagem && (
                      <p className="text-red-500 text-xs mt-1">{erros.dataViagem}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Observações adicionais
                </label>
                <textarea
                  name="observacoes"
                  value={form.observacoes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Alguma dúvida ou informação relevante? (opcional)"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* LGPD Notice + Submit */}
          <div className="space-y-4">
            <div className="bg-accent rounded-xl p-4 flex items-start gap-3 text-sm text-text-muted">
              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p>
                Ao enviar este formulário, você concorda com nossa{" "}
                <Link href="/politica-privacidade" className="text-primary underline">
                  Política de Privacidade
                </Link>
                . Seus dados serão utilizados exclusivamente para a prestação do
                serviço de assessoria e não serão compartilhados com terceiros.
              </p>
            </div>

            {erroEnvio && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 text-center">
                {erroEnvio}
              </div>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed text-base"
            >
              {enviando ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Enviar Guia para Análise
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
