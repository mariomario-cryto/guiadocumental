"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "O atendimento foi impecável. A equipe esclareceu todas as minhas dúvidas sobre a documentação e o processo ficou muito mais simples do que eu esperava.",
    name: "Mariana S.",
    role: "Primeira Via",
    location: "São Paulo, SP",
    rating: 5,
    initials: "MS",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    text: "Profissionalismo do início ao fim. Consegui renovar meu passaporte sem perder tempo com informações desatualizadas. Valeu cada centavo.",
    name: "João P.",
    role: "Renovação",
    location: "Belo Horizonte, MG",
    rating: 5,
    initials: "JP",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    text: "Equipe atenciosa que me acompanhou em cada etapa. Me senti segura o tempo todo. Com certeza indicaria para amigos e familiares.",
    name: "Ana C.",
    role: "Primeira Via",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    initials: "AC",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    text: "Transparência total desde o início. Sem cobranças surpresa. O checklist que recebi evitou que eu precisasse voltar ao posto de atendimento.",
    name: "Carlos M.",
    role: "Renovação",
    location: "Curitiba, PR",
    rating: 5,
    initials: "CM",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
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
              className="card-hover bg-surface rounded-2xl p-7 border border-border relative overflow-hidden"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-primary/5" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
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
