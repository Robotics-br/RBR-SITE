import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog - Modernização e Automação para Empresas',
  description: 'Artigos sobre automação, tecnologia e inteligência de dados para PMEs — RoboticsBr.',
};

const categoryStyles: Record<string, string> = {
  Automação: 'bg-purple-100 text-purple-800 ring-purple-200',
  Tecnologia: 'bg-cyan-100 text-cyan-800 ring-cyan-200',
  'Inteligência de Dados': 'bg-emerald-100 text-emerald-800 ring-emerald-200',
};

function categoryClass(category: string): string {
  return categoryStyles[category] ?? 'bg-slate-100 text-slate-700 ring-slate-200';
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(
      new Date(iso + 'T12:00:00'),
    );
  } catch {
    return iso;
  }
}

export default function BlogPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest mb-4">Insights</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">Blog</h1>
          <p className="mt-4 text-lg text-indigo-100/90 max-w-2xl mx-auto">
            Modernização, automação e dados — conteúdo prático para decisões no seu negócio.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f6f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all flex flex-col overflow-hidden"
              >
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <span
                    className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${categoryClass(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <h2 className="mt-4 text-xl font-extrabold text-slate-900 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-indigo-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} className="text-indigo-500" />
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} className="text-indigo-500" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    Ler artigo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
