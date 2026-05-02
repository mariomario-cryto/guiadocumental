"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, RefreshCw, Shield, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Empresa privada de assessoria
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Seu passaporte
              <br />
              <span className="text-white/80">sem complicação</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Assessoria particular e opcional para orientação em documentação.
              Ajudamos você a entender cada etapa e reunir a documentação
              correta com segurança e organização.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/assessoria-primeira-guia"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg shadow-black/10"
              >
                <FileText className="w-5 h-5" />
                Primeira Via
              </Link>
              <Link
                href="/assessoria-renovacao"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-colors border border-white/20"
              >
                <RefreshCw className="w-5 h-5" />
                Renovação
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Diagnóstico gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Garantia de 7 dias
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Suporte humano
              </span>
            </div>
          </motion.div>

          {/* Image + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
              <Image
                src="/woman-pas.png"
                alt="Atendimento profissional em documentação de passaporte"
                width={420}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>

            {/* Stats bar below image */}
            <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4">
              <div className="grid grid-cols-3 divide-x divide-white/15">
                <div className="text-center px-3">
                  <p className="text-xl font-bold text-white">500+</p>
                  <p className="text-xs text-white/60 mt-0.5">Clientes</p>
                </div>
                <div className="text-center px-3">
                  <p className="text-xl font-bold text-white">4.8</p>
                  <p className="text-xs text-white/60 mt-0.5">Avaliação</p>
                </div>
                <div className="text-center px-3">
                  <p className="text-xl font-bold text-white">98%</p>
                  <p className="text-xs text-white/60 mt-0.5">Satisfação</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
