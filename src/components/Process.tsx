"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    emoji: "💬",
    title: "Diagnóstico Rápido",
    description:
      "Entendemos sua necessidade e confirmamos prazos e documentos exigidos antes de qualquer pagamento.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    emoji: "📋",
    title: "Documentos e Formulários",
    description:
      "Montamos um checklist personalizado, revisamos dados e orientamos o envio aos canais oficiais.",
    gradient: "from-violet-500 to-indigo-400",
  },
  {
    number: "03",
    emoji: "🎉",
    title: "Protocolo e Conclusão",
    description:
      "Acompanhamos protocolos, prazos e eventuais ajustes até a conclusão do serviço contratado.",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            Passo a passo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-5">
            Sua jornada do início ao fim
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Um processo transparente e sem surpresas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector - desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-12 -right-3 z-10 w-6 h-6 items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-border" />
                </div>
              )}

              <div className="card-gradient-border card-lift bg-white rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <span className="text-4xl font-bold text-text/5">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">
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
            className="cta-shimmer btn-primary group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-bold rounded-2xl text-base"
          >
            Começar agora
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
