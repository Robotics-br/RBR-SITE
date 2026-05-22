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
  alternates: { canonical: 'https://www.roboticsbr.com/servicos' },
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
    <div className="min-h-screen bg-[#f6f9fc] pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
            <span className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
              Nossos serviços
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Serviços de Automação e Modernização Digital
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Cada segmento tem gargalos diferentes. Escolha o seu e veja como a RoboticsBr combina
            integrações, dados e fluxos inteligentes para ganhar eficiência com suporte humano de
            ponta a ponta.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {verticals.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex transform flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 flex items-center justify-center border border-slate-100`}
                >
                  <Icon className="h-7 w-7 text-slate-800" aria-hidden />
                </div>
                <span className="mb-2 text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                  {item.badge}
                </span>
                <h2 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  {item.title}
                </h2>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1">
                  Ver detalhes
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="rounded-2xl bg-slate-900 p-8 text-center text-white md:p-10">
          <h2 className="mb-3 text-2xl font-extrabold md:text-3xl">
            Não encontrou o seu segmento?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-indigo-200">
            Conte o desafio da sua operação — desenhamos automações modulares alinhadas ao seu
            processo e orçamento.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30"
          >
            Falar com especialista
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
