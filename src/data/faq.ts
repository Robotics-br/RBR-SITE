export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaqItems: ReadonlyArray<FaqItem> = [
  {
    question: 'Por que minha empresa precisa se modernizar agora?',
    answer:
      'O mercado esta evoluindo rapidamente - empresas que modernizam seus processos ganham vantagem competitiva duradoura. Processos manuais consomem tempo, geram erros e impedem o crescimento sustentavel. Quanto antes voce comecar, menor o custo de adaptacao e maior o retorno acumulado.',
  },
  {
    question: 'Qual o custo de um projeto de modernizacao?',
    answer:
      'Comecamos com um Diagnostico de Eficiencia gratuito, que oferece um plano de acao claro e personalizado. Os projetos de implementacao sao modularizados para se adequar ao seu orcamento. Voce escolhe por onde comecar e escala conforme os resultados aparecem - sem surpresas.',
  },
  {
    question: 'Quanto tempo leva para ver os resultados?',
    answer:
      'O primeiro resultado concreto pode ser entregue em 10 a 15 dias apos o diagnostico. Economia de tempo, reducao de erros e aumento de produtividade sao os primeiros indicadores. Nosso foco e em resultados rapidos e retorno tangivel desde o inicio.',
  },
  {
    question: 'Minha equipe vai ser treinada para usar as novas ferramentas?',
    answer:
      'Sim. Nossa metodologia inclui treinamento completo da sua equipe. Nao entregamos ferramentas - entregamos capacidade para que seu time opere com autonomia. O acompanhamento continuo garante que duvidas sejam resolvidas em tempo real.',
  },
  {
    question: 'E se a solucao nao funcionar como esperado?',
    answer:
      'Nosso acompanhamento periodico permite identificar ajustes rapidamente. Trabalhamos com otimizacao continua - a solucao evolui junto com seu negocio. Seu controle e total: voce participa de cada decisao e validacao do processo.',
  },
  {
    question: 'Voces oferecem acompanhamento apos a implementacao?',
    answer:
      'Sim. Realizamos reunioes quinzenais para monitorar o progresso e analisar metricas. Entregamos relatorios claros para que voce acompanhe o retorno do investimento. Somos parceiros de longo prazo - nao desaparecemos apos a entrega.',
  },
];
