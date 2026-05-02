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
  Search,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const guias = [
  { href: "/assessoria-primeira-guia", label: "Primeira Via", icon: FileText },
  { href: "/assessoria-renovacao", label: "Renovação", icon: RefreshCw },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Guia Documental"
              width={180}
              height={43}
              className={`h-8 md:h-9 w-auto object-contain transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
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
              href="/acompanhar-pedido"
              className="btn-primary ml-3 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-xl"
            >
              <Search className="w-4 h-4" />
              Acompanhar Pedido
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-text-muted" : "text-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border pt-2 mt-2">
                <p className="px-3 py-1 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Guias
                </p>
                {guias.map((guia) => (
                  <Link
                    key={guia.href}
                    href={guia.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg"
                  >
                    <guia.icon className="w-4 h-4" />
                    {guia.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/acompanhar-pedido"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-3 px-4 py-2.5 text-sm font-semibold text-white bg-primary rounded-xl"
              >
                <Search className="w-4 h-4" />
                Acompanhar Pedido
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
