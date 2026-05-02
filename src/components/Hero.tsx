"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      className="relative pt-20 pb-14 md:pt-36 md:pb-32 bg-gradient-to-br from-[#001229] via-[#001d3d] to-primary-dark overflow-hidden"
    >
      {/* Ambient orbs - hidden on mobile for performance */}
      <div className="hidden md:block">
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div className="lg:col-span-3" style={{ y: contentY }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 bg-white/8 backdrop-blur-md rounded-full text-white/80 text-xs md:text-sm font-medium mb-6 md:mb-8 border border-white/10"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Empresa privada de assessoria
            </motion.div>

            <motion.h1
              className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight mb-5 md:mb-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Seu passaporte
              </motion.span>
              <motion.span
                className="block mt-1"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
                  sem complicação.
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-slate-300/80 mb-8 md:mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Orientacao completa para primeira via e renovacao.
              Checklist personalizado, revisao de dados e acompanhamento
              em cada etapa.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              {/* CTA Principal */}
              <Link
                href="/assessoria-primeira-guia"
                className="cta-glow cta-shimmer btn-accent group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-accent to-amber-500 text-white font-bold rounded-2xl text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
                Primeira Via
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>

              <Link
                href="/assessoria-renovacao"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/8 text-white font-semibold rounded-2xl border border-white/15 backdrop-blur-sm text-base hover:bg-white/15"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                </svg>
                Renovacao
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8 md:gap-y-3 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {["Diagnostico gratuito", "Garantia de 7 dias", "Suporte humano"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Mobile: image + stats */}
            <motion.div
              className="mt-8 lg:hidden flex items-center gap-4 bg-white/6 backdrop-blur-md rounded-2xl border border-white/10 p-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Image
                src="/woman-pas.png"
                alt="Atendimento profissional"
                width={72}
                height={86}
                className="rounded-xl object-cover w-[72px] h-[86px] shrink-0 ring-1 ring-white/10"
              />
              <div className="grid grid-cols-3 divide-x divide-white/10 flex-1">
                {[
                  { value: "500+", label: "Clientes" },
                  { value: "24h", label: "Resposta" },
                  { value: "7 dias", label: "Garantia" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center px-1.5">
                    <p className="text-base font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] text-white/40 mt-0.5 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image - desktop only */}
          <motion.div
            className="hidden lg:flex lg:col-span-2 flex-col items-center gap-5"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/15 via-sky-400/10 to-primary-light/15 rounded-[2rem] blur-3xl" />
              <Image
                src="/woman-pas.png"
                alt="Atendimento profissional em documentacao de passaporte"
                width={400}
                height={476}
                className="relative rounded-2xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10"
                priority
              />

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3.5 shadow-2xl flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-text-muted font-medium">Satisfacao</p>
                  <p className="text-sm font-bold text-text">98% dos clientes</p>
                </div>
              </motion.div>

              {/* Top right badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-white rounded-xl px-3 py-2 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-accent fill-accent" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="text-xs font-bold text-text ml-1">4.8</span>
                </div>
              </motion.div>
            </div>

            {/* Stats - desktop */}
            <div className="w-full bg-white/6 backdrop-blur-md rounded-2xl border border-white/10 p-5">
              <div className="grid grid-cols-3 divide-x divide-white/10">
                {[
                  { value: "500+", label: "Clientes" },
                  { value: "24h", label: "Resposta" },
                  { value: "7 dias", label: "Garantia" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center px-3">
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-[11px] text-white/40 mt-0.5 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
