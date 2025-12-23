import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    React.useEffect(() => {
        document.title = 'Contato - RoboticsBr';
        window.scrollTo(0, 0); // Ensure scroll to top
    }, []);

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                        Fale Conosco
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Estamos prontos para transformar sua ideia em realidade. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Informações de Contato</h3>
                            <p className="text-slate-600 mb-8">
                                Prefere uma conversa presencial ou enviar algo? Aqui está onde você pode nos encontrar.
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
                                            Rua: Ray Wesley Herrick, 1601<br />
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
                                            (16) 99999-9999
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder or Google Maps Embed */}
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

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Assunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                                    placeholder="Como podemos ajudar?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none resize-none"
                                    placeholder="Conte-nos mais sobre seu projeto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <span>Enviar Mensagem</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
