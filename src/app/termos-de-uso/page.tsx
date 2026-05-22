import type { Metadata } from 'next';
import {
  COMPANY_LEGAL_NAME,
  CONTACT_ADDRESS_DISPLAY,
  CONTACT_EMAIL,
  SITE_URL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos e condicoes para uso do site da RoboticsBr e dos servicos disponibilizados.',
  alternates: { canonical: `${SITE_URL}/termos-de-uso` },
};

const lastUpdate = '01 de maio de 2026';

export default function TermosDeUsoPage() {
  return (
    <article className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-700 sm:px-6 lg:px-8 [&_a]:text-indigo-600 [&_a:hover]:underline [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">Termos de Uso</h1>
        <p className="mb-10 text-sm text-slate-500">Ultima atualizacao: {lastUpdate}</p>

        <p>
          Bem-vindo(a) ao site da {COMPANY_LEGAL_NAME} (&ldquo;<strong>RoboticsBr</strong>&rdquo;).
          Ao acessar ou utilizar este site, voce concorda com os termos abaixo. Caso nao concorde,
          por favor nao utilize o site.
        </p>

        <h2>1. Objetivo do site</h2>
        <p>
          Este site tem carater informativo, apresenta os servicos da RoboticsBr e permite contato
          comercial. Nao constitui oferta vinculante - propostas formais sao feitas apos diagnostico
          e em documento especifico.
        </p>

        <h2>2. Uso aceitavel</h2>
        <p>Voce se compromete a:</p>
        <ul>
          <li>nao realizar engenharia reversa, scraping massivo ou tentativas de invasao;</li>
          <li>nao publicar conteudo ofensivo, fraudulento ou ilegal por meio de formularios;</li>
          <li>respeitar os direitos de terceiros, incluindo propriedade intelectual.</li>
        </ul>

        <h2>3. Propriedade intelectual</h2>
        <p>
          Todo o conteudo do site (textos, imagens, codigo, marca, logotipos) e de propriedade
          exclusiva da RoboticsBr ou de seus licenciantes. E proibida a reproducao sem autorizacao
          previa por escrito.
        </p>

        <h2>4. Links externos</h2>
        <p>
          O site pode conter links para sites de terceiros. Nao nos responsabilizamos pelo conteudo,
          politicas ou praticas dessas paginas.
        </p>

        <h2>5. Limitacao de responsabilidade</h2>
        <p>
          A RoboticsBr nao se responsabiliza por danos diretos ou indiretos decorrentes do uso ou
          impossibilidade de uso deste site, salvo nas hipoteses previstas em lei. Esforcamo-nos
          para manter o site disponivel, mas podem ocorrer interrupcoes tecnicas.
        </p>

        <h2>6. Modificacoes</h2>
        <p>
          Reservamos o direito de alterar estes Termos a qualquer momento. A versao vigente sera
          sempre esta pagina, com a data atualizada no topo.
        </p>

        <h2>7. Lei aplicavel e foro</h2>
        <p>
          Estes Termos sao regidos pelas leis da Republica Federativa do Brasil. Fica eleito o foro
          da comarca de Sao Carlos/SP para dirimir eventuais controversias.
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
