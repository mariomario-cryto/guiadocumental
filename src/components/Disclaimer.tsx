import { Zap } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center gap-3">
          <Zap className="w-4 h-4 text-primary flex-shrink-0" />
          <p className="text-sm text-text-muted leading-relaxed">
            <strong className="text-text">Assessoria especializada</strong> — descomplicamos e aceleramos cada etapa do seu passaporte com atendimento prioritário e acompanhamento individual.
          </p>
        </div>
      </div>
    </div>
  );
}
