import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Diagnóstico de Eficiência',
  description:
    'Fale com a RoboticsBr: endereço em São Carlos, e-mail e telefone. Solicite seu diagnóstico de eficiência gratuito.',
  alternates: { canonical: 'https://www.roboticsbr.com/contato' },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
