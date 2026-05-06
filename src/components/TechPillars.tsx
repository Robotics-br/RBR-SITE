import { Cog, Palette, BarChart3, Rocket } from 'lucide-react';

export default function TechPillars() {
  return (
    <section id="servicos" className="py-24 bg-white clip-diagonal pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A engenharia por trás do crescimento completo do seu negócio.</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Automação inteligente, presença digital otimizada e dados estratégicos — integrados em uma única solução para sua empresa.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Cog size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Automação de Processos</h3>
                <p className="text-slate-600 leading-relaxed">
                    Criamos fluxos inteligentes e arquiteturas robustas focadas 100% na otimização dos seus processos e na geração de resultados para sua empresa. Zero templates prontos.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Palette size={32} className="text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gestão Estratégica de Mídias Sociais</h3>
                <p className="text-slate-600 leading-relaxed">
                    Especialistas de social media com automação criativa para planejamento, criação de conteúdo, calendário editorial e publicação — tudo integrado à sua estratégia de negócio.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <BarChart3 size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Inteligência de Dados e BI</h3>
                <p className="text-slate-600 leading-relaxed">
                    Eliminamos o &ldquo;achismo&rdquo;. Dashboards inteligentes, tracking avançado e análise de métricas de marketing e operações para decisões assertivas.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Rocket size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Growth e Otimização</h3>
                <p className="text-slate-600 leading-relaxed">
                    Funil de vendas otimizado com tecnologia de suporte, testes contínuos e automações que aumentam o valor de cada cliente e reduzem seu custo de aquisição.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
