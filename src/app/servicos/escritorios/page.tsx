import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase, FileText, FolderTree, Scale, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automação para Escritórios de Advocacia e Documentos',
  description:
    'Automação para escritórios de advocacia e contábeis: classificação de documentos, geração de propostas e fluxos repetitivos com governança e rastreabilidade.',
  keywords: [
    'automação para escritórios de advocacia',
    'automação de documentos',
    'classificação automática documentos',
    'automação propostas comerciais',
    'processos escritório advocacia',
  ],
  alternates: { canonical: 'https://www.roboticsbr.com/servicos/escritorios' },
  openGraph: {
    title: 'Automação para Escritórios e Documentos | RoboticsBr',
    description:
      'Menos tempo em papelada repetitiva; mais tempo para análise estratégica e relacionamento com cliente.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const benefits = [
  {
    icon: FolderTree,
    title: 'Documentos organizados na chegada',
    text: 'Triagem e classificação automática direcionam petições, contratos e comprovantes para a pasta ou etapa certa do processo.',
  },
  {
    icon: FileText,
    title: 'Propostas com padrão de escritório',
    text: 'Modelos inteligentes puxam dados do CRM ou planilhas e geram PDFs consistentes com marca e cláusulas revisadas.',
  },
  {
    icon: Scale,
    title: 'Feito para compliance e auditoria',
    text: 'Fluxos registram quem aprovou o quê, versionamento e integrações sem jogar dados sensíveis em ferramentas inadequadas.',
  },
  {
    icon: Zap,
    title: 'Menos cliques entre departamentos',
    text: 'Áreas administrativa, financeira e jurídica deixam de ser gargalo com handoffs automáticos e lembretes.',
  },
];

const faq = [
  {
    q: 'Automação para escritórios de advocacia fere sigilo ou ética da OAB?',
    a: 'Projetamos com base em necessidade jurídica, mínima coleta de dados e ferramentas adequadas ao tratamento confidencial. Detalhes de arquitetura e fornecedores são alinhados com a política do escritório antes do go-live.',
  },
  {
    q: 'Dá para automatizar documentos que hoje são 100% manuais?',
    a: 'Quando há padrão — campos recorrentes, modelos estáveis, origem estruturada — automatizamos grande parte. Textos genuinamente criativos ou altamente contextuais continuam com profissional, com apoio de ferramentas onde fizer sentido.',
  },
  {
    q: 'Escritórios contábeis também se beneficiam?',
    a: 'Sim. Muita carga é repetitiva: classificação de documentos de clientes, conferência de lançamentos, pacotes para obligações. Os fluxos são parecidos com os de serviços jurídicos, com regras fiscais como insumo.',
  },
  {
    q: 'Quanto de mudança cultural isso exige?',
    a: 'Tecnologia sem processo vira frustração. Por isso envolvemos sócios e operação desde o desenho, com piloto em um time antes de escalar.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function ServicosEscritoriosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[#f6f9fc] pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
              <span className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
                Serviços profissionais
              </span>
            </div>
            <h1 className="mb-4 text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl">
              Automação para escritórios de advocacia e automação de documentos que libera o time
              sênior
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Da triagem de petições à geração de{' '}
              <strong className="font-semibold text-slate-800">propostas comerciais</strong>,
              unificamos{' '}
              <strong className="font-semibold text-slate-800">automação de documentos</strong> e
              processos internos para escritórios que vendem expertise, não digitadoria infinita.
            </p>
          </div>

          <section className="mb-10 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">O que dói no dia a dia</h2>
            <p className="mb-4 leading-relaxed text-slate-600">
              Documentos chegam por e-mail, WhatsApp e portal sem padrão. Alguém renomeia arquivo na
              pressa, outro alimenta planilha duplicada e a proposta comercial sai tarde demais.
              Sócios e supervisores gastam horas revisando a mesma formatação em vez de conteúdo
              jurídico ou estratégico de verdade.
            </p>
            <p className="leading-relaxed text-slate-600">
              <strong className="font-semibold text-slate-800">
                Automação para escritórios de advocacia
              </strong>{' '}
              e contábeis não é sobre substituir advogados ou contadores — é sobre eliminar atrito
              operacional que ninguém lembra por ter escolhido a profissão.
            </p>
          </section>

          <section className="mb-10 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Como a RoboticsBr ajuda</h2>
            <p className="mb-4 leading-relaxed text-slate-700">
              Mapeamos entradas (e-mail, drives, sistemas), definimos classificação e destino, e
              conectamos geração de documentos a fontes de verdade. Para propostas, ligamos
              formulários ou CRM a templates aprovados por compliance, com trilha de versão e
              assinatura quando necessário.
            </p>
            <p className="leading-relaxed text-slate-700">
              Tudo com visão modular: você pode começar pela triagem ou pela proposta comercial e
              expandir para financeiro e cobrança no ritmo do escritório.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Benefícios em evidência</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                      <Icon className="h-6 w-6 text-indigo-700" aria-hidden />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-slate-900">{b.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{b.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-12 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-start gap-3">
              <Briefcase className="h-8 w-8 flex-shrink-0 text-indigo-600" aria-hidden />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-900">Cases relacionados</h2>
                <p className="mb-4 text-sm text-slate-600">
                  Resultados concretos em propostas comerciais automatizadas e triagem inteligente
                  de documentos.
                </p>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/cases/automacao-propostas-comerciais"
                      className="inline-flex items-center font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                      Automação de propostas comerciais
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cases/automacao-triagem-documentos"
                      className="inline-flex items-center font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                      Automação de triagem de documentos
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Perguntas frequentes</h2>
            <div className="space-y-8">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="border-b border-slate-200 pb-8 last:border-0 last:pb-0"
                >
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{item.q}</h3>
                  <p className="leading-relaxed text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-slate-900 p-8 text-center text-white md:p-10">
            <h2 className="mb-3 text-2xl font-bold">
              Vamos desenhar o fluxo ideal para o seu escritório?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-indigo-200">
              Explique como documentos e propostas circulam hoje — montamos um diagnóstico com ROI e
              riscos transparentes.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-indigo-500"
            >
              Falar com a RoboticsBr
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
