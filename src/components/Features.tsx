"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "✅",
    title: "Orientação Completa",
    description:
      "Checklists claros, revisão de dados e preparo de formulários para primeira via e renovação.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
  {
    emoji: "👥",
    title: "Acompanhamento Ativo",
    description:
      "Suporte humano em cada etapa com comunicação transparente por e-mail ou telefone.",
    gradient: "from-violet-500 to-indigo-400",
    glow: "shadow-violet-500/20",
  },
  {
    emoji: "🔒",
    title: "Conformidade e Segurança",
    description:
      "Dados protegidos com criptografia. Operação em total conformidade com a LGPD.",
    gradient: "from-emerald-500 to-teal-400",
    glow: "shadow-emerald-500/20",
  },
  {
    emoji: "⚡",
    title: "Processo Rápido",
    description:
      "Diagnóstico em minutos, documentação organizada e acompanhamento até a conclusão.",
    gradient: "from-amber-500 to-orange-400",
    glow: "shadow-amber-500/20",
  },
  {
    emoji: "💎",
    title: "Transparência de Preços",
    description:
      "Sem cobranças ocultas. Informamos todas as taxas governamentais e custos antecipadamente.",
    gradient: "from-sky-500 to-blue-400",
    glow: "shadow-sky-500/20",
  },
  {
    emoji: "🎯",
    title: "Diagnóstico Gratuito",
    description:
      "Começamos entendendo sua necessidade sem custo para garantir que você saiba o que precisa.",
    gradient: "from-rose-500 to-pink-400",
    glow: "shadow-rose-500/20",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            Nossos diferenciais
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-5">
            Por que escolher nosso serviço
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Especialistas em orientação de documentação com transparência total
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-gradient-border card-lift group p-7 rounded-2xl"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg ${feature.glow} group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              <h3 className="text-lg font-bold text-text mb-2.5">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
