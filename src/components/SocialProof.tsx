import { TrendingUp, Clock, Zap, ThumbsUp } from 'lucide-react';

interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function Metric({ icon, value, label }: MetricProps) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div className="text-indigo-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
        {icon}
      </div>
      <span className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
        {value}
      </span>
      <span className="text-center text-xs font-semibold tracking-widest text-slate-500 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="border-b border-slate-100 bg-white py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-semibold tracking-widest text-slate-400 uppercase">
          Resultados reais com modernização de processos
        </p>
        <div className="grid grid-cols-2 items-start justify-items-center gap-8 md:grid-cols-4">
          <Metric
            icon={<TrendingUp size={24} />}
            value="47%"
            label="Aumento médio em produtividade"
          />
          <Metric icon={<Clock size={24} />} value="120h" label="Economizadas por mês em média" />
          <Metric
            icon={<Zap size={24} />}
            value="10-15 dias"
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
}
