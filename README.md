# 🧪 Prova Técnica Tagplus - QA (Parte 2 - Front-End)

Este repositório contém a segunda parte da prova técnica para a vaga de **Analista de QA Júnior**, referente à automação de **testes de interface (E2E)** utilizando **Playwright** no site [SauceDemo](https://www.saucedemo.com/).

---

## 🎯 Objetivo

Avaliar a capacidade de:
- Criar testes automatizados de interface simulando ações reais de um usuário.
- Escrever código limpo, organizado e com boas práticas.
- Validar fluxos críticos de login, carrinho e finalização de compra.
- Entregar uma automação funcional, legível e bem estruturada.

---

## 🧩 Cenários Automatizados

### 🔐 Login
- Login com sucesso utilizando credenciais válidas.  
- Tentativas de login com usuário e senha incorretos.  
- Validação de mensagens de erro para campos obrigatórios vazios.  

### 🛒 Carrinho de Compras
- Adicionar múltiplos produtos ao carrinho.  
- Remover produtos (fixos e aleatórios) do carrinho.  
- Validar a quantidade correta de itens restantes após remoção.  

### 💳 Finalização de Compra
- Verificação de mensagens de erro em campos obrigatórios (nome, sobrenome, CEP).  
- Finalização completa da compra com múltiplos produtos.  
- Validação da mensagem de confirmação:  
  > “Thank you for your order!”

---

## 🧠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)
- [CSS Escape](https://www.npmjs.com/package/css.escape)

---

## ⚙️ Estrutura do Projeto

------------------------------------------------------------------------

## 📁 Estrutura Final de Pastas

# 🧪 Prova Técnica Tagplus - QA (Parte 2 - Front-End)

Este repositório contém a segunda parte da prova técnica para a vaga de **Analista de QA Júnior**, referente à automação de **testes de interface (E2E)** utilizando **Playwright** no site [SauceDemo](https://www.saucedemo.com/).

---

## 🎯 Objetivo

Avaliar a capacidade de:
- Criar testes automatizados de interface simulando ações reais de um usuário.
- Escrever código limpo, organizado e com boas práticas.
- Validar fluxos críticos de login, carrinho e finalização de compra.
- Entregar uma automação funcional, legível e bem estruturada.

---

## 🧩 Cenários Automatizados

### 🔐 Login
- Login com sucesso utilizando credenciais válidas.  
- Tentativas de login com usuário e senha incorretos.  
- Validação de mensagens de erro para campos obrigatórios vazios.  

### 🛒 Carrinho de Compras
- Adicionar múltiplos produtos ao carrinho.  
- Remover produtos (fixos e aleatórios) do carrinho.  
- Validar a quantidade correta de itens restantes após remoção.  

### 💳 Finalização de Compra
- Verificação de mensagens de erro em campos obrigatórios (nome, sobrenome, CEP).  
- Finalização completa da compra com múltiplos produtos.  
- Validação da mensagem de confirmação:  
  > “Thank you for your order!”

---

## 🧠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)
- [CSS Escape](https://www.npmjs.com/package/css.escape)

---

## ⚙️ Estrutura do Projeto

📂 qa-junior-playwright-frontend
├── 📁 tests
│ └── front.spec.ts # Testes E2E do SauceDemo
├── 📄 move-videos.ts # Script para mover vídeos conforme resultado dos testes
├── 📄 playwright.config.ts # Configuração geral e browsers
├── 📄 tsconfig.json # Configuração do TypeScript
├── 📄 package.json # Dependências e scripts NPM
└── 📄 global.d.ts # Tipagem para css.escape

------------------------------------------------------------------------

---

## 🚀 Instalação e Execução

### 🔧 Pré-requisitos

- Node.js **v18+** (Necessário configurar Node.js em variavél de ambiente em PATH``C:\Program Files\nodejs\``)
- npm (instalado junto com Node.js)
- Conexão com a internet (para acessar [https://www.saucedemo.com/](https://www.saucedemo.com/))

### 📦 Instalar Dependências

```bash
npm install

------------------------------------------------------------------------

▶️ Como Executar os Testes
```

🔹 Executar todos os testes E2E
    npx playwright test

🔹 Executar com visualização do navegador
    npx playwright test --headed

🔹 Executar apenas o conjunto de testes front-end
    npx playwright test tests/front.spec.ts

🔹 Exibir relatório HTML após execução
    npx playwright show-report

------------------------------------------------------------------------

🧩 Configurações Principais
🎬 Gravação de Vídeos

Os vídeos de execução são gravados automaticamente e organizados após o término dos testes:

🔹test-results/videos/success → vídeos de testes aprovados
🔹test-results/videos/error → vídeos de testes com falha

O script move-videos.ts realiza essa movimentação automaticamente após o término da suíte de testes.

🌍 Navegadores Testados

A configuração executa os testes em múltiplos navegadores e dispositivos:

🔹Google Chrome
🔹Microsoft Edge
🔹Firefox
🔹Mobile Chrome (Pixel 5)
🔹Mobile Safari (iPhone 12)

⚡ Reporter e Trace

🔹eporter: HTML
🔹Trace: on-first-retry
🔹Vídeos: gravados em 1280x720

------------------------------------------------------------------------

🧾 Scripts Disponíveis

"scripts": {
  "test:ui": "playwright test tests/ui",
  "test:uije": "playwright test tests/ui --reporter=junit",
  "test:api": "playwright test tests/api"
}

------------------------------------------------------------------------

## 🧠 Observações

-   Os nomes dos testes não devem conter caracteres especiais.\
-   Caso haja testes sem vídeo, o script simplesmente ignora.\
-   Pode ser adaptado para armazenar vídeos em servidores de relatórios ou buckets S3.

💡 O comando principal para execução é:

🔹npx playwright test

✅ Boas Práticas Aplicadas

🔹Reutilização de código: funções modulares como realizarLogin, adicionarProduto e removerProduto.
🔹Código limpo e legível, com comentários explicativos e consistência de nomenclatura.
🔹Validações robustas de mensagens, elementos e quantidade de produtos.
🔹Tratamento de exceções, incluindo test.skip automático quando o site estiver indisponível.
🔹Execução paralela e cross-browser configurada no playwright.config.ts.

📸 Relatórios e Evidências

Durante a execução, o Playwright gera:

🔹Vídeos da execução dos testes (test-results/videos)
🔹Relatório HTML interativo (executar com npx playwright show-report)
🔹Logs e traces para depuração detalhada de falhas

👤 Autor

Rodrigo Barbosa
💼 Analista de QA | Automação de Testes E2E e API
📍 Minas Gerais - Brasil

📅 Prazo e Entrega

Parte: 2 (Front-End - SauceDemo)

Repositório: [qa-junior-playwright-frontend](https://github.com/r04r970/qa-junior-playwright-frontend.git)

Execução: npx playwright test

⚠️ Importante

O código foi desenvolvido de forma totalmente autoral, sem uso de ferramentas de geração automática de código.
Atende às diretrizes de ética profissional e à Lei nº 9.610/98 (Direitos Autorais).