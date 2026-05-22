'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '/solucoes', label: 'Soluções' },
  { href: '/metodologia', label: 'Metodologia' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/cases', label: 'Cases' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/equipe', label: 'Equipe' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock + focus trap + Esc to close
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        const focusable = document.querySelectorAll<HTMLElement>(
          '#mobile-nav a, #mobile-nav button'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const showSolid = isScrolled || mobileMenuOpen || !isHome;
  const close = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed z-[var(--z-nav)] w-full transition-all duration-300 ${
        showSolid
          ? 'border-b border-slate-200 bg-white/80 py-3 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
      aria-label="Navegacao principal"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex cursor-pointer items-center"
            aria-label="Pagina inicial"
          >
            <Logo
              height={40}
              variant="light"
              className="transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contato"
              className="inline-block transform rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
            >
              Diagnóstico de Eficiência Gratuito
            </Link>
          </div>

          <div className="md:hidden">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="rounded-md p-1 text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          aria-label="Menu de navegacao"
          className="absolute top-full left-0 flex w-full flex-col space-y-4 border-b border-slate-100 bg-white p-4 shadow-xl md:hidden"
        >
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.href}
              ref={idx === 0 ? firstLinkRef : undefined}
              href={link.href}
              onClick={close}
              className="py-2 text-base font-medium text-slate-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={close}
            className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-center text-base font-bold text-white"
          >
            Diagnóstico de Eficiência Gratuito
          </Link>
        </div>
      )}
    </nav>
  );
}
