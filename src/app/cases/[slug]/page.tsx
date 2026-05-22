import type { Metadata } from 'next';
import Image from 'next/image';
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

      <article className="min-h-screen bg-white pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/cases"
            className="mb-8 inline-flex items-center text-sm text-slate-500 transition-colors hover:text-indigo-600"
          >
            <ArrowLeft size={16} className="mr-2" />
            Voltar para cases
          </Link>

          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                {caseStudy.industry}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {caseStudy.client}
              </span>
            </div>
            <h1 className="mb-4 text-3xl leading-tight font-extrabold text-slate-900 md:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">{caseStudy.shortDescription}</p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="mb-1 flex items-center gap-2 text-slate-500">
                <Clock size={14} />
                <span className="text-xs font-semibold uppercase">Duração</span>
              </div>
              <p className="text-lg font-bold text-slate-900">{caseStudy.duration}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="mb-1 flex items-center gap-2 text-slate-500">
                <Users size={14} />
                <span className="text-xs font-semibold uppercase">Setor</span>
              </div>
              <p className="text-lg font-bold text-slate-900">{caseStudy.industry}</p>
            </div>
            <div className="col-span-2 rounded-xl border border-slate-100 bg-slate-50 p-4 md:col-span-1">
              <div className="mb-1 flex items-center gap-2 text-slate-500">
                <CheckCircle2 size={14} />
                <span className="text-xs font-semibold uppercase">Status</span>
              </div>
              <p className="text-lg font-bold text-emerald-600">Concluído</p>
            </div>
          </div>

          <div className="relative mb-12 h-64 overflow-hidden rounded-2xl bg-slate-100 md:h-96">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
          </div>

          <div className="prose prose-slate mb-12 max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">O Desafio</h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">{caseStudy.problem}</p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">A Solução</h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">{caseStudy.solution}</p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">Resultados</h2>
            <ul className="mb-8 space-y-3">
              {caseStudy.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                  <span className="text-lg text-slate-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {caseStudy.testimonial && (
            <div className="mb-12 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
              <blockquote className="mb-4 text-lg leading-relaxed text-slate-700 italic">
                &ldquo;{caseStudy.testimonial.text}&rdquo;
              </blockquote>
              <p className="text-sm font-bold text-slate-900">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-slate-500">{caseStudy.testimonial.role}</p>
            </div>
          )}

          <div className="mb-12">
            <h3 className="mb-4 text-lg font-bold text-slate-900">Tecnologias utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16 rounded-2xl bg-slate-900 p-8 text-center text-white">
            <h3 className="mb-4 text-2xl font-bold">Quer resultados similares na sua empresa?</h3>
            <p className="mb-6 text-indigo-200">
              Agende um diagnóstico gratuito e descubra o potencial de automação do seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-indigo-500"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          {relatedCases.length > 0 && (
            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Cases relacionados</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedCases.map((rc) => (
                  <Link
                    key={rc.id}
                    href={`/cases/${rc.slug}`}
                    className="group rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all hover:shadow-md"
                  >
                    <span className="text-xs font-semibold text-indigo-600 uppercase">
                      {rc.industry}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                      {rc.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                      {rc.shortDescription}
                    </p>
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
