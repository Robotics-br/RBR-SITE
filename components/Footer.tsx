import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, href: 'https://instagram.com/roboticsbr', label: 'Instagram' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/company/roboticsbr', label: 'LinkedIn' },
  { icon: YouTubeIcon, href: 'https://youtube.com/@roboticsbr', label: 'YouTube' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Logo height={40} />
            </div>
            <p className="text-slate-500 text-sm max-w-xs mb-6">
              Ecossistema completo de modernização para sua empresa. Análise de processos, automação, presença digital e acompanhamento contínuo — tudo em um único parceiro.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-indigo-600 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/#solucoes" className="hover:text-indigo-600 transition-colors">Modernização de Processos</a></li>
              <li><a href="/#solucoes" className="hover:text-indigo-600 transition-colors">Gestão Estratégica de Mídias</a></li>
              <li><a href="/#metodologia" className="hover:text-indigo-600 transition-colors">Metodologia</a></li>
              <li><a href="/#portfolio" className="hover:text-indigo-600 transition-colors">Cases</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/sobre" className="hover:text-indigo-600 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/equipe" className="hover:text-indigo-600 transition-colors">Equipe</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contato</Link></li>
              <li><a href="/#portfolio" className="hover:text-indigo-600 transition-colors">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Recursos</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/#solucoes" className="hover:text-indigo-600 transition-colors">Automação de Fluxos</a></li>
              <li><a href="/#solucoes" className="hover:text-indigo-600 transition-colors">Automação Criativa</a></li>
              <li><a href="/#servicos" className="hover:text-indigo-600 transition-colors">Inteligência de Dados</a></li>
              <li><Link to="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} RoboticsBr. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-400 hover:text-indigo-600 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
