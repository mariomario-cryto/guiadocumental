"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Shield,
  Clock,
  Award,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Orientação Completa",
    description:
      "Checklists claros, revisão de dados e preparo de formulários para primeira via e renovação.",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Acompanhamento Ativo",
    description:
      "Suporte humano em cada etapa com comunicação transparente por e-mail ou telefone.",
    gradient: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50",
  },
  {
    icon: Shield,
    title: "Conformidade e Segurança",
    description:
      "Dados protegidos com criptografia. Operação em total conformidade com a LGPD.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Clock,
    title: "Processo Rápido",
    description:
      "Diagnóstico em minutos, documentação organizada e acompanhamento até a conclusão.",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Award,
    title: "Transparência de Preços",
    description:
      "Sem cobranças ocultas. Informamos todas as taxas governamentais e custos antecipadamente.",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    icon: Headphones,
    title: "Diagnóstico Gratuito",
    description:
      "Começamos entendendo sua necessidade sem custo para garantir que você saiba o que precisa.",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Nossos diferenciais
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-5">
            Por que escolher nosso serviço
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Especialistas em orientação de documentação com transparência total
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-hover group bg-white rounded-2xl p-7 border border-border relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative">
                <div
                  className={`w-13 h-13 ${feature.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 bg-gradient-to-br ${feature.gradient} bg-clip-text`} style={{ color: "inherit" }} />
                </div>
                <h3 className="text-lg font-bold text-text mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
