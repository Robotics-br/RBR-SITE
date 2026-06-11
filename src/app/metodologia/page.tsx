import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Methodology from '@/components/Methodology';

export const metadata: Metadata = {
  title: 'Metodologia em 3 fases - Diagnóstico, Implementação e Acompanhamento',
  description:
    'Conheça a metodologia da RoboticsBr: diagnóstico de eficiência em 7 dias, implementação em 10-15 dias e acompanhamento quinzenal contínuo.',
  alternates: { canonical: 'https://www.roboticsbr.com/metodologia' },
};

export default function MetodologiaPage() {
  return (
    <div className="bg-[#f6f9fc] pt-20">
      <section className="bg-gradient-to-b from-slate-900 to-indigo-950 pt-12 pb-8 text-white md:pt-16 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold tracking-widest text-indigo-300 uppercase">
            Como funcionamos
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">Nossa metodologia</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100/90">
            Três fases simples e mensuráveis para modernizar sua empresa sem complexidade
            desnecessária.
          </p>
        </div>
      </section>

      <Methodology />

      <section className="bg-slate-900 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Pronto para começar?</h2>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-500"
          >
            Quero meu Diagnóstico de Eficiência Gratuito
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
