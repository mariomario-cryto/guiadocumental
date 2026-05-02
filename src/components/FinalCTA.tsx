"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Phone, Shield } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#001d3d] via-primary-dark to-primary overflow-hidden noise-bg">
      {/* Orbs */}
      <div className="absolute top-10 left-[10%] w-64 h-64 bg-accent/15 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-primary-light/20 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-8 border border-white/10">
            <Shield className="w-4 h-4 text-accent" />
            Diagnóstico gratuito e sem compromisso
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Pronto para tirar seu
            <br />
            <span className="text-accent">passaporte?</span>
          </h2>

          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Comece com um diagnóstico gratuito. Sem compromisso, sem surpresas.
            Nossa equipe está pronta para te orientar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/assessoria-primeira-guia"
              className="btn-accent group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/30 text-lg"
            >
              <FileText className="w-5 h-5" />
              Começar agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+553137793600"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm text-lg"
            >
              <Phone className="w-5 h-5" />
              Ligar agora
            </a>
          </div>

          <p className="text-xs text-white/40">
            Empresa privada de assessoria. Serviço opcional. Garantia de 7 dias.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
