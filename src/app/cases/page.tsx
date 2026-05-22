import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cases } from '@/data/cases';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cases de Automação e Modernização',
  description:
    'Conheça nossos cases de sucesso em automação de processos, inteligência de dados e modernização digital para empresas de diferentes segmentos.',
  keywords: [
    'cases automação',
    'automação para empresas',
    'cases de sucesso',
    'modernização digital',
  ],
  alternates: { canonical: 'https://www.roboticsbr.com/cases' },
};

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
            <span className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
              Resultados reais
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Cases de Modernização e Automação
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Cada projeto é uma transformação real. Conheça como ajudamos empresas a automatizar
            processos, reduzir custos e escalar operações.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.slug}`}
              className="group flex transform flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-50">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-semibold text-white">
                  {caseItem.industry}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  {caseItem.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {caseItem.shortDescription}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-400">{caseItem.client}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1">
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
