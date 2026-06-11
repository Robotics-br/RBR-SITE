import Link from 'next/link';
import Logo from './Logo';
import { SOCIAL } from '@/lib/constants';

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, href: SOCIAL.instagram, label: 'Instagram' },
  { icon: LinkedInIcon, href: SOCIAL.linkedin, label: 'LinkedIn' },
  { icon: YouTubeIcon, href: SOCIAL.youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6 flex items-center">
              <Logo height={40} />
            </div>
            <p className="mb-6 max-w-xs text-sm text-slate-500">
              Ecossistema completo de modernização para sua empresa. Análise de processos,
              automação, presença digital e acompanhamento contínuo — tudo em um único parceiro.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-900">Soluções</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/servicos/clinicas" className="transition-colors hover:text-indigo-600">
                  Automação para Clínicas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/distribuidoras"
                  className="transition-colors hover:text-indigo-600"
                >
                  Automação para Distribuidoras
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/escritorios"
                  className="transition-colors hover:text-indigo-600"
                >
                  Automação para Escritórios
                </Link>
              </li>
              <li>
                <Link href="/cases" className="transition-colors hover:text-indigo-600">
                  Cases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-900">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/sobre" className="transition-colors hover:text-indigo-600">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="transition-colors hover:text-indigo-600">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/contato" className="transition-colors hover:text-indigo-600">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-indigo-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-900">Recursos</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/solucoes" className="transition-colors hover:text-indigo-600">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="transition-colors hover:text-indigo-600">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-indigo-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/cases" className="transition-colors hover:text-indigo-600">
                  Cases
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
          <div className="flex flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:gap-4">
            <p>&copy; {new Date().getFullYear()} RoboticsBr. Todos os direitos reservados.</p>
            <span className="hidden text-slate-300 md:inline">|</span>
            <Link
              href="/politica-de-privacidade"
              className="transition-colors hover:text-indigo-600"
            >
              Política de Privacidade
            </Link>
            <span className="hidden text-slate-300 md:inline">|</span>
            <Link href="/termos-de-uso" className="transition-colors hover:text-indigo-600">
              Termos de Uso
            </Link>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-400 transition-colors hover:text-indigo-600"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
