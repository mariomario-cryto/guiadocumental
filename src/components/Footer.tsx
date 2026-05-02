import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Guia Documental"
                width={160}
                height={38}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Assessoria particular para orientação em documentação de
              passaporte brasileiro.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/assessoria-primeira-guia"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Primeira Via
                </Link>
              </li>
              <li>
                <Link
                  href="/assessoria-renovacao"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Renovação
                </Link>
              </li>
              <li>
                <Link
                  href="/acompanhar-pedido"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Acompanhar Pedido
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4" />
                contato@guiadocumental.org
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4" />
                (31) 3779-3600
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4" />
                Seg-Sex 9h-18h, Sáb 9h-14h
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                Atendimento Nacional
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Segurança
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Shield className="w-4 h-4 text-green-400" />
                Dados protegidos (SSL)
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Em conformidade com a LGPD
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Suas informações são protegidas com criptografia e armazenadas
                em conformidade com a legislação brasileira.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-xs text-slate-500 space-y-3">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link
                href="/politica-privacidade"
                className="hover:text-slate-300 transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="hover:text-slate-300 transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/politica-reembolso"
                className="hover:text-slate-300 transition-colors"
              >
                Reembolso
              </Link>
            </div>

            <div className="space-y-1">
              <p>
                <strong className="text-slate-400">Razão Social:</strong>{" "}
                53.679.740 DIEGO ARAUJO SILVA ME
              </p>
              <p>
                <strong className="text-slate-400">CNPJ:</strong>{" "}
                53.679.740/0001-62
              </p>
              <p>
                <strong className="text-slate-400">Endereço:</strong> Rua
                Hanuch Salum, 22 - Jardim Laura, São Paulo - SP, 08.142-300
              </p>
            </div>

            <p className="text-slate-600">
              Empresa privada de consultoria. Não somos vinculados a órgãos
              governamentais e não emitimos documentos oficiais.
            </p>

            <p className="text-slate-600">
              &copy; {new Date().getFullYear()} Guia Documental. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
