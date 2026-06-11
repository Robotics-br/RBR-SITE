import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SolutionHybrid from '@/components/SolutionHybrid';
import AudienceSegments from '@/components/AudienceSegments';
import TechPillars from '@/components/TechPillars';

export const metadata: Metadata = {
  title: 'Soluções - Automação, Mídias Sociais, BI e Growth integrados',
  description:
    'Conheça as soluções da RoboticsBr: automação de processos, gestão de mídias sociais, inteligência de dados e growth marketing em um único parceiro.',
  alternates: { canonical: 'https://www.roboticsbr.com/solucoes' },
};

export default function SolucoesPage() {
  return (
    <div className="bg-[#f6f9fc] pt-20">
      <section className="bg-gradient-to-b from-slate-900 to-indigo-950 pt-12 pb-8 text-white md:pt-16 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold tracking-widest text-indigo-300 uppercase">
            O que entregamos
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">Soluções integradas</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100/90">
            Quatro pilares que se conectam para resolver o que está travando sua empresa.
          </p>
        </div>
      </section>

      <SolutionHybrid />
      <AudienceSegments />
      <TechPillars />

      <section className="bg-white py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
            Vamos desenhar a solução certa para sua empresa?
          </h2>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-500"
          >
            Falar com especialista
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
