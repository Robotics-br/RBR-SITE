import type { Metadata } from 'next';
import {
  COMPANY_LEGAL_NAME,
  CONTACT_ADDRESS_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  SITE_URL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Politica de Privacidade',
  description:
    'Politica de Privacidade da RoboticsBr em conformidade com a LGPD (Lei 13.709/2018). Saiba como coletamos, usamos e protegemos seus dados.',
  alternates: { canonical: `${SITE_URL}/politica-de-privacidade` },
};

const lastUpdate = '01 de maio de 2026';

export default function PoliticaPrivacidadePage() {
  return (
    <article className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-700 sm:px-6 lg:px-8 [&_a]:text-indigo-600 [&_a:hover]:underline [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
          Politica de Privacidade
        </h1>
        <p className="mb-10 text-sm text-slate-500">Ultima atualizacao: {lastUpdate}</p>

        <p>
          A {COMPANY_LEGAL_NAME} (&ldquo;<strong>RoboticsBr</strong>&rdquo;, &ldquo;nos&rdquo; ou
          &ldquo;nossa&rdquo;) respeita a sua privacidade e esta comprometida em proteger os seus
          dados pessoais conforme a Lei Geral de Protecao de Dados Pessoais (LGPD - Lei
          13.709/2018).
        </p>

        <h2>1. Quais dados coletamos</h2>
        <ul>
          <li>
            <strong>Dados de contato:</strong> nome, e-mail, telefone e mensagem fornecidos
            voluntariamente em formularios de contato.
          </li>
          <li>
            <strong>Dados de navegacao:</strong> endereco IP, tipo de navegador, paginas visitadas,
            tempo de permanencia (mediante consentimento de cookies).
          </li>
          <li>
            <strong>Cookies:</strong> utilizamos cookies funcionais e analiticos. Voce pode recusar
            cookies analiticos no banner de consentimento.
          </li>
        </ul>

        <h2>2. Finalidade do tratamento</h2>
        <p>Utilizamos seus dados para:</p>
        <ul>
          <li>responder solicitacoes de contato e propostas comerciais;</li>
          <li>personalizar a experiencia de navegacao;</li>
          <li>melhorar nossos servicos por meio de analises agregadas;</li>
          <li>cumprir obrigacoes legais e regulatorias.</li>
        </ul>

        <h2>3. Compartilhamento</h2>
        <p>Nao vendemos nem comercializamos seus dados. Compartilhamos apenas com:</p>
        <ul>
          <li>provedores de hospedagem e e-mail estritamente necessarios;</li>
          <li>plataformas de analise (Google Analytics 4) apos seu consentimento;</li>
          <li>autoridades publicas mediante ordem judicial.</li>
        </ul>

        <h2>4. Seguranca dos dados</h2>
        <p>
          Adotamos medidas tecnicas e organizacionais para proteger seus dados, incluindo
          criptografia em transito (HTTPS), controle de acesso e politicas de retencao minima.
        </p>

        <h2>5. Direitos do titular</h2>
        <p>Como titular, voce pode a qualquer momento solicitar:</p>
        <ul>
          <li>confirmacao da existencia de tratamento;</li>
          <li>acesso, correcao ou exclusao dos seus dados;</li>
          <li>portabilidade;</li>
          <li>revogacao do consentimento;</li>
          <li>oposicao a tratamento realizado com base em legitimo interesse.</li>
        </ul>
        <p>
          Para exercer estes direitos, escreva para{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>6. Retencao</h2>
        <p>
          Mantemos seus dados pelo tempo necessario para atender as finalidades descritas ou
          conforme exigencia legal. Logs de navegacao sao retidos por ate 6 meses.
        </p>

        <h2>7. Encarregado (DPO)</h2>
        <p>
          Em caso de duvidas ou solicitacoes envolvendo dados pessoais, entre em contato com nosso
          encarregado pelo e-mail <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ou
          telefone {CONTACT_PHONE_DISPLAY}.
        </p>

        <h2>8. Alteracoes</h2>
        <p>
          Esta Politica pode ser atualizada periodicamente. A versao vigente sera sempre esta
          pagina, com a data da ultima alteracao no topo.
        </p>

        <h2>9. Contato</h2>
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
