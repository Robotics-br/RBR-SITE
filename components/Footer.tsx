import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Logo height={40} />
            </div>
            <p className="text-slate-500 text-sm max-w-xs mb-6">
              Transformando ideias em máquinas de vendas através de tecnologia proprietária e estratégias de growth.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/#creators" className="hover:text-indigo-600 transition-colors">Para Criadores</a></li>
              <li><a href="/#empresas" className="hover:text-indigo-600 transition-colors">Para Empresas</a></li>
              <li><a href="/#servicos" className="hover:text-indigo-600 transition-colors">Serviços</a></li>
              <li><a href="/#portfolio" className="hover:text-indigo-600 transition-colors">Portfólio</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/#sobre" className="hover:text-indigo-600 transition-colors">Sobre Nós</a></li>
              <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contato</Link></li>
              <li><a href="/#portfolio" className="hover:text-indigo-600 transition-colors">Portfólio</a></li>
              <li><a href="/#servicos" className="hover:text-indigo-600 transition-colors">Serviços</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Recursos</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/#sistemas" className="hover:text-indigo-600 transition-colors">Sistemas</a></li>
              <li><a href="/#sites" className="hover:text-indigo-600 transition-colors">Sites</a></li>
              <li><a href="/#automatizacoes" className="hover:text-indigo-600 transition-colors">Automações</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2025 RoboticsBr. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            {/* Social placeholders */}
            <div className="w-5 h-5 bg-slate-300 rounded-full opacity-50 hover:opacity-100 cursor-pointer"></div>
            <div className="w-5 h-5 bg-slate-300 rounded-full opacity-50 hover:opacity-100 cursor-pointer"></div>
            <div className="w-5 h-5 bg-slate-300 rounded-full opacity-50 hover:opacity-100 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;