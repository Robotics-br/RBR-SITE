import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Calendar } from 'lucide-react';
import { blogPosts, getBlogPostBySlug, type BlogPost } from '@/data/blog';
import { markdownToHtml } from '@/lib/blog-markdown';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Post não encontrado' };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso + 'T12:00:00'));
  } catch {
    return iso;
  }
}

function categoryClass(category: string): string {
  const map: Record<string, string> = {
    Automação: 'bg-purple-100 text-purple-800 ring-purple-200',
    Tecnologia: 'bg-cyan-100 text-cyan-800 ring-cyan-200',
    'Inteligência de Dados': 'bg-emerald-100 text-emerald-800 ring-emerald-200',
  };
  return map[category] ?? 'bg-slate-100 text-slate-700 ring-slate-200';
}

function relatedFor(current: BlogPost): BlogPost[] {
  const others = blogPosts.filter((p) => p.slug !== current.slug);
  const same = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...same, ...rest].slice(0, 3);
}

const siteUrl = 'https://www.roboticsbr.com';

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const related = relatedFor(post);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RoboticsBr',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-gradient-to-b from-slate-900 to-indigo-950 pt-28 pb-8 text-white md:pt-32 md:pb-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav
            className="mb-6 flex flex-wrap items-center gap-1 text-sm text-indigo-200"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} className="mx-0.5 shrink-0 text-indigo-400" aria-hidden />
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <ChevronRight size={14} className="mx-0.5 shrink-0 text-indigo-400" aria-hidden />
            <span className="line-clamp-2 font-medium text-white">{post.title}</span>
          </nav>
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${categoryClass(post.category)} bg-opacity-90`}
          >
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-indigo-200">
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} />
              {post.readTime} de leitura
            </span>
          </div>
        </div>
      </section>

      <article className="bg-[#f6f9fc] py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose-custom rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-10 lg:p-12 [&_a]:text-indigo-600 [&_strong]:text-slate-900"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-100 bg-[#f6f9fc] pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-extrabold text-slate-900">Relacionados</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group block rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-md"
                >
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ring-1 ring-inset ${categoryClass(p.category)}`}
                  >
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-lg leading-snug font-bold text-slate-900 transition-colors group-hover:text-indigo-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
