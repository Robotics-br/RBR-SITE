import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Qual a diferença entre a RoboticsBr e uma agência de marketing tradicional?',
    answer: 'Agências tradicionais focam em criativos e mídia paga, mas dependem de ferramentas prontas e não escrevem código. Nós unimos engenharia de software com estratégia de marketing — construímos sistemas personalizados, automações e dashboards de BI que agências simplesmente não conseguem entregar.',
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'O setup inicial leva em média 7 dias úteis. Os primeiros resultados mensuráveis (aumento de conversão, redução de CAC) aparecem entre 30 e 90 dias, dependendo da complexidade do projeto e do volume de tráfego existente.',
  },
  {
    question: 'Vocês trabalham com empresas de qualquer tamanho?',
    answer: 'Sim. Atendemos desde criadores de conteúdo individuais até empresas com faturamento de milhões. O que nos conecta aos nossos clientes é a ambição de escalar com inteligência — e não o tamanho atual do negócio.',
  },
  {
    question: 'Como funciona o diagnóstico gratuito?',
    answer: 'Analisamos seu site, funis de venda, stack tecnológica e dados de marketing. Em uma reunião de 30 minutos, apresentamos um relatório com os principais gargalos e oportunidades de crescimento. Sem compromisso e sem custo.',
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer: 'Trabalhamos com React, Node.js, Python, TypeScript, bancos de dados SQL e NoSQL, integrações via API, ferramentas de BI (Google Analytics, Looker Studio) e plataformas de automação. Escolhemos a stack ideal para cada projeto — sem forçar uma solução genérica.',
  },
  {
    question: 'Vocês oferecem suporte contínuo após a entrega?',
    answer: 'Sim. Oferecemos planos de suporte e manutenção contínua com monitoramento 24/7, atualizações de segurança e otimizações recorrentes. Nosso objetivo é ser parceiro de longo prazo, não apenas um prestador de serviço pontual.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas antes de dar o próximo passo.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-slate-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
