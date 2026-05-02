"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, CreditCard, RefreshCw, MapPin } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  icon: React.ElementType;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    title: "Sobre o Serviço",
    icon: FileText,
    items: [
      {
        question: "O que é o guia de documentos?",
        answer:
          "É um documento orientativo completo que fornece todas as informações necessárias para solicitar seu passaporte de forma correta e eficiente. Inclui passo a passo, documentação necessária e dicas para evitar erros.",
      },
      {
        question: "Este é um serviço oficial do governo?",
        answer:
          "Não. Somos uma empresa privada que oferece consultoria e orientação para facilitar o processo de solicitação de passaporte. Não temos vínculo com órgãos governamentais. O passaporte deve ser solicitado diretamente na Polícia Federal.",
      },
      {
        question: "Vocês emitem o passaporte?",
        answer:
          "Não emitimos passaportes. Fornecemos orientação completa para que você possa solicitar seu documento diretamente nos órgãos competentes com todas as informações corretas e atualizadas.",
      },
    ],
  },
  {
    title: "Pagamento e Entrega",
    icon: CreditCard,
    items: [
      {
        question: "Quanto tempo leva para receber o guia?",
        answer:
          "O guia é entregue instantaneamente por e-mail após a confirmação do pagamento. Você receberá um link para download do material completo em formato PDF.",
      },
      {
        question: "Quais formas de pagamento são aceitas?",
        answer:
          "Aceitamos cartão de crédito (até 12x), cartão de débito, PIX (com desconto) e boleto bancário. Todas as transações são processadas em ambiente seguro com criptografia.",
      },
    ],
  },
  {
    title: "Reembolso e Garantia",
    icon: RefreshCw,
    items: [
      {
        question: "Posso solicitar reembolso?",
        answer:
          "Sim, oferecemos garantia incondicional de 7 dias. Se não estiver satisfeito, devolvemos 100% do valor. Basta entrar em contato pelo nosso suporte.",
      },
      {
        question: "Como funciona o processo de reembolso?",
        answer:
          "Envie um e-mail para nosso suporte dentro de 7 dias após a compra. Processamos o reembolso em até 5 dias úteis, devolvendo o valor na mesma forma de pagamento utilizada.",
      },
    ],
  },
  {
    title: "Abrangência",
    icon: MapPin,
    items: [
      {
        question: "O guia funciona para qualquer estado?",
        answer:
          "Sim. Nosso guia contempla os procedimentos válidos para todos os estados brasileiros, incluindo particularidades regionais e postos de atendimento.",
      },
      {
        question: "Serve para primeira via e renovação?",
        answer:
          "Sim. Oferecemos guias específicos tanto para primeira via quanto para renovação, cada um com instruções detalhadas para seu caso.",
      },
    ],
  },
];

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm font-medium text-text group-hover:text-primary transition-colors pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-text-muted flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-muted leading-relaxed pb-4">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-text-muted">
            Tire suas dúvidas sobre nosso serviço de assessoria
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-text">
                  {category.title}
                </h3>
              </div>
              <div className="bg-surface rounded-xl border border-border px-5">
                {category.items.map((item) => (
                  <FAQItemComponent key={item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
