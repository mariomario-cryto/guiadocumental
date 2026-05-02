"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_KEY = "guiadoc_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // localStorage not available
    }
  }, []);

  function handleConsent(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 safe-bottom"
        >
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-border p-4 md:p-5">
            <p className="text-sm text-text-muted mb-3 md:mb-4">
              Usamos cookies para melhorar sua experiencia.{" "}
              <Link
                href="/politica-privacidade"
                className="text-primary underline"
              >
                Saiba mais
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleConsent("rejected")}
                className="flex-1 sm:flex-none px-4 py-3 md:py-2 text-sm font-medium text-text-muted border border-border rounded-xl md:rounded-lg active:bg-surface transition-colors"
              >
                Rejeitar
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="flex-1 sm:flex-none px-4 py-3 md:py-2 text-sm font-medium text-white bg-primary rounded-xl md:rounded-lg active:bg-primary-dark transition-colors"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
