import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarClock,
  Headphones,
  MessageCircle,
  PhoneOff,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automação para Clínicas Médicas e Atendimento Inteligente',
  description:
    'Automação para clínicas médicas: agendamento, confirmações e chatbots no WhatsApp para automatizar atendimento clínico sem perder o toque humano.',
  keywords: [
    'automação para clínicas médicas',
    'automatizar atendimento clínica',
    'chatbot clínica WhatsApp',
    'confirmação automática consulta',
    'agendamento automatizado saúde',
  ],
  alternates: { canonical: 'https://www.roboticsbr.com/servicos/clinicas' },
  openGraph: {
    title: 'Automação para Clínicas Médicas | RoboticsBr',
    description:
      'Reduza ligações repetitivas e filas no telefone com fluxos de agendamento e confirmação integrados ao seu calendário.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const benefits = [
  {
    icon: CalendarClock,
    title: 'Agenda sempre alimentada',
    text: 'Pacientes marcam e reagendam em poucos toques, com sincronização ao sistema que a equipe já usa.',
  },
  {
    icon: PhoneOff,
    title: 'Menos telefone, mais foco',
    text: 'Rotinas repetitivas saem do ramal da recepção para liberar tempo para quem está na clínica.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp que resolve na hora',
    text: 'Respostas consistentes a dúvidas frequentes, preparos e horários — com escalonamento para a equipe quando precisar.',
  },
  {
    icon: Sparkles,
    title: 'Confirmações automáticas',
    text: 'Lembretes e confirmações disparam sozinhos, reduzindo faltas e retrabalho manual.',
  },
];

const faq = [
  {
    q: 'Automatizar atendimento na clínica substitui a recepção?',
    a: 'Não. O objetivo é tirar o repetitivo do colo da equipe: confirmações, horários e dúvidas padrão. Casos sensíveis seguem com humanos, muitas vezes com o contexto da conversa já organizado.',
  },
  {
    q: 'A automação para clínicas médicas integra com meu software de agenda?',
    a: 'Sim, quando a ferramenta oferece API ou exportação. Mapeamos o que já existe (Google Calendar, prontuário, planilhas) e conectamos de forma segura e auditável.',
  },
  {
    q: 'Pacientes aceitam falar com chatbot no WhatsApp?',
    a: 'Sim, desde que o fluxo seja claro e rápido. Projetamos mensagens empáticas, opção de falar com pessoa e horários de silêncio para respeitar a experiência do paciente.',
  },
  {
    q: 'Quanto tempo leva para colocar no ar?',
    a: 'Depende do escopo e integrações, mas muitos pilotos de agendamento e confirmação saem em poucas semanas, com ajustes contínuos após o go-live.',
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

export default function ServicosClinicasPage() {
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
                Saúde
              </span>
            </div>
            <h1 className="mb-4 text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl">
              Automação para clínicas médicas que automatiza o atendimento sem perder proximidade
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Combine agendamento inteligente, confirmações automáticas e WhatsApp para clínicas em
              um fluxo único — para você{' '}
              <strong className="font-semibold text-slate-800">
                automatizar atendimento clínica
              </strong>{' '}
              e devolver tempo à equipe de quem cuida de pacientes de verdade.
            </p>
          </div>

          <section className="mb-10 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              O problema que vemos nas clínicas
            </h2>
            <p className="mb-4 leading-relaxed text-slate-600">
              Recepções ficam presas em ligações de confirmação, reagendamento e perguntas
              repetidas. Pacientes esperam na linha, faltas continuam altas e a equipe não sobra
              energia para o atendimento presencial de qualidade.
            </p>
            <p className="leading-relaxed text-slate-600">
              Quem busca{' '}
              <strong className="font-semibold text-slate-800">
                automação para clínicas médicas
              </strong>{' '}
              quer menos ruído operacional, não menos humanidade — e é exatamente isso que
              desenhamos.
            </p>
          </section>

          <section className="mb-10 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">O que a RoboticsBr entrega</h2>
            <p className="mb-4 leading-relaxed text-slate-700">
              Fluxos em n8n e integrações seguras conectam WhatsApp, calendário e seus sistemas.
              Agendamento guiado, lembretes e confirmações rodam no automático; dúvidas frequentes
              têm resposta imediata; exceções viram tarefa clara para a recepção ou enfermagem.
            </p>
            <p className="leading-relaxed text-slate-700">
              Você ganha indicadores de volume de conversas, taxa de confirmação e gargalos — para
              evoluir o atendimento com dados, não achismo.
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
              <Headphones className="h-8 w-8 flex-shrink-0 text-indigo-600" aria-hidden />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-900">Case relacionado</h2>
                <p className="mb-4 text-sm text-slate-600">
                  Veja como reduzimos carga telefônica e aceleramos agendamentos em uma clínica
                  real.
                </p>
                <Link
                  href="/cases/atendimento-automatizado-clinica"
                  className="inline-flex items-center font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
                >
                  Atendimento automatizado para clínica
                  <ArrowRight size={16} className="ml-1" />
                </Link>
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
              Pronto para aliviar a recepção e encantar pacientes?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-indigo-200">
              Solicite um diagnóstico de eficiência e receba um plano claro para automatizar o que
              hoje trava sua clínica.
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
