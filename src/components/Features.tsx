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
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Acompanhamento Ativo",
    description:
      "Suporte humano em cada etapa com comunicação transparente por e-mail ou telefone.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Shield,
    title: "Conformidade e Segurança",
    description:
      "Dados protegidos com criptografia. Operação em conformidade com a LGPD.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Clock,
    title: "Processo Rápido",
    description:
      "Diagnóstico em minutos, documentação organizada e acompanhamento até a conclusão.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Award,
    title: "Transparência de Preços",
    description:
      "Sem cobranças ocultas. Informamos todas as taxas governamentais e custos antecipadamente.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Headphones,
    title: "Diagnóstico Gratuito",
    description:
      "Começamos entendendo sua necessidade sem custo para garantir que você saiba exatamente o que precisa.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Features() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Por que escolher nosso serviço
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Especialistas em orientação de documentação com transparência total
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
