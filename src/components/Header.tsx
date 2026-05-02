"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FileText,
  ChevronDown,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "Duvidas" },
];

const guias = [
  { href: "/assessoria-primeira-guia", label: "Primeira Via", icon: FileText },
  { href: "/assessoria-renovacao", label: "Renovacao", icon: RefreshCw },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guiasOpen, setGuiasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Guia Documental"
              width={180}
              height={43}
              className={`h-7 md:h-9 w-auto object-contain transition-all duration-300 ${
                scrolled || mobileOpen ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-text-muted hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Guias Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuiasOpen(true)}
              onMouseLeave={() => setGuiasOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-text-muted hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Guias
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${guiasOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {guiasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                  >
                    {guias.map((guia) => (
                      <Link
                        key={guia.href}
                        href={guia.href}
                        className="flex items-center justify-between gap-3 px-4 py-3.5 text-sm text-text-muted hover:text-primary hover:bg-primary/5 transition-colors group"
                      >
                        <span className="flex items-center gap-3">
                          <guia.icon className="w-4 h-4" />
                          {guia.label}
                        </span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/assessoria-primeira-guia"
              className="btn-primary ml-3 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-xl"
            >
              Comecar Agora
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-xl active:scale-95 transition-transform ${
              scrolled || mobileOpen ? "text-text" : "text-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-14 bg-white z-40 overflow-y-auto safe-bottom"
          >
            <div className="px-5 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3.5 text-base font-medium text-text-muted hover:text-primary hover:bg-primary/5 rounded-xl active:bg-primary/10"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-border pt-4 mt-4">
                <p className="px-4 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Guias
                </p>
                {guias.map((guia) => (
                  <Link
                    key={guia.href}
                    href={guia.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 text-base text-text-muted hover:text-primary hover:bg-primary/5 rounded-xl active:bg-primary/10"
                  >
                    <guia.icon className="w-5 h-5" />
                    {guia.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/assessoria-primeira-guia"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 text-base font-bold text-white bg-gradient-to-r from-accent to-amber-500 rounded-2xl active:scale-[0.98] transition-transform"
                >
                  <FileText className="w-5 h-5" />
                  Primeira Via
                </Link>
                <Link
                  href="/assessoria-renovacao"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 text-base font-semibold text-primary bg-primary/5 rounded-2xl border border-primary/20 active:scale-[0.98] transition-transform"
                >
                  <RefreshCw className="w-5 h-5" />
                  Renovacao
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
