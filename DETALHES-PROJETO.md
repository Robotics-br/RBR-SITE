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
| **TypeScript** | ~5.8.2 | Linguagem principal, target ES2022, módulo ESNext, JSX React |
| **React** | ^19.2.3 | UI reativa |
| **React DOM** | ^19.2.3 | Renderização no browser |
| **Vite** | ^6.2.0 | Build e dev server, HMR, porta 3000 |
| **React Router DOM** | ^7.11.0 | Roteamento SPA |

### 3.2 Dependências principais

- **lucide-react** (^0.561.0): ícones SVG.

### 3.3 Desenvolvimento

- **@vitejs/plugin-react** (^5.0.0): plugin React para Vite  
- **@types/node** (^22.14.0): tipos TypeScript para Node.js  

### 3.4 Estilização

- **Tailwind CSS**: via CDN, utility-first, com cores customizadas da marca (ex.: `brand-blue`, `brand-purple`, `brand-teal` no `index.html`).

### 3.5 Configuração TypeScript (tsconfig.json)

- Target: ES2022  
- Module: ESNext  
- JSX: react-jsx  
- Alias `@/*` para raiz do projeto  
- `moduleResolution`: bundler  

### 3.6 Configuração Vite (vite.config.ts)

- Porta: **3000**  
- Host: **0.0.0.0**  
- Plugin: React  
- Alias: `@` → raiz do projeto  
- Variáveis de ambiente: `GEMINI_API_KEY` (opcional)  

---

## 4. Estrutura do projeto

### 4.1 Nome do pacote (package.json)

- **name**: `roboticsbr-landing-page`  
- **private**: true  
- **type**: module  

### 4.2 Arquivos raiz

| Arquivo | Função |
|---------|--------|
| `App.tsx` | Componente raiz: Router, Navbar, Routes, Footer |
| `index.tsx` | Ponto de entrada da aplicação |
| `index.html` | HTML base e configuração Tailwind (CDN) |
| `vite.config.ts` | Configuração do Vite |
| `tsconfig.json` | Configuração TypeScript |
| `package.json` | Dependências e scripts |

### 4.3 Componentes (pasta `components/`)

| Componente | Descrição |
|------------|-----------|
| `Navbar.tsx` | Menu de navegação (sticky, glassmorphism) |
| `Hero.tsx` | Seção principal / hero |
| `Home.tsx` | Página inicial (agrupa seções da home) |
| `About.tsx` | Página "Sobre" |
| `Team.tsx` | Página "Equipe" |
| `Contact.tsx` | Página "Contato" |
| `Footer.tsx` | Rodapé com links e informações |
| `Logo.tsx` | Logo reutilizável com fallback |
| `Portfolio.tsx` | Portfólio (carrossel, auto-play) |
| `TechPillars.tsx` | Pilares tecnológicos |
| `SolutionHybrid.tsx` | Solução híbrida (TI + Marketing) |
| `SocialProof.tsx` | Prova social |
| `AudienceSegments.tsx` | Segmentos de audiência (criadores / empresas) |

### 4.4 Rotas (App.tsx)

| Rota | Componente | Página |
|------|------------|--------|
| `/` | `Home` | Página inicial |
| `/sobre` | `About` | Sobre a empresa |
| `/equipe` | `Team` | Equipe |
| `/contact` | `Contact` | Contato |

### 4.5 Assets (public)

- **Logo**: `public/images/logo-roboticsbr.png`  
- **Portfólio**: `public/images/portfolio/`  

---

## 5. Scripts e execução

### 5.1 Scripts npm

| Comando | Ação |
|---------|------|
| `npm run dev` | Servidor de desenvolvimento (http://localhost:3000) |
| `npm run build` | Build de produção (saída em `dist`) |
| `npm run preview` | Preview local da build de produção |

### 5.2 Pré-requisitos

- **Node.js**: 20.19.0+ (recomendado 22.12.0+)  
- **npm**: 10.5.2+  

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
