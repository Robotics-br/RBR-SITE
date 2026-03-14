import React, { useState, useEffect } from 'react';
import { Target, Cpu, TrendingUp, Brain, ChevronLeft, ChevronRight, Megaphone } from 'lucide-react';

interface TeamMember {
    id: number;
    role: string;
    slogan: string;
    description: string;
    image: string;
    highlightColor: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        role: "Engenheiro de Software & Automação",
        slogan: "Onde a tecnologia vira resultado.",
        description: "Criamos sistemas, integrações e automações que escalam o seu negócio.",
        image: "/team/eng.png",
        highlightColor: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        role: "Estrategista de Mídias Sociais",
        slogan: "Conteúdo com propósito e estratégia.",
        description: "Não postamos por postar. Criamos posicionamento, autoridade e crescimento.",
        image: "/team/social.png",
        highlightColor: "from-pink-500 to-rose-500"
    },
    {
        id: 3,
        role: "Arquiteto de Experiências Digitais",
        slogan: "Tudo conectado. Tudo funcionando.",
        description: "Integramos sistemas, automações e redes sociais em uma experiência única.",
        image: "/team/arch.png",
        highlightColor: "from-cyan-400 to-teal-500"
    },
    {
        id: 4,
        role: "Gestor de Sucesso do Cliente",
        slogan: "Seu objetivo é a nossa meta.",
        description: "Acompanhamos, ajustamos e garantimos que você chegue onde quer chegar.",
        image: "/team/cs.png",
        highlightColor: "from-amber-400 to-orange-500"
    }
];

const TeamCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % teamMembers.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, isAutoPlaying]);

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const getRelativeIndex = (index: number) => {
        const length = teamMembers.length;
        let relative = (index - activeIndex) % length;
        if (relative > length / 2) relative -= length;
        if (relative < -length / 2) relative += length;
        return relative;
    };

    return (
        <section className="py-24 bg-[#f6f9fc] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Quem conduz a transformação da sua empresa</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Conheça os especialistas dedicados a transformar sua empresa com tecnologia de suporte e automação inteligente.
                </p>
            </div>

            <div
                className="relative h-[500px] w-full max-w-6xl mx-auto"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {teamMembers.map((member, index) => {
                    const relativeIndex = getRelativeIndex(index);
                    const isActive = relativeIndex === 0;
                    const xOffset = relativeIndex * 220;
                    const zOffset = Math.abs(relativeIndex) * -150;
                    const rotateY = relativeIndex * -15;
                    const opacity = Math.max(1 - Math.abs(relativeIndex) * 0.3, 0);
                    const scale = isActive ? 1.1 : 0.9;
                    const zIndex = 50 - Math.abs(relativeIndex);

                    return (
                        <div
                            key={member.id}
                            onClick={() => { setIsAutoPlaying(false); setActiveIndex(index); }}
                            className={`absolute top-0 left-1/2 w-[350px] md:w-[400px] aspect-[4/5] transition-all duration-700 ease-out cursor-pointer rounded-2xl shadow-2xl overflow-hidden bg-white border border-slate-100
                                ${isActive ? 'shadow-indigo-500/20 ring-4 ring-white' : 'grayscale-[0.5] hover:grayscale-0'}`}
                            style={{
                                transform: `translateX(calc(-50% + ${xOffset}px)) translateZ(${zOffset}px) rotateY(${rotateY}deg) scale(${scale})`,
                                zIndex,
                                opacity,
                            }}
                        >
                            <img src={member.image} alt={member.role} className="w-full h-full object-cover" />
                            <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-slate-900 via-slate-900/40 to-transparent' : 'from-slate-900/80 to-transparent'}`} />
                            <div className={`absolute bottom-0 left-0 w-full p-8 text-left transition-all duration-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>
                                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${member.highlightColor} text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-lg`}>
                                    {member.role}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    "{member.slogan}"
                                </h3>
                                <p className={`text-slate-200 text-sm leading-relaxed transition-all duration-500 ${isActive ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center items-center gap-8 mt-4 relative z-20">
                <button onClick={prevSlide} className="p-3 rounded-full bg-white shadow-lg text-slate-700 hover:text-indigo-600 hover:scale-110 transition-all" aria-label="Anterior">
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2">
                    {teamMembers.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setIsAutoPlaying(false); setActiveIndex(idx); }}
                            className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? 'bg-indigo-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2.5'}`}
                            aria-label={`Membro ${idx + 1}`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} className="p-3 rounded-full bg-white shadow-lg text-slate-700 hover:text-indigo-600 hover:scale-110 transition-all" aria-label="Próximo">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10 overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200/50 rounded-full blur-3xl" />
            </div>
        </section>
    );
};

const About: React.FC = () => {
    React.useEffect(() => {
        document.title = 'Sobre - RoboticsBr | Ecossistema Completo de Modernização';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white overflow-hidden">
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#f6f9fc]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute -top-[30%] right-[10%] w-[50%] h-[120%] bg-gradient-to-bl from-indigo-50/50 via-purple-50/50 to-transparent rounded-full blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
                        <Brain size={14} className="text-indigo-600" />
                        <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
                            Ecossistema Completo de Modernização
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                        Mais do que ferramentas.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">
                            Parceria contínua.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Mais do que implementar ferramentas, somos o braço direito da sua transformação digital. Inovação não é um destino, é uma parceria contínua com suporte tecnológico.
                    </p>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-12 lg:mb-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-[4/3] group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mix-blend-multiply transition-opacity group-hover:opacity-75"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-64 h-64">
                                        <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                        <div className="absolute inset-4 border-4 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                        <div className="absolute inset-8 border-4 border-orange-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Brain className="w-16 h-16 text-slate-900 opacity-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Por que a solução completa faz a diferença.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Empresas que contratam uma agência de social media, outra de tecnologia e outra de sistemas acabam com processos desconectados, custos altos e resultados fragmentados.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-semibold">
                                Na RoboticsBr, tudo é integrado — porque só assim funciona de verdade.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Combinamos <span className="font-bold text-slate-900">consultoria em modernização de processos</span>, <span className="font-bold text-slate-900">especialistas de social media</span> e <span className="font-bold text-slate-900">automação do processo criativo</span> em um único ecossistema. Sua empresa ganha presença digital forte, operações automatizadas e decisões baseadas em dados — tudo com um único parceiro.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Nossos Pilares</h2>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                            O que nos guia na construção de cada solução para nossos clientes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-indigo-600">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Foco em Resultado</h3>
                            <p className="text-slate-600">
                                Tecnologia por tecnologia é hobby. Usamos automação inteligente para mover ponteiros de produtividade, receita e eficiência operacional.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-purple-600">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Automação Inteligente</h3>
                            <p className="text-slate-600">
                                Se pode ser automatizado, será. Tempo humano vai para estratégia, não para tarefas repetitivas.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-pink-600">
                                <Megaphone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Social Media Integrado</h3>
                            <p className="text-slate-600">
                                Especialistas de social media que automatizam o processo criativo da sua empresa do início ao fim.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-orange-600">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Acessibilidade Real</h3>
                            <p className="text-slate-600">
                                Soluções modulares que cabem no orçamento da sua empresa. Comece com resultados rápidos e escale conforme cresce.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <TeamCarousel />

            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-900/30 blur-3xl rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para modernizar sua empresa com um parceiro que entende seu negócio?</h2>
                    <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
                        Agende seu Diagnóstico Estratégico e descubra como unificar modernização, presença digital e automação para acelerar o crescimento da sua empresa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Agendar Diagnóstico Estratégico
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
