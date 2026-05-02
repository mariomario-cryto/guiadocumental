"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "O atendimento foi impecável. A equipe esclareceu todas as minhas dúvidas sobre a documentação e o processo ficou muito mais simples do que eu esperava.",
    name: "Mariana S.",
    role: "Primeira Via",
    location: "São Paulo, SP",
    initials: "MS",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    text: "Profissionalismo do início ao fim. Consegui renovar meu passaporte sem perder tempo com informações desatualizadas. Valeu cada centavo.",
    name: "João P.",
    role: "Renovação",
    location: "Belo Horizonte, MG",
    initials: "JP",
    gradient: "from-violet-500 to-indigo-400",
  },
  {
    text: "Equipe atenciosa que me acompanhou em cada etapa. Me senti segura o tempo todo. Com certeza indicaria para amigos e familiares.",
    name: "Ana C.",
    role: "Primeira Via",
    location: "Rio de Janeiro, RJ",
    initials: "AC",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    text: "Transparência total desde o início. Sem cobranças surpresa. O checklist que recebi evitou que eu precisasse voltar ao posto de atendimento.",
    name: "Carlos M.",
    role: "Renovação",
    location: "Curitiba, PR",
    initials: "CM",
    gradient: "from-amber-500 to-orange-400",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-5">
            O que nossos clientes dizem
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Avaliações de quem já utilizou nossa assessoria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient-border card-lift bg-white rounded-2xl p-7 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-5 right-6 text-5xl font-serif text-primary/[0.06] leading-none select-none">
                &ldquo;
              </span>

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-text leading-relaxed mb-7 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-text">{t.name}</p>
                  <p className="text-xs text-text-muted">
                    {t.role} &middot; {t.location}
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
