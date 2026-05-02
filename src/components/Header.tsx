"use client";

import { useState } from "react";
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
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const guias = [
  {
    href: "/assessoria-primeira-guia",
    label: "Primeira Via",
    icon: FileText,
  },
  {
    href: "/assessoria-renovacao",
    label: "Renovação",
    icon: RefreshCw,
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guiasOpen, setGuiasOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Guia Documental"
              width={180}
              height={43}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors rounded-lg hover:bg-accent"
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
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors rounded-lg hover:bg-accent">
                Guias
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${guiasOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {guiasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-border overflow-hidden"
                  >
                    {guias.map((guia) => (
                      <Link
                        key={guia.href}
                        href={guia.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-text-muted hover:text-primary hover:bg-accent transition-colors"
                      >
                        <guia.icon className="w-4 h-4" />
                        {guia.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/acompanhar-pedido"
              className="ml-2 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
            >
              <Search className="w-4 h-4" />
              Acompanhar Pedido
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-muted hover:text-primary"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
                  className="block px-3 py-2.5 text-sm font-medium text-text-muted hover:text-primary hover:bg-accent rounded-lg"
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
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-text-muted hover:text-primary hover:bg-accent rounded-lg"
                  >
                    <guia.icon className="w-4 h-4" />
                    {guia.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/acompanhar-pedido"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-3 px-4 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg"
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
