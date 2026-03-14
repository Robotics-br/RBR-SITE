import React from 'react';
import { TrendingUp, Clock, Zap, ThumbsUp } from 'lucide-react';

interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Metric: React.FC<MetricProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="text-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
      {icon}
    </div>
    <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{value}</span>
    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest text-center">{label}</span>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section className="py-14 border-b border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-10 uppercase tracking-widest">
          Resultados reais com modernização de processos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start justify-items-center">
          <Metric
            icon={<TrendingUp size={24} />}
            value="47%"
            label="Aumento médio em produtividade"
          />
          <Metric
            icon={<Clock size={24} />}
            value="120h"
            label="Economizadas por mês em média"
          />
          <Metric
            icon={<Zap size={24} />}
            value="15 dias"
            label="Para o primeiro resultado concreto"
          />
          <Metric
            icon={<ThumbsUp size={24} />}
            value="98%"
            label="Taxa de satisfação dos clientes"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
