import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <Logo
              height={40}
              variant="light"
              className="transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#solucoes" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Soluções</a>
            <a href="/#creators" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Para Criadores</a>
            <a href="/#empresas" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Para Empresas</a>
            <a href="/#portfolio" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Portfólio</a>
            <Link to="/sobre" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Sobre</Link>
            <Link to="/equipe" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Equipe</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contato</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
              Falar com Especialista
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col space-y-4">
          <a href="/#solucoes" className="text-base font-medium text-slate-600 py-2">Soluções</a>
          <a href="/#creators" className="text-base font-medium text-slate-600 py-2">Para Criadores</a>
          <a href="/#empresas" className="text-base font-medium text-slate-600 py-2">Para Empresas</a>
          <a href="/#portfolio" className="text-base font-medium text-slate-600 py-2">Portfólio</a>
          <Link to="/sobre" className="text-base font-medium text-slate-600 py-2">Sobre</Link>
          <Link to="/equipe" className="text-base font-medium text-slate-600 py-2">Equipe</Link>
          <Link to="/contact" className="text-base font-medium text-slate-600 py-2">Contato</Link>
          <Link to="/contact" className="w-full bg-slate-900 text-white px-5 py-3 rounded-lg text-base font-medium text-center">
            Falar com Especialista
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;