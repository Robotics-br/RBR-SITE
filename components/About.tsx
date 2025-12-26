import React from 'react';
import { Target, Cpu, TrendingUp, Users, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#f6f9fc]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute -top-[30%] right-[10%] w-[50%] h-[120%] bg-gradient-to-bl from-indigo-50/50 via-purple-50/50 to-transparent rounded-full blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
                        <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
                            Nossa Essência
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                        Marketing visionário.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">
                            Engenharia de precisão.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Nascemos para resolver o maior problema do mercado digital: a desconexão entre quem vende (Marketing) e quem constrói (Tecnologia).
                    </p>
                </div>
            </section>

            {/* The Innovation Section (Mission) */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-12 lg:mb-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-[4/3] group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mix-blend-multiply transition-opacity group-hover:opacity-75"></div>
                                {/* Abstract visual representing synergy */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-64 h-64">
                                        <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                        <div className="absolute inset-4 border-4 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                        <div className="absolute inset-8 border-4 border-orange-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Zap className="w-16 h-16 text-slate-900 opacity-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Porque escolhemos o caminho difícil.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                A maioria das agências usa apenas ferramentas prontas e repetitivas. A maioria das fábricas de software escreve código sem entender de funis de venda e CAC.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-semibold">
                                Nós decidimos ser os dois.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Na <span className="font-bold text-slate-900">RoboticsBr</span>, não somos apenas marqueteiros que "se viram" com tecnologia, nem programadores tentando vender. Somos uma equipe híbrida de engenheiros de dados, desenvolvedores full-stack e estrategistas de growth. Criamos ecossistemas digitais que não só parecem incríveis, mas funcionam como relógios suíços.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Nossos Pilares</h2>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                            O que nos guia na construção de cada projeto, sistema e campanha.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-indigo-600">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Foco no Resultado</h3>
                            <p className="text-slate-600">
                                Tecnologia por tecnologia é hobby. Nós usamos tecnologia para mover ponteiros de receita, conversão e retenção.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-purple-600">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Automação Inteligente</h3>
                            <p className="text-slate-600">
                                Se pode ser automatizado, será. Preferimos gastar tempo humano na estratégia criativa, deixando robôs fazerem o trabalho repetitivo.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-orange-600">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Escalabilidade Real</h3>
                            <p className="text-slate-600">
                                Construímos fundações sólidas. Seus sistemas não vão quebrar quando você dobrar seu tráfego ou triplicar seus leads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Culture (Optional, generic "Who serves you") */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Quem constrói o futuro com você</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Uma equipe multidisciplinar obcecada por performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                                <Users size={28} />
                            </div>
                            <h4 className="font-bold text-slate-900">Estrategistas Digitais</h4>
                            <p className="text-sm text-slate-500 mt-2">Mentes que entendem de pessoas, copy e vendas.</p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                                <ShieldCheck size={28} />
                            </div>
                            <h4 className="font-bold text-slate-900">Engenheiros de Software</h4>
                            <p className="text-sm text-slate-500 mt-2">Profissionais que garantem estabilidade e segurança.</p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center md:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400">
                                <Zap size={28} />
                            </div>
                            <h4 className="font-bold text-slate-900">Designers de UX/UI</h4>
                            <p className="text-sm text-slate-500 mt-2">Artistas focados em conversão e experiência.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-900/30 blur-3xl rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para inovar de verdade?</h2>
                    <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
                        Pare de lutar com ferramentas desconectadas. Vamos construir o ecossistema que seu negócio merece.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Agendar Consultoria
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
