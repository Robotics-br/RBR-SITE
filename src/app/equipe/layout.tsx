import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossa Equipe',
  description:
    'Conheça o time RoboticsBr: automação, mídias sociais, experiência digital e sucesso do cliente.',
  alternates: { canonical: 'https://www.roboticsbr.com/equipe' },
};

export default function EquipeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
