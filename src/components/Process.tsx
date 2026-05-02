"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Diagnóstico Rápido",
    description:
      "Entendemos sua necessidade e confirmamos prazos e documentos exigidos antes de qualquer pagamento.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Documentos e Formulários",
    description:
      "Montamos um checklist personalizado, revisamos dados e orientamos o envio aos canais oficiais.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    number: "03",
    icon: Eye,
    title: "Protocolo e Acompanhamento",
    description:
      "Acompanhamos protocolos, prazos e eventuais ajustes até a conclusão do serviço contratado.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Passo a passo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-5">
            Sua jornada do início ao fim
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Um processo transparente e sem surpresas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector arrow - desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 z-10">
                  <ArrowRight className="w-5 h-5 text-border" />
                </div>
              )}

              <div className="bg-white rounded-2xl p-8 border border-border h-full card-hover">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-text-muted/40 uppercase tracking-widest">
                  Etapa {step.number}
                </span>
                <h3 className="text-xl font-bold text-text mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/assessoria-primeira-guia"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl text-base"
          >
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
