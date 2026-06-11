import type { Metadata } from 'next';
import {
  COMPANY_LEGAL_NAME,
  CONTACT_ADDRESS_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  SITE_URL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade da RoboticsBr em conformidade com a LGPD (Lei 13.709/2018). Saiba como coletamos, usamos e protegemos seus dados.',
  alternates: { canonical: `${SITE_URL}/politica-de-privacidade` },
};

const lastUpdate = '01 de maio de 2026';

export default function PoliticaPrivacidadePage() {
  return (
    <article className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-700 sm:px-6 lg:px-8 [&_a]:text-indigo-600 [&_a:hover]:underline [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mb-10 text-sm text-slate-500">Última atualização: {lastUpdate}</p>

        <p>
          A {COMPANY_LEGAL_NAME} (&ldquo;<strong>RoboticsBr</strong>&rdquo;, &ldquo;nós&rdquo; ou
          &ldquo;nossa&rdquo;) respeita a sua privacidade e está comprometida em proteger os seus
          dados pessoais conforme a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei
          13.709/2018).
        </p>

        <h2>1. Quais dados coletamos</h2>
        <ul>
          <li>
            <strong>Dados de contato:</strong> nome, e-mail, telefone e mensagem fornecidos
            voluntariamente em formulários de contato.
          </li>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas,
            tempo de permanência (mediante consentimento de cookies).
          </li>
          <li>
            <strong>Cookies:</strong> utilizamos cookies funcionais e analíticos. Você pode recusar
            cookies analíticos no banner de consentimento.
          </li>
        </ul>

        <h2>2. Finalidade do tratamento</h2>
        <p>Utilizamos seus dados para:</p>
        <ul>
          <li>responder solicitações de contato e propostas comerciais;</li>
          <li>personalizar a experiência de navegação;</li>
          <li>melhorar nossos serviços por meio de análises agregadas;</li>
          <li>cumprir obrigações legais e regulatórias.</li>
        </ul>

        <h2>3. Compartilhamento</h2>
        <p>Não vendemos nem comercializamos seus dados. Compartilhamos apenas com:</p>
        <ul>
          <li>provedores de hospedagem e e-mail estritamente necessários;</li>
          <li>plataformas de análise (Google Analytics 4) após seu consentimento;</li>
          <li>autoridades públicas mediante ordem judicial.</li>
        </ul>

        <h2>4. Segurança dos dados</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo
          criptografia em trânsito (HTTPS), controle de acesso e políticas de retenção mínima.
        </p>

        <h2>5. Direitos do titular</h2>
        <p>Como titular, você pode a qualquer momento solicitar:</p>
        <ul>
          <li>confirmação da existência de tratamento;</li>
          <li>acesso, correção ou exclusão dos seus dados;</li>
          <li>portabilidade;</li>
          <li>revogação do consentimento;</li>
          <li>oposição a tratamento realizado com base em legítimo interesse.</li>
        </ul>
        <p>
          Para exercer estes direitos, escreva para{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>6. Retenção</h2>
        <p>
          Mantemos seus dados pelo tempo necessário para atender às finalidades descritas ou
          conforme exigência legal. Logs de navegação são retidos por até 6 meses.
        </p>

        <h2>7. Encarregado (DPO)</h2>
        <p>
          Em caso de dúvidas ou solicitações envolvendo dados pessoais, entre em contato com nosso
          encarregado pelo e-mail <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ou
          telefone {CONTACT_PHONE_DISPLAY}.
        </p>

        <h2>8. Alterações</h2>
        <p>
          Esta Política pode ser atualizada periodicamente. A versão vigente será sempre esta
          página, com a data da última alteração no topo.
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
