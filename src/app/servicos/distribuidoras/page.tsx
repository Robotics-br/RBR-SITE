import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, GitBranch, PackageSearch, Route, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automação para Distribuidoras e BI para Operação',
  description:
    'Automação para distribuidoras: integração ERP, CRM e logística, dashboard de BI para distribuidoras, processamento de pedidos e otimização de rotas.',
  keywords: [
    'automação para distribuidoras',
    'dashboard de BI para distribuidoras',
    'integração ERP CRM logística',
    'processamento automático de pedidos',
    'otimização de rotas distribuição',
  ],
  alternates: { canonical: 'https://www.roboticsbr.com/servicos/distribuidoras' },
  openGraph: {
    title: 'Automação para Distribuidoras | RoboticsBr',
    description:
      'Unifique dados, acelere pedidos e enxergue a operação em tempo real com integrações e painéis sob medida.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const benefits = [
  {
    icon: GitBranch,
    title: 'Sistemas que finalmente conversam',
    text: 'ERP, CRM e ferramentas de logística deixam de ser ilhas — menos planilha paralela e menos retrabalho entre setores.',
  },
  {
    icon: BarChart3,
    title: 'BI que direciona a distribuição',
    text: 'Um dashboard de BI para distribuidoras mostra estoque, giro, inadimplência e performance de rotas no mesmo lugar.',
  },
  {
    icon: PackageSearch,
    title: 'Pedidos com menos atrito',
    text: 'Validação, alçadas e integração com expedição podem ser orquestradas para reduzir erro e tempo de ciclo.',
  },
  {
    icon: Route,
    title: 'Rotas e logística mais inteligentes',
    text: 'Apoiamos fluxos que alimentam decisões de roteirização e priorização com dados frescos da operação.',
  },
];

const faq = [
  {
    q: 'Automação para distribuidoras exige trocar o ERP?',
    a: 'Na maioria dos projetos, não. Trabalhamos com o que você já tem, usando APIs, arquivos ou conectores — e só sugerimos troca quando o ganho compensa o risco.',
  },
  {
    q: 'Quanto tempo até o primeiro dashboard de BI útil?',
    a: 'Depende da qualidade dos dados de origem. Muitas equipes começam com um MVP de painéis em semanas, refinando KPIs depois de validar com diretoria e operação.',
  },
  {
    q: 'Como fica a segurança das integrações?',
    a: 'Mapeamos permissões, ambiente de homologação e trilhas de auditoria. Integrações seguem o princípio do mínimo privilégio e monitoração de falhas.',
  },
  {
    q: 'Vocês também automatizam faturamento e cobrança?',
    a: 'Sim, quando faz parte do fluxo comercial-operacional. O escopo é definido junto com você para não criar dependências frágeis entre times.',
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

export default function ServicosDistribuidorasPage() {
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
                Distribuição
              </span>
            </div>
            <h1 className="mb-4 text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl">
              Automação para distribuidoras com BI e integração de ponta a ponta
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Unifique{' '}
              <strong className="font-semibold text-slate-800">ERP, CRM e logística</strong>, ganhe
              um{' '}
              <strong className="font-semibold text-slate-800">
                dashboard de BI para distribuidoras
              </strong>{' '}
              e trate pedidos com previsibilidade — do pedido ao carregamento.
            </p>
          </div>

          <section className="mb-10 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Onde a operação trava</h2>
            <p className="mb-4 leading-relaxed text-slate-600">
              Pedidos chegam por vários canais, o ERP não conversa com o CRM e o time comercial não
              vê o mesmo estoque que o CD. Relatórios nascem de planilhas frágeis, rotas são
              montadas no feeling e o retrabalho entre expedição, financeiro e vendas come a margem.
            </p>
            <p className="leading-relaxed text-slate-600">
              A boa notícia:{' '}
              <strong className="font-semibold text-slate-800">
                automação para distribuidoras
              </strong>{' '}
              não é luxo de gigante — é orquestração de processos e dados com ferramentas modernas e
              projeto enxuto.
            </p>
          </section>

          <section className="mb-10 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">O que a RoboticsBr oferece</h2>
            <p className="mb-4 leading-relaxed text-slate-700">
              Desenhamos integrações resilientes (filas, retries, alertas) e camadas de dados que
              alimentam painéis executivos e operacionais. Automatizamos etapas repetitivas do ciclo
              do pedido — conferência, gatilhos de separação, notificações a transportadoras ou
              clientes — sempre alinhado ao seu processo real.
            </p>
            <p className="leading-relaxed text-slate-700">
              Para logística, estruturamos insumos para decisões de rota e priorização com base no
              que seu time já validou, evitando &quot;caixa preta&quot; que ninguém confia.
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
              <Truck className="h-8 w-8 flex-shrink-0 text-indigo-600" aria-hidden />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-900">Cases relacionados</h2>
                <p className="mb-4 text-sm text-slate-600">
                  Veja projetos reais de inteligência de dados e integração entre sistemas
                  corporativos.
                </p>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/cases/dashboard-inteligencia-dados"
                      className="inline-flex items-center font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                      Dashboard e inteligência de dados
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cases/integracao-inteligente-sistemas"
                      className="inline-flex items-center font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                      Integração inteligente de sistemas
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
              Quer um plano claro para integrar e enxergar a operação?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-indigo-200">
              Conte como são hoje seus pedidos, sistemas e relatórios — devolvemos um diagnóstico
              objetivo e próximos passos.
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
