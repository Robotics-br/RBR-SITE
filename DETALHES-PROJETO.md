# Detalhes do Projeto RBR-SITE

Documento de referência com a visão geral do negócio, do site institucional e da estrutura técnica do repositório.

---

## 1. Visão geral

### 1.1 O que é o RoboticsBr

**RoboticsBr** é uma empresa de **Marketing e Tecnologia** cujo site oficial está em:

**https://www.roboticsbr.com/**

Slogan:

> *"Suas ideias, marketing e tecnologia gerando resultados."*

A empresa se posiciona como **infraestrutura de crescimento** para criadores e empresas, unindo **engenharia de software** e **estratégia digital** para gerar receita recorrente.

### 1.2 O que é este repositório (RBR-SITE)

Este repositório contém o **código-fonte do site institucional** da RoboticsBr. Ou seja, é a aplicação web que serve o conteúdo do endereço acima: apresentação da empresa, serviços, portfólio e captação de leads.

---

## 2. Finalidade do site e proposta de valor

### 2.1 Proposta de valor da RoboticsBr

- **Quebra de silos**: une TI e Marketing em um único provedor — "agências não entendem de código; fábricas de software não entendem de vendas".
- **Públicos-alvo**:
  - **Criadores e influenciadores**: CRM, automação de vendas e análise de dados para monetizar audiência.
  - **Empresas em escala**: integração do ecossistema de vendas com desenvolvimento e campanhas com ROI mensurável.

### 2.2 Pilares de atuação (conteúdo do site)

| Pilar | Descrição |
|-------|-----------|
| **Desenvolvimento High-End** | Sistemas web, PWAs e arquiteturas de vendas focadas em conversão e estabilidade, inclusive em picos de tráfego. |
| **Inteligência de Dados (BI)** | Tracking server-side, dashboards de BI e decisões de marketing baseadas em dados. |
| **Growth Marketing** | Tráfego pago, funil de vendas, A/B testing e automações para aumentar LTV e reduzir CAC. |

### 2.3 Diferenciais apresentados no site

- Setup em 7 dias  
- Suporte dedicado  
- Fim da barreira entre T.I. e Marketing  
- Uma plataforma para múltiplos perfis (criadores e empresas)

### 2.4 Portfólio (tipos de projeto citados)

- E-commerce de alta performance  
- Sistema de gestão empresarial  
- Landing page de conversão  
- CRM personalizado  
- Site institucional moderno  
- Plataforma de automação  

Métricas exibidas: 50+ projetos entregues, 98% taxa de satisfação, 200% aumento médio em conversão, suporte 24/7.

---

## 3. Stack técnica

### 3.1 Linguagens e frameworks

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **TypeScript** | ~5.8.2 | Linguagem principal |
| **React** | ^19.2.3 | UI reativa |
| **React DOM** | ^19.2.3 | Renderização |
| **Next.js** | ^15.3.0 | Framework SSR/SSG com App Router |

### 3.2 Dependências principais

- **lucide-react** (^0.561.0): ícones SVG.
- **tailwindcss** (^4.2.1): estilização utility-first.
- **@tailwindcss/postcss** (^4.2.1): processamento CSS.

### 3.3 Estilização

- **Tailwind CSS 4**: via PostCSS, com tema customizado em `src/app/globals.css` (`@theme`).
- Cores da marca: indigo (`#4f46e5`), purple (`#9333ea`), orange (`#fb923c`).

### 3.4 Configuração TypeScript (tsconfig.json)

- Target: ES2017  
- Module: ESNext  
- JSX: preserve (Next.js)  
- Alias `@/*` → `./src/*`  
- `moduleResolution`: bundler  

### 3.5 Configuração Next.js (next.config.ts)

- Redirects: `/contact` → `/contato` (301)  
- Porta padrão: **3000**  

---

## 4. Estrutura do projeto

### 4.1 Nome do pacote (package.json)

- **name**: `roboticsbr-site`  
- **private**: true  

### 4.2 Arquivos raiz

| Arquivo | Função |
|---------|--------|
| `next.config.ts` | Configuração Next.js (redirects) |
| `postcss.config.mjs` | Configuração PostCSS/Tailwind |
| `tsconfig.json` | Configuração TypeScript |
| `package.json` | Dependências e scripts |

### 4.3 Componentes (pasta `src/components/`)

| Componente | Descrição |
|------------|-----------|
| `Navbar.tsx` | Menu de navegação (sticky, glassmorphism) |
| `Hero.tsx` | Seção principal / hero |
| `Footer.tsx` | Rodapé com links e informações |
| `Logo.tsx` | Logo reutilizável com fallback |
| `Portfolio.tsx` | Portfólio (carrossel com links para cases) |
| `TeamCarousel.tsx` | Carrossel 3D da equipe |
| `TechPillars.tsx` | Pilares tecnológicos |
| `SolutionHybrid.tsx` | Solução híbrida |
| `SocialProof.tsx` | Prova social com métricas |
| `AudienceSegments.tsx` | Ecossistema completo |
| `Methodology.tsx` | Metodologia em 3 fases |
| `Expertise.tsx` | Expertise e tecnologias |
| `Testimonials.tsx` | Depoimentos de clientes |
| `FAQ.tsx` | Perguntas frequentes |
| `CTASection.tsx` | Call-to-action final |
| `AnimatedSection.tsx` | Wrapper de animação scroll |

### 4.4 Rotas (App Router — `src/app/`)

| Rota | Página |
|------|--------|
| `/` | Página inicial |
| `/sobre` | Sobre a empresa |
| `/equipe` | Equipe |
| `/contato` | Contato |
| `/blog` | Listagem de posts |
| `/blog/[slug]` | Post individual |
| `/cases` | Listagem de cases |
| `/cases/[slug]` | Case individual |
| `/servicos` | Página geral de serviços |
| `/servicos/clinicas` | Automação para clínicas |
| `/servicos/distribuidoras` | Automação para distribuidoras |
| `/servicos/escritorios` | Automação para escritórios |

### 4.5 Dados (pasta `src/data/`)

| Arquivo | Conteúdo |
|---------|----------|
| `cases.ts` | 6 cases de sucesso com storytelling completo |
| `blog.ts` | 3 posts otimizados para SEO |

### 4.6 Assets (public)

- **Logo**: `public/images/logo-roboticsbr.png`  
- **Portfólio**: `public/images/portfolio/`  
- **Equipe**: `public/team/` (eng.png, social.png, arch.png, cs.png)  

---

## 5. Scripts e execução

### 5.1 Scripts npm

| Comando | Ação |
|---------|------|
| `npm run dev` | Servidor de desenvolvimento (http://localhost:3000) |
| `npm run build` | Build de produção (SSG/SSR) |
| `npm start` | Servidor de produção |
| `npm run lint` | Linting com Next.js |

### 5.2 Pré-requisitos

- **Node.js**: 18+  
- **npm**: 9+  

### 5.3 Instalação

```bash
git clone <repository-url>
cd RBR-SITE
npm install --legacy-peer-deps
```

### 5.4 Variáveis de ambiente (opcional)

Arquivo `.env.local` (ou equivalente) para uso opcional de API (ex.: Gemini):

- `GEMINI_API_KEY` — chave da API Gemini, se utilizada no projeto.

---

## 6. Deploy

### 6.1 Vercel (recomendado)

- Build command: `npm run build`  
- Output directory: `dist`  
- Deploy via Git (GitHub/GitLab/Bitbucket), CLI (`vercel`) ou dashboard.

### 6.2 Outras opções

- **Netlify**: conexão via Git ou upload  
- **GitHub Pages**: configuração no repositório  
- **Servidor próprio**: upload da pasta `dist` (ex.: FTP)  

---

## 7. Recursos e práticas do site

- **Motion design**: animações e transições  
- **Responsivo**: layout adaptável a diferentes dispositivos  
- **Performance**: Vite, lazy loading quando aplicável  
- **CRO**: foco em conversão (copy e estrutura de páginas)  
- **UX/UI**: design moderno com Tailwind e componentes reutilizáveis  

---

## 8. Licença e créditos

- © 2024 RoboticsBr. Todos os direitos reservados.  
- Desenvolvido com: Motion Design, CRO, copywriting estratégico e UX/UI moderna.  

---

## 9. Referências rápidas

- **Site em produção**: https://www.roboticsbr.com/  
- **Documentação de uso**: `README.md` (instalação, comandos, deploy)  
- **Como visualizar localmente**: `COMO-VISUALIZAR.md`  

---

*Documento gerado para referência do projeto RBR-SITE — RoboticsBr | Marketing e Tecnologia.*
