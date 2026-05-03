# Adopet Cypress Tests

Projeto em desenvolvimento para estudos de automação de testes end-to-end com Cypress, baseado na aplicação Adopet durante o curso de Cypress da Alura.

## Objetivo

Praticar a criação de testes automatizados E2E, validando funcionalidades da aplicação Adopet, como navegação, cadastro, login e interações com elementos da interface.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- npm
- Git e GitHub
- Visual Studio Code

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado na máquina:

- Node.js
- npm
- Git

Para verificar se o Node.js e o npm estão instalados, use:

```bash
node -v
npm -v
```

Caso não estejam instalados, baixe e instale o Node.js pelo site oficial:

```txt
https://nodejs.org/
```

## Estrutura do projeto

```bash
cypress/
  e2e/
    cadastro-correto.cy.js
  fixtures/
    example.json
  support/
    commands.js
    e2e.js

cypress.config.js
package.json
.gitignore
README.md
```

## Testes implementados até o momento

- Validação de navegação pela interface
- Teste de botões e links do header
- Teste de fluxo de cadastro correto

## Como executar o projeto

Clone o repositório:

```bash
git clone git@github.com:roberto-engsoftware/adopet-cypress-tests.git
```

Acesse a pasta do projeto:

```bash
cd adopet-cypress-tests
```

Instale as dependências:

```bash
npm install
```

Execute o Cypress em modo interativo:

```bash
npx cypress open
```

Ou execute os testes em modo headless:

```bash
npx cypress run
```

## Status do projeto

🚧 Projeto em desenvolvimento.

Novos cenários de teste serão adicionados conforme avanço nos estudos de automação com Cypress.

## Autor

Roberto Rodrigues  
Estudante de Engenharia de Software e Técnico de TI Júnior, em transição para a área de Qualidade de Software e Desenvolvimento.

- GitHub: [roberto-engsoftware](https://github.com/roberto-engsoftware)
- LinkedIn: [Roberto Rodrigues](https://www.linkedin.com/in/roberto-rodrigues-610025313)