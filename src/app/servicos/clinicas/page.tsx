import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarClock, Headphones, MessageCircle, PhoneOff, Sparkles } from 'lucide-react';

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="pt-24 pb-20 bg-[#f6f9fc] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
              <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">Saúde</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Automação para clínicas médicas que automatiza o atendimento sem perder proximidade
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Combine agendamento inteligente, confirmações automáticas e WhatsApp para clínicas em um fluxo único —
              para você <strong className="font-semibold text-slate-800">automatizar atendimento clínica</strong> e
              devolver tempo à equipe de quem cuida de pacientes de verdade.
            </p>
          </div>

          <section className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 shadow-sm mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">O problema que vemos nas clínicas</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Recepções ficam presas em ligações de confirmação, reagendamento e perguntas repetidas. Pacientes esperam na
              linha, faltas continuam altas e a equipe não sobra energia para o atendimento presencial de qualidade.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Quem busca <strong className="font-semibold text-slate-800">automação para clínicas médicas</strong> quer
              menos ruído operacional, não menos humanidade — e é exatamente isso que desenhamos.
            </p>
          </section>

          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-8 md:p-10 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">O que a RoboticsBr entrega</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Fluxos em n8n e integrações seguras conectam WhatsApp, calendário e seus sistemas. Agendamento guiado,
              lembretes e confirmações rodam no automático; dúvidas frequentes têm resposta imediata; exceções viram
              tarefa clara para a recepção ou enfermagem.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Você ganha indicadores de volume de conversas, taxa de confirmação e gargalos — para evoluir o atendimento
              com dados, não achismo.
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
              <Headphones className="w-8 h-8 text-indigo-600 flex-shrink-0" aria-hidden />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Case relacionado</h2>
                <p className="text-slate-600 text-sm mb-4">
                  Veja como reduzimos carga telefônica e aceleramos agendamentos em uma clínica real.
                </p>
                <Link
                  href="/cases/atendimento-automatizado-clinica"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500 transition-colors"
                >
                  Atendimento automatizado para clínica
                  <ArrowRight size={16} className="ml-1" />
                </Link>
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
            <h2 className="text-2xl font-bold mb-3">Pronto para aliviar a recepção e encantar pacientes?</h2>
            <p className="text-indigo-200 mb-8 max-w-lg mx-auto">
              Solicite um diagnóstico de eficiência e receba um plano claro para automatizar o que hoje trava sua clínica.
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
