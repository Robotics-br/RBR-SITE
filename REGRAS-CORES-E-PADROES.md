# Regras de Cores e Padrões — Site RoboticsBr

Este documento define as cores, tipografia e padrões visuais do site institucional da RoboticsBr. Use-o como referência ao criar ou alterar componentes para manter consistência de marca e UX.

---

## 1. Paleta de cores

### 1.1 Cores de marca (Tailwind config — `src/app/globals.css`)

As cores de destaque são definidas no `@theme` em `src/app/globals.css`:

| Nome       | Classe / Uso                | Hex       | Uso principal                             |
| ---------- | --------------------------- | --------- | ----------------------------------------- |
| **Indigo** | `accent.start` / indigo-600 | `#4f46e5` | Tecnologia, Criadores, CTAs primários     |
| **Purple** | `accent.mid` / purple-600   | `#9333ea` | Empresas, segundo destaque                |
| **Orange** | `accent.end` / orange-400   | `#fb923c` | Growth, alertas suaves, terceiro destaque |

**Gradiente principal (marca):**

- **`bg-stripe-gradient`**: `linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #fb923c 100%)`
- Uso: títulos em destaque, botões primários (ex.: "Quero Escalar Agora").

**Gradiente sutil de fundo:**

- **`bg-stripe-subtle`**: `linear-gradient(180deg, #f6f9fc 0%, #ffffff 100%)`

### 1.2 Cor de fundo principal

| Uso             | Valor     | Classe Tailwind               |
| --------------- | --------- | ----------------------------- |
| Fundo da página | `#f6f9fc` | `bg-[#f6f9fc]`                |
| Body (fallback) | `#ffffff` | Definido em `<style>` no HTML |

**Regra:** Use `#f6f9fc` para seções alternadas e fundo geral; use `bg-white` para cards e blocos de conteúdo sobre fundo claro.

### 1.3 Escala neutra (Slate)

Texto e superfícies neutras usam a escala **Slate** do Tailwind:

| Uso                 | Classe                                 | Quando usar                              |
| ------------------- | -------------------------------------- | ---------------------------------------- |
| Títulos principais  | `text-slate-900`                       | Headings (h1, h2, h3)                    |
| Texto corpo         | `text-slate-600`                       | Parágrafos, descrições                   |
| Texto secundário    | `text-slate-500`                       | Legendas, footer, metadados              |
| Texto discreto      | `text-slate-400`                       | Labels, placeholders                     |
| Fundos suaves       | `bg-slate-50`                          | Cards, seções alternadas                 |
| Bordas leves        | `border-slate-100`, `border-slate-200` | Contornos de cards, divisórias           |
| Slate escuro custom | `slate-850` (#1e293b)                  | Definido no theme.extend (se necessário) |

**Regra:** Evite preto puro (`#000`); prefira `slate-900` para contraste legível.

### 1.4 Semântica por segmento

| Segmento / Conceito   | Cor principal             | Fundo suave               | Uso no site                               |
| --------------------- | ------------------------- | ------------------------- | ----------------------------------------- |
| Criadores / Tech      | `indigo-600`              | `indigo-50`, `indigo-100` | Cards "Para Criadores", ícones, links     |
| Empresas              | `purple-600`              | `purple-50`, `purple-100` | Cards "Para Empresas", pilares            |
| Growth / Destaque     | `orange-500`/`orange-600` | `orange-100`              | Growth Marketing, alertas, terceiro pilar |
| Erro / Negativo       | `red-400`/`red-600`       | `red-100`                 | Listas de "problemas" (✕)                 |
| Sucesso / Confirmação | `emerald-500`             | —                         | Checkmarks (ex.: "Setup em 7 dias")       |

---

## 2. Tipografia

### 2.1 Fonte

- **Família:** Inter (Google Fonts).
- **Classe:** `font-sans` (configurado no Tailwind como `['Inter', 'sans-serif']`).

### 2.2 Pesos e usos

| Peso      | Classe                 | Uso típico                   |
| --------- | ---------------------- | ---------------------------- |
| Regular   | `font-normal` (400)    | Corpo de texto               |
| Medium    | `font-medium` (500)    | Links, labels                |
| Semibold  | `font-semibold` (600)  | Subtítulos, CTAs secundários |
| Bold      | `font-bold` (700)      | Títulos de card, nomes       |
| Extrabold | `font-extrabold` (800) | Hero, títulos de página      |

### 2.3 Tamanhos de título

| Elemento             | Classe típica                                       | Observação                         |
| -------------------- | --------------------------------------------------- | ---------------------------------- |
| Hero (h1)            | `text-4xl md:text-5xl lg:text-6xl` ou `lg:text-7xl` | `font-extrabold`, `tracking-tight` |
| Título de seção (h2) | `text-3xl md:text-4xl font-bold`                    | `text-slate-900`                   |
| Título de card (h3)  | `text-xl` ou `text-2xl font-bold`                   | `text-slate-900`                   |
| Subtítulo / h4       | `text-lg` ou `text-xl font-bold`                    | Conforme hierarquia                |

### 2.4 Corpo e parágrafos

- **Destaque:** `text-lg` ou `text-xl` com `text-slate-600`, `leading-relaxed`.
- **Padrão:** `text-sm` ou `text-base` com `text-slate-600`.
- **Labels / badges:** `text-xs font-bold tracking-wide uppercase` (ex.: "Marketing e Tecnologia").

---

## 3. Layout e espaçamento

### 3.1 Container

- **Classe:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Regra:** Conteúdo principal deve ficar dentro desse container para largura máxima e padding responsivo.

### 3.2 Espaçamento vertical de seções

| Tipo de seção  | Classe típica                              | Uso                     |
| -------------- | ------------------------------------------ | ----------------------- |
| Seção padrão   | `py-24`                                    | Blocos principais       |
| Hero           | `pt-32 pb-20 lg:pt-40 lg:pb-32` ou similar | Primeira dobra          |
| Rodapé / CTA   | `py-16` a `py-20`                          | Seções de fechamento    |
| Cards internos | `p-6` a `p-8` ou `p-8 md:p-12`             | Conteúdo dentro de card |

### 3.3 Grid

- **2 colunas (desktop):** `grid md:grid-cols-2 gap-12`
- **3 colunas:** `grid md:grid-cols-3 gap-8` ou `gap-12`
- **Gap padrão:** `gap-4`, `gap-6`, `gap-8` conforme densidade desejada.

---

## 4. Componentes visuais

### 4.1 Botões

**Primário (CTA principal):**

- Gradiente: `bg-stripe-gradient text-white`
- Estilo: `px-8 py-4 rounded-full font-bold`
- Hover: `hover:opacity-90` ou `hover:shadow-indigo-500/30`, `hover:-translate-y-1`
- Exemplo: "Quero Escalar Agora"

**Secundário (contorno/ghost):**

- Texto: `text-slate-700 hover:text-indigo-600`
- Sem fundo ou `bg-transparent`

**Escuro (navbar / destaque):**

- `bg-slate-900 hover:bg-slate-800 text-white`
- `px-5 py-2.5 rounded-full font-medium`
- Hover: `shadow-lg hover:shadow-xl hover:-translate-y-0.5`
- Exemplo: "Falar com Especialista"

### 4.2 Cards

- **Fundo:** `bg-white`
- **Borda:** `border border-slate-100`
- **Cantos:** `rounded-2xl`
- **Sombra:** `shadow-sm`; hover `hover:shadow-lg` ou `hover:shadow-2xl`
- **Padding:** `p-8` ou `p-8 md:p-12`
- **Hover (opcional):** `hover:-translate-y-1 transition-all duration-300`

### 4.3 Badges / Pills

- **Fundo:** `bg-indigo-50` (ou `bg-slate-100` para neutro)
- **Borda:** `border border-indigo-100` (ou `border-slate-200`)
- **Texto:** `text-xs font-bold tracking-wide uppercase text-indigo-600` (ou `text-slate-600`)
- **Forma:** `rounded-full px-3 py-1`

### 4.4 Ícones em destaque

- **Container:** `w-12 h-12` ou `w-14 h-14` com `rounded-xl` ou `rounded-2xl`
- **Cores:** `bg-indigo-100 text-indigo-600` (criadores/tech), `bg-purple-100 text-purple-600` (empresas), `bg-orange-100 text-orange-600` (growth)
- **Hover (em cards):** `group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300`

### 4.5 Navbar

- **Transparente (topo):** `bg-transparent py-5`
- **Após scroll / menu aberto:** `bg-white/80 backdrop-blur-md border-b border-slate-200 py-3`
- **Links:** `text-slate-600 hover:text-slate-900`
- **Transição:** `transition-all duration-300`

### 4.6 Footer

- **Fundo:** `bg-slate-50`
- **Borda superior:** `border-t border-slate-200`
- **Títulos de coluna:** `font-bold text-slate-900`
- **Links:** `text-slate-600 hover:text-indigo-600 transition-colors`
- **Texto copyright:** `text-slate-500 text-sm`

---

## 5. Bordas e sombras

### 5.1 Bordas

- **Cards / containers:** `border border-slate-100` ou `border-slate-200`
- **Divisórias:** `border-t border-slate-200` ou `border-slate-100`
- **Anéis (destaque):** `ring-4 ring-white` ou `ring-indigo-500/20` (uso pontual)

### 5.2 Sombras

- **Card padrão:** `shadow-sm`
- **Card hover / destaque:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Botão primário:** `shadow-lg hover:shadow-xl`
- **Blur decorativo:** `blur-3xl` em elementos de fundo (ex.: blobs)

---

## 6. Efeitos e transições

### 6.1 Transições

- **Padrão:** `transition-colors`, `transition-all duration-300`
- **Hover em botão:** `transform hover:-translate-y-1` ou `hover:-translate-y-0.5`
- **Hover em card:** `transform hover:-translate-y-1`

### 6.2 Clip e formas

- **Diagonal (seção):** classe `.clip-diagonal` — `clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)` (definida em `<style>` no `index.html`)

### 6.3 Glassmorphism (navbar)

- `bg-white/80 backdrop-blur-md`

---

## 7. Acessibilidade e consistência

- **Contraste:** Texto principal em `slate-900` sobre `white` ou `#f6f9fc`; texto secundário em `slate-600`.
- **Links:** Sempre com estado hover (ex.: `hover:text-indigo-600` ou `hover:text-slate-900`).
- **Botões:** Área de toque adequada (mín. `py-2.5`/`py-4` e `px-5`/`px-8`).
- **Não alterar:** Os valores de `accent.start`, `accent.mid`, `accent.end` e `bg-stripe-gradient` sem alinhamento com a marca; manter Inter como fonte principal.

---

## 8. Resumo rápido (checklist)

- Fundo geral: `#f6f9fc` ou `bg-white` em cards.
- Texto: `slate-900` (títulos), `slate-600` (corpo).
- Destaque principal: `bg-stripe-gradient` em CTAs e títulos em destaque.
- Indigo = criadores/tech; Purple = empresas; Orange = growth.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Seções: `py-24`; cards: `rounded-2xl`, `border-slate-100`, `shadow-sm`.
- Fonte: Inter (`font-sans`).
- Botão primário: `bg-stripe-gradient`, `rounded-full`, `font-bold`, hover com leve lift.

---

_Documento de referencia do projeto RBR-SITE. Para alterar cores globais, edite o bloco `@theme` em `src/app/globals.css` e mantenha este arquivo atualizado._
