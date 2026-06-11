import type { Metadata } from 'next';
import {
  COMPANY_LEGAL_NAME,
  CONTACT_ADDRESS_DISPLAY,
  CONTACT_EMAIL,
  SITE_URL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos e condições para uso do site da RoboticsBr e dos serviços disponibilizados.',
  alternates: { canonical: `${SITE_URL}/termos-de-uso` },
};

const lastUpdate = '01 de maio de 2026';

export default function TermosDeUsoPage() {
  return (
    <article className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-700 sm:px-6 lg:px-8 [&_a]:text-indigo-600 [&_a:hover]:underline [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">Termos de Uso</h1>
        <p className="mb-10 text-sm text-slate-500">Última atualização: {lastUpdate}</p>

        <p>
          Bem-vindo(a) ao site da {COMPANY_LEGAL_NAME} (&ldquo;<strong>RoboticsBr</strong>&rdquo;).
          Ao acessar ou utilizar este site, você concorda com os termos abaixo. Caso não concorde,
          por favor não utilize o site.
        </p>

        <h2>1. Objetivo do site</h2>
        <p>
          Este site tem caráter informativo, apresenta os serviços da RoboticsBr e permite contato
          comercial. Não constitui oferta vinculante - propostas formais são feitas após diagnóstico
          e em documento específico.
        </p>

        <h2>2. Uso aceitável</h2>
        <p>Você se compromete a:</p>
        <ul>
          <li>não realizar engenharia reversa, scraping massivo ou tentativas de invasão;</li>
          <li>não publicar conteúdo ofensivo, fraudulento ou ilegal por meio de formulários;</li>
          <li>respeitar os direitos de terceiros, incluindo propriedade intelectual.</li>
        </ul>

        <h2>3. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo do site (textos, imagens, código, marca, logotipos) é de propriedade
          exclusiva da RoboticsBr ou de seus licenciantes. É proibida a reprodução sem autorização
          prévia por escrito.
        </p>

        <h2>4. Links externos</h2>
        <p>
          O site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo,
          políticas ou práticas dessas páginas.
        </p>

        <h2>5. Limitação de responsabilidade</h2>
        <p>
          A RoboticsBr não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou
          impossibilidade de uso deste site, salvo nas hipóteses previstas em lei. Esforçamo-nos
          para manter o site disponível, mas podem ocorrer interrupções técnicas.
        </p>

        <h2>6. Modificações</h2>
        <p>
          Reservamos o direito de alterar estes Termos a qualquer momento. A versão vigente será
          sempre esta página, com a data atualizada no topo.
        </p>

        <h2>7. Lei aplicável e foro</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
          da comarca de São Carlos/SP para dirimir eventuais controvérsias.
        </p>

        <h2>8. Contato</h2>
        <p>
          {COMPANY_LEGAL_NAME}
          <br />
          {CONTACT_ADDRESS_DISPLAY}
          <br />
          E-mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </article>
  );
}
