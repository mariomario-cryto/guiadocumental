"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Briefcase,
  Shield,
  CheckCircle,
  XCircle,
  Settings,
} from "lucide-react";

const cards = [
  {
    icon: AlertCircle,
    title: "Empresa Privada",
    text: "Não temos vínculo com governos ou órgãos emissores. Nosso papel é orientar — decisões finais dependem exclusivamente das entidades competentes.",
    accent: "border-l-blue-500",
  },
  {
    icon: Briefcase,
    title: "Transparência Comercial",
    text: "Informamos taxas oficiais separadamente dos nossos honorários. Você sempre sabe exatamente no que está investindo.",
    accent: "border-l-indigo-500",
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    text: "Solicitamos apenas dados essenciais. Informações armazenadas com acesso restrito e em conformidade com a LGPD.",
    accent: "border-l-emerald-500",
  },
  {
    icon: CheckCircle,
    title: "O Que Está Incluso",
    text: "Orientação completa, revisão de dados, preparação de formulários, suporte humano e checklist personalizado.",
    accent: "border-l-green-500",
  },
  {
    icon: XCircle,
    title: "O Que Não Está Incluso",
    text: "Emissão direta de documentos, garantia de deferimento e taxas governamentais (informamos valores e locais de pagamento).",
    accent: "border-l-red-400",
  },
  {
    icon: Settings,
    title: "Consentimento Controlado",
    text: "Gerencie cookies e preferências de privacidade quando quiser. Respeito total à legislação de proteção de dados.",
    accent: "border-l-violet-500",
  },
];

export default function ComplianceSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Informações importantes
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Transparência e conformidade em tudo que fazemos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-5 border border-border border-l-4 ${card.accent}`}
            >
              <div className="flex items-start gap-3">
                <card.icon className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
