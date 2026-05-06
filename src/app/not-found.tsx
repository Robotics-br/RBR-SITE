import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f9fc] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">
          Página não encontrada. O conteúdo pode ter sido movido ou não existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 text-base font-bold rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
