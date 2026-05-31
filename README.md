# 🐾 Adopet - Testes E2E com Cypress

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow) ![Cypress](https://img.shields.io/badge/cypress-%3E%3D13.0.0-brightgreen) ![Node.js](https://img.shields.io/badge/node.js-%3E%3D18.0.0-green)

Projeto de **automação de testes end-to-end (E2E)** com Cypress para a aplicação **Adopet**, desenvolvido durante o curso de Cypress da Alura. Este projeto valida funcionalidades críticas como autenticação, cadastro de usuários e navegação na plataforma.

## 📋 Sobre o Projeto

- **Objetivo**: Praticar boas práticas de automação de testes E2E com Cypress
- **Aplicação testada**: [Adopet Frontend](https://adopet-frontend-cypress.vercel.app/)
- **Status**: 🚧 Em desenvolvimento - novos testes sendo adicionados
- **Relatórios**: Gerados automaticamente com Mochawesome

## 🛠️ Tecnologias

| Tecnologia | Versão |
|-----------|--------|
| **Cypress** | ^13.0.0 |
| **Node.js** | ≥18.0.0 |
| **JavaScript** | ES6+ |
| **Mochawesome** | ^7.1.4 |

## 📦 Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

- **Node.js** ≥ 18.0.0
- **npm** (vem com Node.js)
- **Git** (opcional, apenas para clonar o repositório)

### Verificar instalação

```bash
node --version
npm --version
```

### Instalar Node.js

Caso não tenha instalado, baixe em: https://nodejs.org/

## 🚀 Como Configurar e Executar

### 1. Clonar o repositório

```bash
git clone git@github.com:roberto-engsoftware/adopet-cypress-tests.git
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar os testes

```bash
# Executar todos os testes
npm run cypress:run

# Executar com interface gráfica (modo interativo)
npx cypress open

# Executar um arquivo específico
npx cypress run --spec "cypress/e2e/login-correto.cy.js"
```

## 📁 Estrutura do Projeto

```
curso_cypress/
├── cypress/
│   ├── e2e/                          # Testes E2E
│   │   ├── cadastro-correto.cy.js       # ✅ Cadastro com dados válidos
│   │   ├── cadastro-incorreto.cy.js     # ❌ Cadastro com dados inválidos
│   │   └── login-correto.cy.js          # ✅ Login com credenciais válidas
│   │
│   ├── fixtures/                     # Dados de teste
│   │   └── example.json
│   │
│   ├── support/                      # Configurações e helpers
│   │   ├── commands.js               # Comandos customizados
│   │   └── e2e.js                    # Configurações globais
│   │
│   ├── reports/                      # Relatórios gerados
│   │   └── mochawesome_*.html
│   │
│   ├── screenshots/                  # Screenshots de falhas
│   └── videos/                       # Gravações dos testes
│
├── cypress.config.js                 # Configuração do Cypress
├── package.json                      # Dependências do projeto
└── README.md                         # Este arquivo
```

## ✅ Testes Implementados

### 1. **Cadastro Correto** (`cadastro-correto.cy.js`)
- ✅ Cadastro com dados válidos
- Valida preenchimento correto de formulário
- Confirma sucesso no registro

### 2. **Cadastro Incorreto** (`cadastro-incorreto.cy.js`)
- ❌ Submissão de formulário vazio
- Valida exibição de mensagens de erro
- Testa validação de campos obrigatórios

### 3. **Login Correto** (`login-correto.cy.js`)
- ✅ Autenticação com credenciais válidas
- Valida fluxo de login
- Testa redirecionamento após autenticação

## 📊 Relatórios

Os testes geram automaticamente relatórios em HTML com o **Mochawesome**:

```
cypress/reports/mochawesome_DDMMAAAA_HHMMSS.html
```

Abra o arquivo HTML no navegador para visualizar os resultados detalhados.

## 📝 Próximos Passos

- [ ] Testes para listagem de pets
- [ ] Testes para perfil de usuário
- [ ] Testes de busca e filtros
- [ ] Testes de responsividade
- [ ] Testes de performance
- [ ] Implementar Page Objects Model (POM)
- [ ] Adicionar suporte a dados dinâmicos com fixtures

## 🔧 Configurações do Cypress

O arquivo `cypress.config.js` contém:

- **Reporter**: Mochawesome para gerar relatórios HTML
- **Vídeos**: Habilitados (gravação de cada teste)
- **Screenshots**: Automáticos em caso de falha
- **Timestamps**: Nos relatórios para rastreabilidade

## 📚 Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [Alura - Curso de Cypress](https://www.alura.com.br/)
- [Adopet - Aplicação](https://adopet-frontend-cypress.vercel.app/)

## 📄 Licença

ISC

---

**Desenvolvido com ❤️ para aprender automação de testes**

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