# RoboticsBr - Site Institucional

Site institucional da RoboticsBr desenvolvido com Next.js 15, focado em SEO, performance e experiência do usuário.

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## Tecnologias e Versões

### Linguagens e Frameworks

- **TypeScript**: `~5.8.2`
- **React**: `^19.2.3`
- **Next.js**: `^15.3.0` (App Router)
- **Tailwind CSS**: `^4.2.1`

### Dependências Principais

- **lucide-react**: `^0.561.0` - Biblioteca de ícones SVG
- **@tailwindcss/postcss**: `^4.2.1` - Processamento CSS

## Estrutura do Projeto

```
RBR-SITE/
├── src/
│   ├── app/                 # Rotas (Next.js App Router)
│   │   ├── page.tsx         # Home
│   │   ├── layout.tsx       # Layout global
│   │   ├── sobre/           # Página Sobre
│   │   ├── equipe/          # Página Equipe
│   │   ├── contato/         # Página Contato
│   │   ├── blog/            # Blog (listagem + [slug])
│   │   ├── cases/           # Cases (listagem + [slug])
│   │   ├── servicos/        # Serviços por nicho
│   │   │   ├── clinicas/
│   │   │   ├── distribuidoras/
│   │   │   └── escritorios/
│   │   ├── sitemap.ts       # Sitemap automático
│   │   └── robots.ts        # Robots.txt automático
│   ├── components/          # Componentes React reutilizáveis
│   ├── data/                # Dados (cases, blog posts)
│   ├── hooks/               # Custom hooks
│   └── lib/                 # Utilitários
├── public/
│   ├── images/              # Imagens estáticas
│   └── team/                # Fotos da equipe
├── next.config.ts           # Configuração Next.js
├── postcss.config.mjs       # Configuração PostCSS/Tailwind
├── tsconfig.json            # Configuração TypeScript
└── package.json             # Dependências do projeto
```

## Pré-requisitos

- **Node.js**: Versão 18 ou superior
- **npm**: Versão 9 ou superior

## Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd RBR-SITE
```

2. Instale as dependências:
```bash
npm install
```

## Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

### Build de Produção

```bash
npm run build
```

### Iniciar em Produção

```bash
npm start
```

## Páginas e SEO

### URLs Geradas

| Página | URL |
|--------|-----|
| Home | `/` |
| Sobre | `/sobre` |
| Equipe | `/equipe` |
| Contato | `/contato` |
| Blog | `/blog` |
| Cases | `/cases` |
| Serviços | `/servicos` |
| Automação para Clínicas | `/servicos/clinicas` |
| Automação para Distribuidoras | `/servicos/distribuidoras` |
| Automação para Escritórios | `/servicos/escritorios` |
| Cases individuais (6) | `/cases/[slug]` |
| Blog posts (3) | `/blog/[slug]` |

### SEO Implementado

- Metadata única por página (title, description, OG)
- Sitemap XML automático (`/sitemap.xml`)
- Robots.txt automático (`/robots.txt`)
- Structured data JSON-LD (cases e blog)
- Redirect 301: `/contact` → `/contato`
- Páginas pré-renderizadas (SSG)

## Funcionalidades

### Componentes Principais

- **Navbar**: Menu sticky com backdrop blur, responsivo
- **Hero**: Seção principal com animações
- **Portfolio**: Carrossel de cases com links para páginas individuais
- **TeamCarousel**: Carrossel 3D da equipe com perspectiva
- **FAQ**: Accordion com perguntas frequentes
- **Blog**: Posts com conversão markdown para HTML

### Recursos

- Design responsivo para todos os dispositivos
- Animações suaves com Intersection Observer
- Performance otimizada (SSG, lazy loading)
- Tailwind CSS 4 com tema customizado
- Botão WhatsApp flutuante
- Cookie Banner (LGPD)

## Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente o projeto Next.js
3. Deploy automático a cada push

### Via CLI

```bash
npm i -g vercel
vercel
```

## Licença

© 2026 RoboticsBr. Todos os direitos reservados.

---

**RoboticsBr** - Ecossistema Completo de Modernização para sua Empresa.
