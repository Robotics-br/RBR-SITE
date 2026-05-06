import TeamCarousel from '@/components/TeamCarousel';
import Link from 'next/link';

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-0">
        <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 mb-4">
          <span className="text-xs font-bold tracking-wide uppercase text-slate-600">
            Experts em Crescimento
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Nossa Equipe</h1>
        <p className="text-slate-600 max-w-2xl mx-auto mb-0">
          Conheça os especialistas dedicados a transformar sua visão em realidade.
        </p>
      </div>

      <TeamCarousel />

      <div className="max-w-3xl mx-auto px-4 text-center mt-4">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Vamos trabalhar juntos?</h2>
        <p className="text-slate-600 mb-4">
          Saiba mais sobre nossa abordagem ou solicite um diagnóstico.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/sobre" className="inline-flex justify-center items-center px-6 py-3 rounded-full border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition-colors">
            Sobre nós
          </Link>
          <Link href="/contato" className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors">
            Fale conosco
          </Link>
        </div>
      </div>
    </div>
  );
}
