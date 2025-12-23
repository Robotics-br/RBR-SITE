import React from 'react';
import { Rocket, Building2, ArrowRight } from 'lucide-react';

const AudienceSegments: React.FC = () => {
  return (
    <section className="py-24 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Uma plataforma, múltiplas potências.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            
            {/* Card 1: Creators */}
            <div id="creators" className="group bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300">
                    <Rocket size={28} className="text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Para Criadores & Influencers</h3>
                <p className="text-slate-600 mb-8 leading-relaxed h-24">
                    Você foca no talento e na comunidade. Nós garantimos a tecnologia invisível: CRM, automação de vendas e análise de dados para monetizar sua audiência sem dor de cabeça.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                    Ver soluções para creators <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

            {/* Card 2: Business */}
            <div id="empresas" className="group bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors duration-300">
                    <Building2 size={28} className="text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Para Empresas em Escala</h3>
                <p className="text-slate-600 mb-8 leading-relaxed h-24">
                    Performance baseada em engenharia. Integramos seu ecossistema de vendas com desenvolvimento robusto para campanhas de marketing que trazem ROI real e mensurável.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 font-bold hover:text-purple-700 transition-colors">
                    Ver soluções corporativas <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

        </div>
      </div>
    </section>
  );
};

export default AudienceSegments;