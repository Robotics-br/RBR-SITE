import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cases, getCaseBySlug, getRelatedCases } from '@/data/cases';
import { ArrowLeft, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) return { title: 'Case não encontrado' };

  return {
    title: `${caseStudy.title} - Case de Sucesso`,
    description: caseStudy.shortDescription,
    keywords: [caseStudy.industry, 'automação', 'case de sucesso', ...caseStudy.technologies],
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.shortDescription,
      type: 'article',
      images: [{ url: caseStudy.image }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) notFound();

  const relatedCases = getRelatedCases(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.shortDescription,
    author: { '@type': 'Organization', name: 'RoboticsBr' },
    publisher: { '@type': 'Organization', name: 'RoboticsBr' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/cases" className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para cases
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
                {caseStudy.industry}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                {caseStudy.client}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {caseStudy.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Clock size={14} />
                <span className="text-xs font-semibold uppercase">Duração</span>
              </div>
              <p className="text-lg font-bold text-slate-900">{caseStudy.duration}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Users size={14} />
                <span className="text-xs font-semibold uppercase">Setor</span>
              </div>
              <p className="text-lg font-bold text-slate-900">{caseStudy.industry}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <CheckCircle2 size={14} />
                <span className="text-xs font-semibold uppercase">Status</span>
              </div>
              <p className="text-lg font-bold text-emerald-600">Concluído</p>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-slate-100">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">O Desafio</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">{caseStudy.problem}</p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">A Solução</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">{caseStudy.solution}</p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Resultados</h2>
            <ul className="space-y-3 mb-8">
              {caseStudy.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-lg">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {caseStudy.testimonial && (
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12 border border-indigo-100">
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-4 italic">
                &ldquo;{caseStudy.testimonial.text}&rdquo;
              </blockquote>
              <p className="text-sm font-bold text-slate-900">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-slate-500">{caseStudy.testimonial.role}</p>
            </div>
          )}

          <div className="mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Tecnologias utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center text-white mb-16">
            <h3 className="text-2xl font-bold mb-4">Quer resultados similares na sua empresa?</h3>
            <p className="text-indigo-200 mb-6">Agende um diagnóstico gratuito e descubra o potencial de automação do seu negócio.</p>
            <Link href="/contato" className="inline-flex items-center px-8 py-4 text-base font-bold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all">
              Agendar Diagnóstico Gratuito
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          {relatedCases.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Cases relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedCases.map((rc) => (
                  <Link
                    key={rc.id}
                    href={`/cases/${rc.slug}`}
                    className="group bg-slate-50 rounded-xl p-5 border border-slate-100 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-semibold text-indigo-600 uppercase">{rc.industry}</span>
                    <h4 className="text-base font-bold text-slate-900 mt-2 group-hover:text-indigo-600 transition-colors">
                      {rc.title}
                    </h4>
                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">{rc.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
