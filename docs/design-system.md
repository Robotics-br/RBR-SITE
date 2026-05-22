# Design System - RBR-SITE

Resumo do sistema visual. Para a referencia completa, veja `REGRAS-CORES-E-PADROES.md`.

## Cores da marca

Definidas em `src/app/globals.css` no bloco `@theme`:

| Token                       | Hex       | Uso                                   |
| --------------------------- | --------- | ------------------------------------- |
| `accent-start` (indigo-600) | `#4f46e5` | Tecnologia, criadores, CTAs primarios |
| `accent-mid` (purple-600)   | `#9333ea` | Empresas, segundo destaque            |
| `accent-end` (orange-400)   | `#fb923c` | Growth, terceiro destaque             |
| `slate-850`                 | `#1e293b` | Slate escuro custom                   |

Gradiente principal: `bg-stripe-gradient` (135deg indigo -> purple -> orange).

## Tipografia

- Familia: Inter via `next/font/google` (variavel `--font-inter`).
- Pesos disponiveis: 400, 500, 600, 700, 800.
- Hierarquia:
  - h1 hero: `text-4xl md:text-5xl lg:text-6xl font-extrabold`
  - h2 secao: `text-3xl md:text-4xl font-bold`
  - h3 card: `text-xl md:text-2xl font-bold`
  - corpo: `text-base text-slate-600`

## Layout

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Secao padrao: `py-24`.
- Hero: `pt-32 pb-20 lg:pt-40 lg:pb-32`.

## Componentes-chave

- Botao primario: `bg-stripe-gradient text-white rounded-full font-bold`.
- Botao escuro (navbar): `bg-slate-900 hover:bg-slate-800 rounded-full`.
- Card: `bg-white rounded-2xl border border-slate-100 shadow-sm`.
- Badge: `bg-indigo-50 border border-indigo-100 rounded-full text-xs font-bold uppercase`.

## Hierarquia de z-index

Definida em `src/app/globals.css`:

| Variavel      | Valor | Uso                        |
| ------------- | ----- | -------------------------- |
| `--z-base`    | 0     | Conteudo padrao            |
| `--z-sticky`  | 30    | Elementos sticky internos  |
| `--z-nav`     | 40    | Navbar                     |
| `--z-overlay` | 50    | Mobile menu, dropdowns     |
| `--z-toast`   | 60    | Banners (cookie, WhatsApp) |
| `--z-modal`   | 70    | Modais                     |
| `--z-skip`    | 100   | Skip-link                  |

## Acessibilidade

- Contraste: texto principal `slate-900` sobre branco/`#f6f9fc`; secundario `slate-600`.
- Foco visivel: anel indigo em todos os elementos interativos.
- Animacoes desabilitadas via `@media (prefers-reduced-motion: reduce)`.
- Area minima de toque: 44x44px (WCAG 2.5.5).

## Tokens de animacao

- Transicao curta: `transition-colors`.
- Transicao media: `transition-all duration-300`.
- Hover lift: `hover:-translate-y-1`.

Para detalhes adicionais (cards, badges, gradientes secundarios, navbar sticky), veja `REGRAS-CORES-E-PADROES.md`.
