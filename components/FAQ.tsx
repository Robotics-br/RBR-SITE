import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: 'Por que minha empresa precisa se modernizar agora?',
    answer: (
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>O mercado está evoluindo rapidamente — empresas que modernizam seus processos ganham vantagem competitiva duradoura.</li>
        <li>Processos manuais consomem tempo, geram erros e impedem o crescimento sustentável.</li>
        <li>Quanto antes você começar, menor o custo de adaptação e maior o retorno acumulado.</li>
      </ul>
    ),
  },
  {
    question: 'Qual o custo de um projeto de modernização?',
    answer: (
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>Começamos com um <strong>Diagnóstico de Eficiência gratuito</strong>, que oferece um plano de ação claro e personalizado.</li>
        <li>Os projetos de implementação são modularizados para se adequar ao seu orçamento.</li>
        <li>Você escolhe por onde começar e escala conforme os resultados aparecem — sem surpresas.</li>
      </ul>
    ),
  },
  {
    question: 'Quanto tempo leva para ver os resultados?',
    answer: (
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>O primeiro resultado concreto pode ser entregue em <strong>10 a 15 dias</strong> após o diagnóstico.</li>
        <li>Economia de tempo, redução de erros e aumento de produtividade são os primeiros indicadores.</li>
        <li>Nosso foco é em resultados rápidos e retorno tangível desde o início.</li>
      </ul>
    ),
  },
  {
    question: 'Minha equipe vai ser treinada para usar as novas ferramentas?',
    answer: (
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>Sim. Nossa metodologia inclui <strong>treinamento completo</strong> da sua equipe.</li>
        <li>Não entregamos ferramentas — entregamos capacidade para que seu time opere com autonomia.</li>
        <li>O acompanhamento contínuo garante que dúvidas sejam resolvidas em tempo real.</li>
      </ul>
    ),
  },
  {
    question: 'E se a solução não funcionar como esperado?',
    answer: (
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>Nosso acompanhamento periódico permite identificar ajustes rapidamente.</li>
        <li>Trabalhamos com otimização contínua — a solução evolui junto com seu negócio.</li>
        <li>Seu controle é total: você participa de cada decisão e validação do processo.</li>
      </ul>
    ),
  },
  {
    question: 'Vocês oferecem acompanhamento após a implementação?',
    answer: (
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>Sim. Realizamos <strong>reuniões quinzenais</strong> para monitorar o progresso e analisar métricas.</li>
        <li>Entregamos relatórios claros para que você acompanhe o retorno do investimento.</li>
        <li>Somos parceiros de longo prazo — não desaparecemos após a entrega.</li>
      </ul>
    ),
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
            Perguntas frequentes sobre modernização e automação
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas antes de dar o próximo passo rumo à transformação do seu negócio.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
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
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
