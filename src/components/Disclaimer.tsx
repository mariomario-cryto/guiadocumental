import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border-y border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Importante:</strong> A Guia Documental é uma empresa privada
            de consultoria e assessoria documental. Não somos órgão do governo
            nem temos vínculo com a Polícia Federal ou órgãos governamentais. Não
            emitimos documentos oficiais. Você pode obter seu documento
            diretamente nos órgãos oficiais sem nosso serviço. Cobramos apenas
            pela assessoria e orientação.
          </p>
        </div>
      </div>
    </div>
  );
}
