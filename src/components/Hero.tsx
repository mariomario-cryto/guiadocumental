"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, RefreshCw, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={ref}
      className="relative pt-24 pb-20 md:pt-36 md:pb-32 bg-gradient-to-br from-[#001d3d] via-primary-dark to-primary overflow-hidden noise-bg"
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-primary-light/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content - 3 cols */}
          <motion.div
            className="lg:col-span-3"
            style={{ y: contentY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-8 border border-white/10"
            >
              <Shield className="w-4 h-4 text-accent" />
              Empresa privada de assessoria
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Seu passaporte
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                sem complicação.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Orientação completa para primeira via e renovação.
              Checklist personalizado, revisão de dados e acompanhamento
              em cada etapa do processo.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <Link
                href="/assessoria-primeira-guia"
                className="btn-accent group inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg shadow-accent/25 text-base"
              >
                <FileText className="w-5 h-5" />
                Primeira Via
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/assessoria-renovacao"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm text-base"
              >
                <RefreshCw className="w-5 h-5" />
                Renovação
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Diagnóstico gratuito
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Garantia de 7 dias
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Suporte humano
              </span>
            </motion.div>
          </motion.div>

          {/* Image - 2 cols */}
          <motion.div
            className="hidden lg:flex lg:col-span-2 flex-col items-center gap-5"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/20 to-primary-light/20 rounded-3xl blur-2xl" />
              <Image
                src="/woman-pas.png"
                alt="Atendimento profissional em documentação de passaporte"
                width={400}
                height={476}
                className="relative rounded-2xl object-cover shadow-2xl shadow-black/30"
                priority
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Satisfação</p>
                  <p className="text-sm font-bold text-text">98% dos clientes</p>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/15 p-4">
              <div className="grid grid-cols-3 divide-x divide-white/10">
                <div className="text-center px-3">
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-xs text-white/50 mt-0.5">Clientes</p>
                </div>
                <div className="text-center px-3">
                  <p className="text-2xl font-bold text-accent">4.8</p>
                  <p className="text-xs text-white/50 mt-0.5">Avaliação</p>
                </div>
                <div className="text-center px-3">
                  <p className="text-2xl font-bold text-white">24h</p>
                  <p className="text-xs text-white/50 mt-0.5">Resposta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
