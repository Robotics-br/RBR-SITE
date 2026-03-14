import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, ShieldCheck, Clock } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', subject: '', message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    React.useEffect(() => {
        document.title = 'Contato - RoboticsBr';
        window.scrollTo(0, 0);
    }, []);

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.name.trim()) newErrors.name = 'Por favor, informe seu nome.';
        if (!formData.email.trim()) {
            newErrors.email = 'Por favor, informe seu email.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Por favor, informe um email válido.';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Por favor, informe o assunto.';
        if (!formData.message.trim()) newErrors.message = 'Por favor, escreva sua mensagem.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
                        <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
                            Diagnóstico Estratégico de IA
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Descubra o potencial da IA para sua empresa
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Conte-nos sobre sua empresa e receba um diagnóstico estratégico personalizado. Identificamos as melhores oportunidades de IA para otimizar seus processos e acelerar seus resultados.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Informações de Contato</h3>
                            <p className="text-slate-600 mb-8">
                                Prefere uma conversa direta? Estamos disponíveis pelos canais abaixo.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                                            <MapPin size={24} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900">Endereço</h5>
                                        <p className="mt-1 text-slate-600">
                                            Rua: Ray Wesley Herrick<br />
                                            CEP: 13565-090<br />
                                            SÃO CARLOS - SP
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                                            <Mail size={24} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900">Email</h5>
                                        <p className="mt-1 text-slate-600">
                                            roboticsbrasil@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                                            <Phone size={24} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium text-slate-900">Telefone / WhatsApp</h5>
                                        <p className="mt-1 text-slate-600">
                                            (16) 99296-7484
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-slate-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.447548972986!2d-47.8967664!3d-22.0003444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773d1f044bb7%3A0x629553c7a6e13e4b!2sR.%20Ray%20Wesley%20Herrick%2C%201601%20-%20Jardim%20Jockey%20Club%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013565-090!5e0!3m2!1spt-BR!2sbr!4v1703270000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização RoboticsBr"
                            ></iframe>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Envie uma mensagem</h3>
                        <p className="text-sm text-slate-500 mb-6">Campos com * são obrigatórios</p>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={32} className="text-emerald-600" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Mensagem enviada!</h4>
                                <p className="text-slate-600 max-w-sm">
                                    Recebemos sua mensagem e responderemos em até 2 horas úteis. Fique de olho no seu email.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                                >
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                                            placeholder="Seu nome"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                                            placeholder="seu@email.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Assunto *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.subject ? 'border-red-400' : 'border-slate-200'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none`}
                                        placeholder="Como podemos ajudar?"
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-200'} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none resize-none`}
                                        placeholder="Conte-nos mais sobre seu projeto..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm">
                                        <AlertCircle size={16} />
                                        <span>Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:transform-none flex items-center justify-center gap-2"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Enviar Mensagem</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 text-xs text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <Clock size={12} />
                                        <span>Respondemos em até 2h úteis</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <ShieldCheck size={12} />
                                        <span>Seus dados estão seguros. Nunca enviaremos spam.</span>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
