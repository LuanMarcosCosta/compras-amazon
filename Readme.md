# Automação de Testes com Cypress

Este projeto contém os testes automatizados desenvolvidos com o framework Cypress.


### 📋 Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas em sua máquina:

  1. Node.js (versão 18 ou superior)
  2. Cypress (versão 12.12.0 ou superior)


## ⚙️ Instalacao do Projeto
Em uma pasta no seu computador, execute o seguinte comando para clonar esse repositório
```bash
  git clone https://github.com/LuanMarcosCosta/compras-amazon.git
```

## ⚙️ Instale as dependências do projeto:
Comandos Linha terminal:

```bash
 npm install
 npm install cypress
```

## ⚙️ Configrando arquivo cypress.config.js
Trocar as informacoes conforme o seu projeto

  - projectId:
  - baseUrl: https://www.amazon.com.br/

Obs: 
  - O projectId vai ser de acordo com o que o Cypress cloud gerar (nesse projeto não vamos ter)
  - BaseUrl tem que ser inserida a url do site que voce vai automatizar

## ⚙️ Executando os testes e executando em modo headless

```bash
  npm run cy:open
  npx cypress run 
```

## 🛠️ Construído com
  * Cucumber preprocessor
  * Cypress

## ⚙️ Estrutura do Projeto
```
├── cypress/
│   ├── fixtures/            # Arquivos de dados para testes
│   ├── e2e/                 # Testes automatizados
│   ├── plugins/             # Configurações adicionais do Cypress
│   ├── support/             # Funções de apoio e configurações
│   └── videos/              # Gravações de vídeo dos testes (opcional)
├── .gitignore               # Arquivos a serem ignorados pelo Git
├── cypress.json             # Configurações globais do Cypress
└── package.json             # Dependências e scripts do projeto
```

## 📌 Versões das ferramentas utlizadas

 * "@badeball/cypress-cucumber-preprocessor": "^17.0.0",
 * "@bahmutov/cypress-esbuild-preprocessor": "^2.2.0",
 * "cypress": "^12.14.0",


## ✒️ Contribuição
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Basta seguir as etapas abaixo:

  01. Faça um fork deste repositório 
  02. Crie um branch para suas modificações: git checkout -b minha-branch.
  03. Faça as alterações desejadas e commit: git commit -m "Descrição das modificações".
  04. Envie para o branch remoto: git push origin minha-branch.
  05. Crie um novo Pull Request.

## Bibliografias
Ao criar este projeto, contei com a colaboração de várias fontes valiosas encontradas na internet. Agradeço às seguintes referências:


| Ferramentas/Sites| Descrição   |
|--------------|--------------|
| [Readme.so](https://readme.so/pt/editor)       | Para construção  do readme.md     |
| [Cypress Brasil](https://chat.whatsapp.com/IowlCOf2pRAEXG9FTV55SP)     |  Grupo de WhatsApp       |
| [QAzando](https://cypress.qazando.com.br/)     | Curso Cypress       |

