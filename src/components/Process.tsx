"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Eye } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Diagnóstico Rápido",
    description:
      "Entendemos sua necessidade e confirmamos prazos e documentos exigidos antes de qualquer pagamento.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Documentos e Formulários",
    description:
      "Montamos um checklist personalizado, revisamos dados e orientamos o envio aos canais oficiais.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Protocolo e Acompanhamento",
    description:
      "Acompanhamos protocolos, prazos e eventuais ajustes até a conclusão do serviço contratado.",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Sua jornada do início ao fim
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Um processo transparente e sem surpresas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line - desktop */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 text-xs font-bold text-primary/40">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
