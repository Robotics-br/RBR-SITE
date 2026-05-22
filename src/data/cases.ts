export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'sistema' | 'site';
  image: string;
  imageAlt?: string;
  client: string;
  industry: string;
  duration: string;
  problem: string;
  solution: string;
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  technologies: string[];
  relatedServices: string[];
  /** ISO date (YYYY-MM-DD) - used for sitemap lastModified */
  updatedAt: string;
}

export const cases: CaseStudy[] = [
  {
    id: 1,
    slug: 'atendimento-automatizado-clinica',
    title: 'Atendimento Automatizado para Clínica',
    shortDescription:
      'Redução de 60% nas ligações telefônicas com assistente digital para agendamento e dúvidas de pacientes.',
    category: 'sistema',
    image: '/images/portfolio/chatbot-clinica.jpg',
    client: 'Clínica Vida Plena',
    industry: 'Saúde',
    duration: '3 semanas',
    problem:
      'A Clínica Vida Plena recebia mais de 200 ligações por dia para agendamentos, confirmações e dúvidas simples. A recepção ficava sobrecarregada, pacientes esperavam em fila no telefone e a equipe não conseguia focar no atendimento presencial de qualidade.',
    solution:
      'Implementamos um assistente digital integrado ao WhatsApp e ao sistema de agendamento da clínica. O chatbot realiza agendamentos, confirma consultas, responde dúvidas frequentes sobre preparos para exames e envia lembretes automatizados. Para casos complexos, direciona para a recepcionista com todo o contexto da conversa.',
    results: [
      'Redução de 60% nas ligações telefônicas',
      'Tempo médio de agendamento caiu de 4 minutos para 45 segundos',
      'Satisfação dos pacientes aumentou de 72% para 94%',
      'Recepcionistas liberadas para atendimento presencial de qualidade',
      'Zero erros em confirmações de consulta',
    ],
    testimonial: {
      text: 'O atendimento automatizado transformou nossa recepção — reduzimos 60% das ligações telefônicas e os pacientes adoram a praticidade. O treinamento da equipe foi impecável, e a gente sente que tem alguém do nosso lado de verdade.',
      author: 'Juliana Martins',
      role: 'Gerente Comercial, Clínica Vida Plena',
    },
    technologies: ['n8n', 'OpenAI GPT', 'WhatsApp Business API', 'Google Calendar'],
    relatedServices: ['clinicas'],
    updatedAt: '2026-04-15',
  },
  {
    id: 2,
    slug: 'automacao-propostas-comerciais',
    title: 'Automação de Propostas Comerciais',
    shortDescription:
      'Ciclo de vendas reduzido pela metade com automação que gera propostas personalizadas em minutos.',
    category: 'sistema',
    image: '/images/portfolio/automacao-propostas.jpg',
    client: 'Torres Engenharia',
    industry: 'Engenharia',
    duration: '4 semanas',
    problem:
      'A equipe comercial da Torres Engenharia levava em média 2 dias para montar cada proposta comercial. O processo envolvia copiar dados de planilhas, formatar documentos manualmente e aguardar aprovação de múltiplos setores. Muitos leads esfriavam durante a espera.',
    solution:
      'Criamos um sistema automatizado que puxa dados do CRM, aplica templates personalizados por tipo de serviço, calcula valores baseado em parâmetros predefinidos e gera PDFs profissionais prontos para envio. O vendedor preenche um formulário rápido e em minutos tem a proposta pronta, com aprovação automática para valores dentro da alçada.',
    results: [
      'Ciclo de vendas reduzido de 7 para 3,5 dias em média',
      'Tempo de elaboração de proposta: de 2 dias para 12 minutos',
      'Taxa de conversão aumentou 35%',
      'Zero erros de digitação ou cálculo',
      'Vendedores ganharam 8h/semana para prospecção',
    ],
    testimonial: {
      text: 'O que mais me impressionou foi o suporte humano. Não é só tecnologia — eles sentam com a gente, entendem o negócio e ajustam junto. As propostas comerciais que antes levavam dias agora saem em minutos, e a conversão subiu 35%.',
      author: 'Ricardo Torres',
      role: 'Sócio-fundador, Torres Engenharia',
    },
    technologies: ['n8n', 'Google Docs API', 'Pipedrive CRM', 'PDF Generator'],
    relatedServices: ['escritorios'],
    updatedAt: '2026-04-10',
  },
  {
    id: 3,
    slug: 'dashboard-inteligencia-dados',
    title: 'Dashboard de Inteligência de Dados',
    shortDescription:
      'Decisões 3x mais rápidas com dashboards que consolidam dados de vendas, marketing e operações em tempo real.',
    category: 'sistema',
    image: '/images/portfolio/dashboard-bi.jpg',
    client: 'Distribuidora Almeida',
    industry: 'Distribuição',
    duration: '5 semanas',
    problem:
      'A Distribuidora Almeida tinha dados espalhados em 6 sistemas diferentes: ERP, planilhas de vendedores, controle de estoque manual, CRM, analytics do e-commerce e relatórios de entrega. A diretoria levava semanas para consolidar informações e tomar decisões estratégicas, muitas vezes baseadas em dados desatualizados.',
    solution:
      'Desenvolvemos dashboards de BI que integram todas as fontes de dados em tempo real. Painéis executivos mostram KPIs de vendas, margem, giro de estoque, performance por região e vendedor, eficiência logística e ROI de marketing. Alertas automáticos notificam quando indicadores saem dos padrões esperados.',
    results: [
      'Tempo de decisão estratégica reduzido de semanas para horas',
      'Identificação de produtos com margem negativa (recuperou R$ 47k/mês)',
      'Otimização de rotas de entrega economizou 23% em combustível',
      'Vendedores com acesso a dados de seus clientes em tempo real',
      '4 colaboradores liberados de tarefas de consolidação manual',
    ],
    testimonial: {
      text: 'A RoboticsBr não é um fornecedor — é um parceiro de verdade. Eles mapearam nossos processos, identificaram gargalos que a gente nem percebia e automatizaram tudo em 3 semanas. Liberamos 4 pessoas para atividades estratégicas e o retorno veio no primeiro mês.',
      author: 'Fernando Almeida',
      role: 'Diretor de Operações, Distribuidora Almeida',
    },
    technologies: ['Power BI', 'n8n', 'PostgreSQL', 'REST APIs', 'Python'],
    relatedServices: ['distribuidoras'],
    updatedAt: '2026-03-20',
  },
  {
    id: 4,
    slug: 'automacao-triagem-documentos',
    title: 'Automação de Triagem de Documentos',
    shortDescription:
      'Economia de 30h semanais com tecnologia que classifica, extrai e organiza documentos automaticamente.',
    category: 'sistema',
    image: '/images/portfolio/triagem-docs.jpg',
    client: 'PG Assessoria Contábil',
    industry: 'Contabilidade',
    duration: '4 semanas',
    problem:
      'A PG Assessoria recebia centenas de documentos por semana de seus clientes: notas fiscais, comprovantes, contratos e declarações. A triagem manual consumia 30+ horas semanais da equipe, com frequentes erros de classificação que geravam retrabalho e atrasos nas obrigações fiscais.',
    solution:
      'Implementamos um pipeline de automação com IA que recebe documentos por email ou upload, classifica automaticamente por tipo e cliente, extrai dados relevantes (valores, datas, CNPJ) e organiza em pastas estruturadas. Documentos com baixa confiança na classificação são direcionados para validação humana.',
    results: [
      'Economia de 30 horas semanais em triagem manual',
      'Precisão de classificação de 96% (vs 89% manual)',
      'Zero atrasos em obrigações fiscais nos últimos 6 meses',
      'Capacidade de atender 40% mais clientes sem contratar',
      'Equipe focada em análise e consultoria, não em organização',
    ],
    testimonial: {
      text: 'O diagnóstico foi revelador — eles vieram, entenderam nossa dor e construíram a solução junto com a gente. A automação de triagem de documentos economiza 30 horas por semana da equipe. E o acompanhamento quinzenal nos dá segurança de que tudo está evoluindo.',
      author: 'Patrícia Gonçalves',
      role: 'CEO, PG Assessoria Contábil',
    },
    technologies: ['OpenAI GPT-4', 'n8n', 'Google Drive API', 'OCR', 'Python'],
    relatedServices: ['escritorios'],
    updatedAt: '2026-03-05',
  },
  {
    id: 5,
    slug: 'modernizacao-atendimento-cliente',
    title: 'Modernização do Atendimento ao Cliente',
    shortDescription:
      '4 colaboradores liberados para atividades estratégicas com automação gerenciando o suporte de primeiro nível.',
    category: 'sistema',
    image: '/images/portfolio/atendimento-ia.jpg',
    client: 'TechSolutions Ltda',
    industry: 'Tecnologia',
    duration: '3 semanas',
    problem:
      'A empresa recebia mais de 150 tickets de suporte por dia, a maioria com dúvidas repetitivas sobre configuração, reset de senha e status de pedidos. A equipe de 6 pessoas não dava conta, o tempo de resposta ultrapassava 24h e a satisfação do cliente estava em queda.',
    solution:
      'Implementamos um sistema de atendimento em camadas: chatbot inteligente resolve dúvidas frequentes e executa ações simples (reset de senha, status de pedido); tickets complexos são encaminhados para atendentes humanos com contexto completo da conversa e sugestão de resolução gerada por IA.',
    results: [
      '72% dos tickets resolvidos automaticamente no primeiro nível',
      'Tempo médio de resposta caiu de 24h para 3 minutos (automatizados)',
      '4 colaboradores realocados para projetos estratégicos',
      'NPS subiu de 32 para 71 em 3 meses',
      'Custo por ticket reduzido em 65%',
    ],
    technologies: ['n8n', 'Anthropic Claude', 'Zendesk API', 'WhatsApp Business'],
    relatedServices: ['distribuidoras'],
    updatedAt: '2026-02-25',
  },
  {
    id: 6,
    slug: 'integracao-inteligente-sistemas',
    title: 'Integração Inteligente de Sistemas',
    shortDescription:
      'ERP, CRM e marketing conectados com workflows automatizados que eliminam retrabalho e erros manuais.',
    category: 'sistema',
    image: '/images/portfolio/integracao-ia.jpg',
    client: 'GrupoVale Distribuição',
    industry: 'Distribuição',
    duration: '6 semanas',
    problem:
      'O GrupoVale operava com ERP, CRM, plataforma de marketing e controle logístico totalmente desconectados. A equipe passava horas replicando dados entre sistemas, gerando inconsistências, notas fiscais com dados errados e campanhas de marketing disparadas para clientes com pedidos em atraso.',
    solution:
      'Criamos uma camada de integração que conecta todos os sistemas via APIs e webhooks. Quando um pedido é fechado no CRM, automaticamente gera pedido no ERP, atualiza o estoque, dispara comunicação ao cliente e ajusta a régua de marketing. Dashboards unificados mostram a jornada completa do cliente.',
    results: [
      'Eliminação de 100% da entrada manual de dados entre sistemas',
      'Erros em notas fiscais caíram de 12% para 0,3%',
      'Tempo de processamento de pedido: de 45min para 2min',
      'Marketing segmentado com dados reais (aumento de 28% em conversão)',
      'ROI do projeto alcançado em 6 semanas',
    ],
    technologies: ['n8n', 'REST APIs', 'Webhooks', 'PostgreSQL', 'TOTVS ERP'],
    relatedServices: ['distribuidoras'],
    updatedAt: '2026-02-10',
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getRelatedCases(currentSlug: string, limit = 3): CaseStudy[] {
  const current = getCaseBySlug(currentSlug);
  if (!current) return cases.slice(0, limit);

  return cases
    .filter((c) => c.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.relatedServices.some((s) => current.relatedServices.includes(s)) ? 1 : 0;
      const bMatch = b.relatedServices.some((s) => current.relatedServices.includes(s)) ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
