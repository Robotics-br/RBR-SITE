# Detalhes do Projeto RBR-SITE

Documento de referencia com a visao geral do negocio, do site institucional e da estrutura tecnica do repositorio.

> Atualizado em 2026 para refletir a stack atual (Next.js 15 + App Router). Versoes anteriores citavam Vite e GitHub Pages.

---

## 1. Visao geral

### 1.1 O que e a RoboticsBr

**RoboticsBr** e uma empresa de **Marketing e Tecnologia** cujo site oficial esta em **https://www.roboticsbr.com/**.

Slogan: _"Suas ideias, marketing e tecnologia gerando resultados."_

A empresa se posiciona como **infraestrutura de crescimento** para criadores e empresas, unindo **engenharia de software** e **estrategia digital** para gerar receita recorrente.

### 1.2 O que e este repositorio (RBR-SITE)

Este repositorio contem o **codigo-fonte do site institucional** da RoboticsBr. E a aplicacao web que serve o conteudo do enderco acima: apresentacao da empresa, servicos, portfolio e captacao de leads.

---

## 2. Finalidade do site e proposta de valor

### 2.1 Proposta de valor da RoboticsBr

- **Quebra de silos**: une TI e Marketing em um unico provedor.
- **Publicos-alvo**:
  - **Criadores e influenciadores**: CRM, automacao de vendas e analise de dados.
  - **Empresas em escala**: integracao do ecossistema de vendas com desenvolvimento e campanhas.

### 2.2 Pilares de atuacao

| Pilar                                    | Descricao                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| **Automacao de Processos**               | Fluxos inteligentes em n8n, IA e integracoes para eliminar tarefas repetitivas. |
| **Gestao Estrategica de Midias Sociais** | Planejamento, conteudo, calendario editorial e performance.                     |
| **Inteligencia de Dados (BI)**           | Tracking, dashboards e analise de metricas para decisoes baseadas em dados.     |
| **Growth e Otimizacao**                  | Funis de vendas otimizados, testes A/B continuos e automacoes que aumentam LTV. |

### 2.3 Diferenciais

- Diagnostico de Eficiencia em ate 7 dias
- Primeiro resultado concreto em 10-15 dias
- Suporte humano dedicado e acompanhamento quinzenal
- Plataforma para multiplos perfis (criadores e empresas)

### 2.4 Portfolio (cases publicados)

Sao 6 cases publicos em `/cases`, cobrindo automacao em saude, distribuicao, contabilidade, engenharia e tecnologia.

Metricas exibidas: 47% aumento medio em produtividade, 120h economizadas/mes, 15 dias para primeiro resultado, 98% de satisfacao.

---

## 3. Stack tecnica

### 3.1 Linguagens e frameworks

| Tecnologia     | Versao | Uso                              |
| -------------- | ------ | -------------------------------- |
| **TypeScript** | ~5.8   | Linguagem principal              |
| **React**      | ^19.2  | UI reativa                       |
| **Next.js**    | ^15.3  | Framework SSR/SSG com App Router |

### 3.2 Dependencias principais

- **lucide-react** (^0.561): icones SVG.
- **tailwindcss** (^4.2): estilizacao utility-first.
- **@tailwindcss/postcss**: processamento CSS.

### 3.3 Estilizacao

- **Tailwind CSS 4**: via PostCSS, com tema customizado em `src/app/globals.css` (`@theme`).
- Cores da marca: indigo (`#4f46e5`), purple (`#9333ea`), orange (`#fb923c`).

### 3.4 Configuracao TypeScript (tsconfig.json)

- Target: ES2017
- Module: ESNext
- JSX: preserve (Next.js)
- Alias `@/*` -> `./src/*`
- `moduleResolution`: bundler

### 3.5 Configuracao Next.js (next.config.ts)

- Redirects: `/contact` -> `/contato` (301)
- Imagens: AVIF + WebP
- Porta padrao: **3000**

---

## 4. Estrutura do projeto

### 4.1 Nome do pacote

- **name**: `roboticsbr-site`
- **private**: true

### 4.2 Arquivos raiz

| Arquivo              | Funcao                             |
| -------------------- | ---------------------------------- |
| `next.config.ts`     | Configuracao Next.js               |
| `postcss.config.mjs` | Configuracao PostCSS/Tailwind      |
| `tsconfig.json`      | Configuracao TypeScript            |
| `package.json`       | Dependencias e scripts             |
| `vercel.json`        | Headers de seguranca para a Vercel |
| `.env.example`       | Template de variaveis de ambiente  |

### 4.3 Componentes (`src/components/`)

| Componente             | Descricao                                         |
| ---------------------- | ------------------------------------------------- |
| `Navbar.tsx`           | Menu fixo com glassmorphism, focus trap no mobile |
| `Hero.tsx`             | Secao principal                                   |
| `Footer.tsx`           | Rodape com links, redes sociais e legais          |
| `Logo.tsx`             | Logo reutilizavel com fallback textual            |
| `Portfolio.tsx`        | Carrossel de cases                                |
| `TeamCarousel.tsx`     | Carrossel 3D da equipe acessivel                  |
| `TechPillars.tsx`      | Pilares tecnologicos                              |
| `SolutionHybrid.tsx`   | Antes vs depois                                   |
| `SocialProof.tsx`      | Metricas                                          |
| `AudienceSegments.tsx` | Quatro pilares do ecossistema                     |
| `Methodology.tsx`      | Metodologia em 3 fases                            |
| `Expertise.tsx`        | Capacidades e tecnologias                         |
| `Testimonials.tsx`     | Depoimentos                                       |
| `FAQ.tsx`              | Perguntas frequentes (com FAQPage JSON-LD)        |
| `CTASection.tsx`       | CTA final                                         |
| `AnimatedSection.tsx`  | Wrapper de animacao com suporte a reduced motion  |
| `CookieBanner.tsx`     | Consentimento (Google Consent Mode v2)            |
| `ScrollProgress.tsx`   | Barra de progresso de scroll                      |
| `WhatsAppButton.tsx`   | CTA flutuante                                     |

### 4.4 Rotas (`src/app/`)

| Rota                       | Pagina                 |
| -------------------------- | ---------------------- |
| `/`                        | Pagina inicial         |
| `/sobre`                   | Sobre a empresa        |
| `/equipe`                  | Equipe                 |
| `/contato`                 | Contato                |
| `/blog` e `/blog/[slug]`   | Blog                   |
| `/cases` e `/cases/[slug]` | Cases                  |
| `/servicos`                | Lista de servicos      |
| `/servicos/clinicas`       | Saude                  |
| `/servicos/distribuidoras` | Distribuicao           |
| `/servicos/escritorios`    | Servicos profissionais |
| `/politica-de-privacidade` | LGPD                   |
| `/termos-de-uso`           | Termos                 |

### 4.5 Dados (`src/data/`)

| Arquivo    | Conteudo                    |
| ---------- | --------------------------- |
| `cases.ts` | 6 cases de sucesso          |
| `blog.ts`  | 3 posts otimizados para SEO |

### 4.6 Assets (public)

- **Logo**: `public/images/logo-roboticsbr.png`
- **Portfolio**: `public/images/portfolio/{chatbot-clinica,automacao-propostas,dashboard-bi,triagem-docs,atendimento-ia,integracao-ia}.jpg`
- **Equipe**: `public/team/{eng,social,arch,cs}.png`
- **Manifest e icones**: `public/manifest.webmanifest` (gerado automaticamente)

---

## 5. Scripts e execucao

### 5.1 Scripts npm

| Comando             | Acao                                                |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento (http://localhost:3000) |
| `npm run build`     | Build de producao                                   |
| `npm start`         | Servidor de producao                                |
| `npm run lint`      | Linting com ESLint flat                             |
| `npm test`          | Suite Vitest                                        |
| `npm run typecheck` | `tsc --noEmit`                                      |

### 5.2 Pre-requisitos

- **Node.js**: 20+ recomendado
- **npm**: 10+

### 5.3 Instalacao

```bash
git clone <repository-url>
cd RBR-SITE
npm install
cp .env.example .env.local
# Edite .env.local com seus valores
```

### 5.4 Variaveis de ambiente

Veja `.env.example`:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - endpoint Formspree para o form de contato.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - numero do WhatsApp comercial (so digitos).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - GA4, opcional, ativado apos consentimento.
- `NEXT_PUBLIC_SITE_URL` - URL canonica.

---

## 6. Deploy

### 6.1 Vercel (recomendado)

- Build command: `npm run build`
- Output directory: `.next`
- Deploy via Git ou CLI (`vercel`).

### 6.2 Outras opcoes

Qualquer host com runtime Node 20+ que suporte Next.js standalone (Railway, Render, AWS, etc.).

---

## 7. Recursos do site

- **Acessibilidade**: WCAG AA (skip-link, focus trap, aria-live, prefers-reduced-motion).
- **SEO**: JSON-LD Organization, LocalBusiness, FAQPage, BlogPosting; sitemap dinamico; canonical URLs.
- **Performance**: SSG por rota, `next/image`, `next/font`, AVIF/WebP.
- **Privacidade**: Cookie consent com Google Consent Mode v2 e paginas legais.
- **Conversao**: CTAs segmentados, WhatsApp flutuante, formulario com honeypot.

---

## 8. Licenca e creditos

- (c) 2026 RoboticsBr. Todos os direitos reservados.

---

## 9. Referencias rapidas

- **Site em producao**: https://www.roboticsbr.com/
- **Documentacao de uso**: `README.md`
- **Como visualizar localmente**: `COMO-VISUALIZAR.md`
- **Arquitetura detalhada**: `docs/architecture.md`
- **Design system**: `docs/design-system.md`

---

_Documento de referencia do projeto RBR-SITE - RoboticsBr | Marketing e Tecnologia._
