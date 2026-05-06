import type { Metadata } from 'next';
import Link from 'next/link';
import { cases } from '@/data/cases';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cases de Automação e Modernização',
  description: 'Conheça nossos cases de sucesso em automação de processos, inteligência de dados e modernização digital para empresas de diferentes segmentos.',
  keywords: ['cases automação', 'automação para empresas', 'cases de sucesso', 'modernização digital'],
};

export default function CasesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
            <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
              Resultados reais
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Cases de Modernização e Automação
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada projeto é uma transformação real. Conheça como ajudamos empresas a automatizar processos, reduzir custos e escalar operações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.slug}`}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-50 relative overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/90 text-white">
                  {caseItem.industry}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                  {caseItem.shortDescription}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">{caseItem.client}</span>
                  <span className="text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Ver case <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
