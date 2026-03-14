import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Por que sua empresa precisa de IA agora — e não daqui a 2 anos',
    excerpt: 'Empresas que adotam IA cedo ganham vantagem competitiva duradoura. Entenda por que esperar é o maior risco para pequenas e médias empresas.',
    category: 'IA para empresas',
    readTime: '5 min',
    date: '2026-03-01',
    url: '#',
  },
  {
    id: 2,
    title: 'Chatbots com IA: como empresas estão economizando 30+ horas por semana',
    excerpt: 'Casos reais de como agentes inteligentes automatizam atendimento, agendamento e qualificação de leads sem perder a personalização.',
    category: 'Automação',
    readTime: '7 min',
    date: '2026-02-20',
    url: '#',
  },
  {
    id: 3,
    title: 'O guia prático do Diagnóstico de IA para pequenas empresas',
    excerpt: 'Passo a passo de como identificar processos que podem ser automatizados e calcular o ROI antes de investir em soluções de IA.',
    category: 'Metodologia',
    readTime: '6 min',
    date: '2026-02-10',
    url: '#',
  },
  {
    id: 4,
    title: 'n8n + IA: automação de processos sem código para sua empresa',
    excerpt: 'Como usar ferramentas de automação low-code integradas com inteligência artificial para eliminar tarefas repetitivas na sua empresa.',
    category: 'Tecnologia',
    readTime: '8 min',
    date: '2026-01-28',
    url: '#',
  },
  {
    id: 5,
    title: 'LGPD e IA: o que sua empresa precisa saber antes de implementar',
    excerpt: 'Guia de conformidade para usar IA com dados de clientes de forma segura, ética e em conformidade com a legislação brasileira.',
    category: 'Conformidade',
    readTime: '6 min',
    date: '2026-01-15',
    url: '#',
  },
  {
    id: 6,
    title: 'Case: como uma clínica reduziu 60% das ligações com agente de IA',
    excerpt: 'Estudo de caso detalhado de como implementamos um chatbot inteligente para agendamento e dúvidas em uma clínica com 3 unidades.',
    category: 'Case Study',
    readTime: '10 min',
    date: '2026-01-05',
    url: '#',
  },
];

const categoryColors: Record<string, string> = {
  'IA para empresas': 'bg-indigo-100 text-indigo-700',
  'Automação': 'bg-purple-100 text-purple-700',
  'Metodologia': 'bg-emerald-100 text-emerald-700',
  'Tecnologia': 'bg-cyan-100 text-cyan-700',
  'Conformidade': 'bg-orange-100 text-orange-700',
  'Case Study': 'bg-amber-100 text-amber-700',
};

const Blog: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Blog - RoboticsBr | IA, Social Media e Automação';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-[#f6f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
            <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
              Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Blog RoboticsBr
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Artigos sobre inteligência artificial, automação e transformação digital para empresas que querem crescer com inteligência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <ArrowUpRight size={32} className="text-white" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-slate-100 text-slate-700'}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Ler artigo <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
