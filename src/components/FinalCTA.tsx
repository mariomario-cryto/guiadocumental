"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="como-comecar" className="relative py-16 md:py-28 bg-gradient-to-br from-[#001229] via-[#001d3d] to-primary-dark overflow-hidden">
      {/* Ambient - hidden on mobile for performance */}
      <div className="hidden md:block">
        <div className="absolute top-10 left-[10%] w-72 h-72 bg-accent/12 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-sky-400/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 bg-white/8 backdrop-blur-sm rounded-full text-white/70 text-xs md:text-sm font-medium mb-6 md:mb-8 border border-white/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Diagnostico gratuito e sem compromisso
          </div>

          <h2 className="text-[1.75rem] leading-tight sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-5 md:mb-7">
            Pronto para tirar seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
              passaporte?
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-300/70 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Comece com um diagnostico gratuito. Sem compromisso, sem surpresas.
            Nossa equipe esta pronta para te orientar.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
            <Link
              href="/assessoria-primeira-guia"
              className="cta-glow cta-shimmer btn-accent group inline-flex items-center justify-center gap-2.5 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-accent to-amber-500 text-white font-bold rounded-2xl text-base md:text-lg"
            >
              Primeira Via
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
            <Link
              href="/assessoria-renovacao"
              className="btn-secondary inline-flex items-center justify-center gap-2.5 px-8 py-4 md:px-8 md:py-5 bg-white/8 text-white font-semibold rounded-2xl border border-white/15 backdrop-blur-sm text-base md:text-lg hover:bg-white/15"
            >
              <RefreshCw className="w-5 h-5" />
              Renovacao
            </Link>
          </div>

          <p className="text-xs text-white/30">
            Atendimento prioritário &middot; Acompanhamento individual &middot; Garantia de 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
}
