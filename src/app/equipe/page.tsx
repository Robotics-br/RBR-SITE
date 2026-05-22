import TeamCarousel from '@/components/TeamCarousel';
import Link from 'next/link';

export default function EquipePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f9fc] pt-28 pb-20">
      <div className="mx-auto mb-0 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1">
          <span className="text-xs font-bold tracking-wide text-slate-600 uppercase">
            Experts em Crescimento
          </span>
        </div>
        <h1 className="mb-3 text-4xl font-bold text-slate-900 md:text-5xl">Nossa Equipe</h1>
        <p className="mx-auto mb-0 max-w-2xl text-slate-600">
          Conheça os especialistas dedicados a transformar sua visão em realidade.
        </p>
      </div>

      <TeamCarousel />

      <div className="mx-auto mt-4 max-w-3xl px-4 text-center">
        <h2 className="mb-2 text-2xl font-extrabold text-slate-900">Vamos trabalhar juntos?</h2>
        <p className="mb-4 text-slate-600">
          Saiba mais sobre nossa abordagem ou solicite um diagnóstico.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/sobre"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-800 transition-colors hover:bg-slate-50"
          >
            Sobre nós
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-bold text-white transition-colors hover:bg-indigo-700"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </div>
  );
}
