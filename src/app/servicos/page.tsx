import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Stethoscope, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços de Automação e Modernização Digital',
  description:
    'Automação sob medida para clínicas médicas, distribuidoras e escritórios. Agendamento, BI, integração de sistemas, documentos e muito mais com a RoboticsBr.',
  keywords: [
    'serviços de automação',
    'modernização digital',
    'automação para clínicas',
    'automação para distribuidoras',
    'automação para escritórios',
    'RoboticsBr',
  ],
  openGraph: {
    title: 'Serviços de Automação e Modernização Digital | RoboticsBr',
    description:
      'Soluções por segmento: saúde, distribuição e serviços profissionais. Descubra o escopo ideal para o seu negócio.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const verticals = [
  {
    href: '/servicos/clinicas',
    title: 'Clínicas e saúde',
    description:
      'Automatize agendamento, confirmações e atendimento no WhatsApp sem sobrecarregar a recepção.',
    icon: Stethoscope,
    badge: 'Saúde',
    gradient: 'from-emerald-100 to-teal-50',
  },
  {
    href: '/servicos/distribuidoras',
    title: 'Distribuidoras',
    description:
      'Integração ERP, CRM e logística, dashboards de BI e processamento inteligente de pedidos.',
    icon: Truck,
    badge: 'Distribuição',
    gradient: 'from-indigo-100 to-violet-50',
  },
  {
    href: '/servicos/escritorios',
    title: 'Escritórios',
    description:
      'Classificação de documentos, propostas comerciais e rotinas repetitivas para tempo jurídico e contábil.',
    icon: Building2,
    badge: 'Serviços profissionais',
    gradient: 'from-amber-100 to-orange-50',
  },
];

export default function ServicosPage() {
  return (
    <div className="pt-24 pb-20 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
            <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">Nossos serviços</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Serviços de Automação e Modernização Digital
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cada segmento tem gargalos diferentes. Escolha o seu e veja como a RoboticsBr combina integrações, dados
            e fluxos inteligentes para ganhar eficiência com suporte humano de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {verticals.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col p-8"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 border border-slate-100`}
                >
                  <Icon className="w-7 h-7 text-slate-800" aria-hidden />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-2">{item.badge}</span>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">{item.description}</p>
                <span className="text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ver detalhes
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Não encontrou o seu segmento?</h2>
          <p className="text-indigo-200 max-w-xl mx-auto mb-8">
            Conte o desafio da sua operação — desenhamos automações modulares alinhadas ao seu processo e orçamento.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center px-8 py-4 text-base font-bold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg hover:shadow-indigo-500/30"
          >
            Falar com especialista
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
