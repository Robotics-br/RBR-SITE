import Link from 'next/link';
import { Search, FileText, Megaphone, Handshake, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    title: 'Análise de Processos',
    description: 'Mapeamento detalhado e estratégico dos seus processos internos para identificar gargalos, desperdícios e oportunidades de otimização que geram resultado imediato.',
    color: { bg: 'bg-indigo-50', hover: 'group-hover:bg-indigo-600', text: 'text-indigo-600', link: 'text-indigo-600 hover:text-indigo-700' },
  },
  {
    icon: FileText,
    title: 'Relatório de Modernização',
    description: 'Plano de ação prático e visual, com recomendações claras para a evolução tecnológica e operacional do seu negócio — sem jargões, direto ao ponto.',
    color: { bg: 'bg-purple-50', hover: 'group-hover:bg-purple-600', text: 'text-purple-600', link: 'text-purple-600 hover:text-purple-700' },
  },
  {
    icon: Megaphone,
    title: 'Automação de Mídias Sociais',
    description: 'Gestão estratégica da sua presença digital com automação criativa para conteúdo e interação, liberando tempo e garantindo consistência na sua marca.',
    color: { bg: 'bg-pink-50', hover: 'group-hover:bg-pink-600', text: 'text-pink-600', link: 'text-pink-600 hover:text-pink-700' },
  },
  {
    icon: Handshake,
    title: 'Relacionamento e Acompanhamento',
    description: 'Suporte humano contínuo e proativo, com reuniões periódicas e relatórios claros para garantir o retorno sobre o investimento e a evolução da parceria.',
    color: { bg: 'bg-orange-50', hover: 'group-hover:bg-orange-500', text: 'text-orange-500', link: 'text-orange-500 hover:text-orange-600' },
  },
];

export default function AudienceSegments() {
  return (
    <section className="py-24 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
           <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
             <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
               Ecossistema Completo
             </span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tudo que sua empresa precisa, em um único parceiro.</h2>
           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
             Chega de fornecedores fragmentados. Na RoboticsBr, unimos análise estratégica, automação de processos, presença digital e acompanhamento humano contínuo.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                <div className={`w-14 h-14 ${pillar.color.bg} rounded-2xl flex items-center justify-center mb-8 ${pillar.color.hover} transition-colors duration-300`}>
                  <Icon size={28} className={`${pillar.color.text} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{pillar.description}</p>
                <Link href="/contato" className={`inline-flex items-center ${pillar.color.link} font-bold transition-colors`}>
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
