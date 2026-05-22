import Link from 'next/link';
import { Search, FileText, Megaphone, Handshake, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    title: 'Análise de Processos',
    description:
      'Mapeamento detalhado e estratégico dos seus processos internos para identificar gargalos, desperdícios e oportunidades de otimização que geram resultado imediato.',
    color: {
      bg: 'bg-indigo-50',
      hover: 'group-hover:bg-indigo-600',
      text: 'text-indigo-600',
      link: 'text-indigo-600 hover:text-indigo-700',
    },
  },
  {
    icon: FileText,
    title: 'Relatório de Modernização',
    description:
      'Plano de ação prático e visual, com recomendações claras para a evolução tecnológica e operacional do seu negócio — sem jargões, direto ao ponto.',
    color: {
      bg: 'bg-purple-50',
      hover: 'group-hover:bg-purple-600',
      text: 'text-purple-600',
      link: 'text-purple-600 hover:text-purple-700',
    },
  },
  {
    icon: Megaphone,
    title: 'Automação de Mídias Sociais',
    description:
      'Gestão estratégica da sua presença digital com automação criativa para conteúdo e interação, liberando tempo e garantindo consistência na sua marca.',
    color: {
      bg: 'bg-pink-50',
      hover: 'group-hover:bg-pink-600',
      text: 'text-pink-600',
      link: 'text-pink-600 hover:text-pink-700',
    },
  },
  {
    icon: Handshake,
    title: 'Relacionamento e Acompanhamento',
    description:
      'Suporte humano contínuo e proativo, com reuniões periódicas e relatórios claros para garantir o retorno sobre o investimento e a evolução da parceria.',
    color: {
      bg: 'bg-orange-50',
      hover: 'group-hover:bg-orange-500',
      text: 'text-orange-500',
      link: 'text-orange-500 hover:text-orange-600',
    },
  },
];

export default function AudienceSegments() {
  return (
    <section className="bg-[#f6f9fc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
            <span className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
              Ecossistema Completo
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Tudo que sua empresa precisa, em um único parceiro.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Chega de fornecedores fragmentados. Na RoboticsBr, unimos análise estratégica, automação
            de processos, presença digital e acompanhamento humano contínuo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group transform rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`h-14 w-14 ${pillar.color.bg} mb-8 flex items-center justify-center rounded-2xl ${pillar.color.hover} transition-colors duration-300`}
                >
                  <Icon
                    size={28}
                    className={`${pillar.color.text} transition-colors duration-300 group-hover:text-white`}
                  />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="mb-6 leading-relaxed text-slate-600">{pillar.description}</p>
                <Link
                  href="/contato"
                  className={`inline-flex items-center ${pillar.color.link} font-bold transition-colors`}
                >
                  Saiba mais <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
