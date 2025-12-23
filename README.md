# RoboticsBr - Site Institucional

Site institucional da RoboticsBr desenvolvido com tecnologias modernas, focado em performance, motion design e experiência do usuário.

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 🚀 Tecnologias e Versões

### Linguagens e Frameworks

- **TypeScript**: `~5.8.2`
  - Target: ES2022
  - Module: ESNext
  - JSX: React JSX

- **React**: `^19.2.3`
  - React DOM: `^19.2.3`
  - Biblioteca de UI moderna e reativa

- **Vite**: `^6.2.0`
  - Build tool e dev server de alta performance
  - Hot Module Replacement (HMR)
  - Porta: 3000

### Dependências Principais

- **lucide-react**: `^0.561.0`
  - Biblioteca de ícones SVG

### Dependências de Desenvolvimento

- **@vitejs/plugin-react**: `^5.0.0`
  - Plugin React para Vite

- **@types/node**: `^22.14.0`
  - Tipos TypeScript para Node.js

### Estilização

- **Tailwind CSS**: Via CDN
  - Framework CSS utility-first
  - Configuração customizada com cores da marca

## 📁 Estrutura do Projeto

```
site-rbr/
├── components/          # Componentes React
│   ├── Navbar.tsx      # Menu de navegação
│   ├── Hero.tsx        # Seção principal
│   ├── Portfolio.tsx   # Portfólio com carrossel
│   ├── Logo.tsx        # Componente do logo
│   └── ...
├── public/
│   └── images/         # Imagens estáticas
│       ├── logo-roboticsbr.png
│       └── portfolio/  # Imagens do portfólio
├── App.tsx             # Componente principal
├── index.html          # HTML base
├── index.tsx           # Ponto de entrada
├── vite.config.ts      # Configuração do Vite
├── tsconfig.json       # Configuração TypeScript
└── package.json        # Dependências do projeto
```

## 🛠️ Pré-requisitos

- **Node.js**: Versão 20.19.0 ou superior (recomendado: 22.12.0+)
- **npm**: Versão 10.5.2 ou superior

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd site-rbr
```

2. Instale as dependências:
```bash
npm install --legacy-peer-deps
```

3. Configure variáveis de ambiente (opcional):
```bash
# Crie um arquivo .env.local se necessário
GEMINI_API_KEY=your_api_key_here
```

## 🚀 Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

### Build de Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🎨 Funcionalidades

### Componentes Principais

- ✅ **Navbar**: Menu de navegação sticky com glassmorphism
- ✅ **Hero**: Seção principal com call-to-action
- ✅ **Portfolio**: Carrossel de projetos com auto-play
- ✅ **Logo**: Componente reutilizável com fallback
- ✅ **Footer**: Rodapé com links e informações

### Recursos

- 🎭 **Motion Design**: Animações suaves e transições
- 📱 **Responsivo**: Design adaptável para todos os dispositivos
- ⚡ **Performance**: Otimizado com Vite e lazy loading
- 🎨 **Tailwind CSS**: Estilização moderna e customizável

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza build de produção

## 🔧 Configuração

### Porta do Servidor

A porta padrão é `3000`. Para alterar, edite `vite.config.ts`:

```typescript
server: {
  port: 3000, // Altere aqui
  host: '0.0.0.0',
}
```

### Cores da Marca

As cores podem ser configuradas no `index.html` (configuração do Tailwind):

```javascript
colors: {
  'brand-blue': '#4A90E2',
  'brand-purple': '#764BA2',
  'brand-teal': '#32E0C4',
}
```

## 📸 Imagens

### Logo

Coloque o logo em: `public/images/logo-roboticsbr.png`

### Portfólio

Coloque as imagens do portfólio em: `public/images/portfolio/`

## 🌐 Deploy

### Vercel (Recomendado)

O React 19.2.3 é **totalmente compatível** com a Vercel. Para fazer deploy:

1. **Via Git (Recomendado)**:
   - Conecte seu repositório GitHub/GitLab/Bitbucket à Vercel
   - A Vercel detectará automaticamente o projeto Vite
   - Configure o build command: `npm run build`
   - Configure o output directory: `dist`
   - Deploy automático a cada push

2. **Via CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Via Dashboard**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Importe seu repositório
   - Configure e faça deploy

**Nota**: A Vercel tem proteções automáticas contra vulnerabilidades conhecidas do React 19.

### Outras Opções

- **Netlify**: Arraste a pasta do projeto ou conecte via Git
- **GitHub Pages**: Ative nas configurações do repositório
- **Servidor próprio**: Faça upload dos arquivos via FTP

## 📄 Licença

© 2024 RoboticsBr. Todos os direitos reservados.

## 👨‍💻 Desenvolvido com

- Motion Design e CSS Animations
- CRO (Conversion Rate Optimization)
- Copywriting estratégico
- UX/UI Design moderno

---

**RoboticsBr** - Marketing e Tecnologia | Suas ideias, marketing e tecnologia gerando resultados.
