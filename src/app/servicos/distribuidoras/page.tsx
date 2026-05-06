import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  GitBranch,
  PackageSearch,
  Route,
  Truck,
} from 'lucide-react';

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="pt-24 pb-20 bg-[#f6f9fc] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
              <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">Distribuição</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Automação para distribuidoras com BI e integração de ponta a ponta
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Unifique <strong className="font-semibold text-slate-800">ERP, CRM e logística</strong>, ganhe um{' '}
              <strong className="font-semibold text-slate-800">dashboard de BI para distribuidoras</strong> e trate
              pedidos com previsibilidade — do pedido ao carregamento.
            </p>
          </div>

          <section className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 shadow-sm mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Onde a operação trava</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Pedidos chegam por vários canais, o ERP não conversa com o CRM e o time comercial não vê o mesmo estoque
              que o CD. Relatórios nascem de planilhas frágeis, rotas são montadas no feeling e o retrabalho entre
              expedição, financeiro e vendas come a margem.
            </p>
            <p className="text-slate-600 leading-relaxed">
              A boa notícia: <strong className="font-semibold text-slate-800">automação para distribuidoras</strong> não é
              luxo de gigante — é orquestração de processos e dados com ferramentas modernas e projeto enxuto.
            </p>
          </section>

          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-8 md:p-10 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">O que a RoboticsBr oferece</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Desenhamos integrações resilientes (filas, retries, alertas) e camadas de dados que alimentam painéis
              executivos e operacionais. Automatizamos etapas repetitivas do ciclo do pedido — conferência, gatilhos de
              separação, notificações a transportadoras ou clientes — sempre alinhado ao seu processo real.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Para logística, estruturamos insumos para decisões de rota e priorização com base no que seu time já
              validou, evitando &quot;caixa preta&quot; que ninguém confia.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefícios em evidência</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-700" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Truck className="w-8 h-8 text-indigo-600 flex-shrink-0" aria-hidden />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Cases relacionados</h2>
                <p className="text-slate-600 text-sm mb-4">
                  Veja projetos reais de inteligência de dados e integração entre sistemas corporativos.
                </p>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/cases/dashboard-inteligencia-dados"
                      className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500 transition-colors"
                    >
                      Dashboard e inteligência de dados
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cases/integracao-inteligente-sistemas"
                      className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500 transition-colors"
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Perguntas frequentes</h2>
            <div className="space-y-8">
              {faq.map((item) => (
                <div key={item.q} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 rounded-2xl p-8 md:p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Quer um plano claro para integrar e enxergar a operação?</h2>
            <p className="text-indigo-200 mb-8 max-w-lg mx-auto">
              Conte como são hoje seus pedidos, sistemas e relatórios — devolvemos um diagnóstico objetivo e próximos passos.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-base font-bold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all"
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
