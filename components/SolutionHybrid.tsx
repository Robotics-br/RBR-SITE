import React from 'react';
import { Code2, Megaphone, X } from 'lucide-react';

const SolutionHybrid: React.FC = () => {
  return (
    <section id="solucoes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            O fim da barreira entre T.I. e Marketing.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Agências tradicionais não entendem de código. Fábricas de software não entendem de vendas. A RoboticsBr elimina os silos que travam seu crescimento.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-slate-200 items-center justify-center z-10 shadow-sm">
             <X size={20} className="text-slate-300" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* The Old Way (Left) */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300 md:mr-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                    <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">O Problema da Tecnologia Pura</h3>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✕</span>
                        Código perfeito, mas ninguém usa.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✕</span>
                        Foco em features, não em conversão.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✕</span>
                        Prazos longos que matam o time-to-market.
                    </li>
                </ul>
            </div>

            {/* The Old Way (Right) */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300 md:ml-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                    <Megaphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">O Problema do Marketing "Criativo"</h3>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">✕</span>
                        Ideias ótimas, execução técnica falha.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">✕</span>
                        Dependência de ferramentas prontas e limitadas.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">✕</span>
                        Dados desconectados da realidade.
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHybrid;