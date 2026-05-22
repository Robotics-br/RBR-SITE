import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f9fc] px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-slate-900">404</h1>
        <p className="mb-8 text-xl text-slate-600">
          Página não encontrada. O conteúdo pode ter sido movido ou não existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-700"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
