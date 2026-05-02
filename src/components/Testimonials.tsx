"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "O atendimento foi impecável. A equipe esclareceu todas as minhas dúvidas sobre a documentação e o processo ficou muito mais simples do que eu esperava.",
    name: "Mariana S.",
    role: "Primeira Via",
    location: "São Paulo, SP",
    rating: 5,
    initials: "MS",
    color: "bg-blue-500",
  },
  {
    text: "Profissionalismo do início ao fim. Consegui renovar meu passaporte sem perder tempo com informações desatualizadas. Valeu cada centavo.",
    name: "João P.",
    role: "Renovação",
    location: "Belo Horizonte, MG",
    rating: 5,
    initials: "JP",
    color: "bg-indigo-500",
  },
  {
    text: "Equipe atenciosa que me acompanhou em cada etapa. Me senti segura o tempo todo. Com certeza indicaria para amigos e familiares.",
    name: "Ana C.",
    role: "Primeira Via",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    initials: "AC",
    color: "bg-emerald-500",
  },
  {
    text: "Transparência total desde o início. Sem cobranças surpresa. O checklist que recebi evitou que eu precisasse voltar ao posto de atendimento.",
    name: "Carlos M.",
    role: "Renovação",
    location: "Curitiba, PR",
    rating: 5,
    initials: "CM",
    color: "bg-amber-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Avaliações reais de quem já utilizou nossa assessoria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-text-muted leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-semibold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
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
