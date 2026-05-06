# Como Visualizar o Site RoboticsBr

## Pré-requisitos

Certifique-se de ter o **Node.js** instalado (versão 18 ou superior).

Para verificar se você tem o Node.js instalado, execute no terminal:
```bash
node --version
npm --version
```

Se não tiver instalado, baixe em: https://nodejs.org/

## Passos para Visualizar

### 1. Instalar Dependências

No terminal, navegue até a pasta do projeto e execute:

```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento

Após a instalação, execute:

```bash
npm run dev
```

### 3. Abrir no Navegador

O servidor iniciará e você verá uma mensagem como:

```
   ▲ Next.js 15.x.x
   - Local:        http://localhost:3000
```

**Abra seu navegador e acesse:** `http://localhost:3000`

## Comandos Disponíveis

- **`npm run dev`** - Inicia o servidor de desenvolvimento (hot reload)
- **`npm run build`** - Cria a versão de produção otimizada
- **`npm start`** - Inicia o servidor de produção (após build)

## Dicas

- O servidor tem **hot reload** - qualquer alteração no código será refletida automaticamente no navegador
- Para parar o servidor, pressione `Ctrl + C` no terminal
- O site roda na porta **3000** por padrão

## Problemas Comuns

### Erro: "command not found: npm"
- Instale o Node.js primeiro

### Erro: "Port 3000 is already in use"
- Use outra porta: `npm run dev -- --port 3001`

### Erro ao instalar dependências
- Tente limpar o cache: `npm cache clean --force`
- Delete a pasta `node_modules` e o arquivo `package-lock.json`, depois execute `npm install` novamente

---

**Pronto!** Agora você pode visualizar o site da RoboticsBr localmente.
