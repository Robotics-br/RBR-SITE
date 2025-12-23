# 🚀 Como Visualizar o Site RoboticsBr

## Pré-requisitos

Certifique-se de ter o **Node.js** instalado (versão 16 ou superior).

Para verificar se você tem o Node.js instalado, execute no terminal:
```bash
node --version
npm --version
```

Se não tiver instalado, baixe em: https://nodejs.org/

## 📋 Passos para Visualizar

### 1. Instalar Dependências

No terminal, navegue até a pasta do projeto e execute:

```bash
npm install
```

Isso instalará todas as dependências necessárias (React, Vite, TypeScript, etc.).

### 2. Iniciar o Servidor de Desenvolvimento

Após a instalação, execute:

```bash
npm run dev
```

### 3. Abrir no Navegador

O servidor iniciará e você verá uma mensagem como:

```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

**Abra seu navegador e acesse:** `http://localhost:3000`

## 🎯 Comandos Disponíveis

- **`npm run dev`** - Inicia o servidor de desenvolvimento (hot reload)
- **`npm run build`** - Cria a versão de produção (para deploy)
- **`npm run preview`** - Visualiza a versão de produção localmente

## 💡 Dicas

- O servidor tem **hot reload** - qualquer alteração no código será refletida automaticamente no navegador
- Para parar o servidor, pressione `Ctrl + C` no terminal
- O site roda na porta **3000** por padrão

## 🐛 Problemas Comuns

### Erro: "command not found: npm"
- Instale o Node.js primeiro

### Erro: "Port 3000 is already in use"
- Altere a porta no arquivo `vite.config.ts` ou feche o processo que está usando a porta 3000

### Erro ao instalar dependências
- Tente limpar o cache: `npm cache clean --force`
- Delete a pasta `node_modules` e o arquivo `package-lock.json`, depois execute `npm install` novamente

---

**Pronto!** Agora você pode visualizar o site da RoboticsBr localmente! 🎉

