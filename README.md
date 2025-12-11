# 🚀 Next.js Task Testing (App Router & Unit Tests)

Este projeto é uma demonstração prática de como implementar e testar uma aplicação web moderna usando o Next.js (App Router) e a biblioteca React. O foco principal é a Garantia de Qualidade, utilizando Testes Unitários com Jest e React Testing Library.

### 🛠️ Tecnologias e Conceitos Abordados
* **Next.js 15 (App Router):** Utilização da nova arquitetura de rotas.
* **TypeScript:** Tipagem completa da aplicação.
* **Jest & Testing Library:** Ambiente completo para testes unitários.
* **Isolamento de Componentes:** Testes em **Server Components** (renderização e carregamento de dados) e **Client Components** (interações de usuário e estado).
* **Hooks Customizados:** Teste isolado do hook `useContadorDeTarefas` utilizando `renderHook`.
* **Mocking:** Simulação da camada de dados (`lib/tarefas.ts`) e isolamento de dependências externas (`jest.mock`).

### ⚙️ Instalação e Execução

Pré-requisitos: Node.js (18+) e npm ou yarn.

1.  Clone o repositório:
    ```bash
    git clone [SEU_LINK_DO_REPOSITORIO]
    cd nextjs-task-testing
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Execute a aplicação (Desenvolvimento):
    ```bash
    npm run dev
    ```

### 5. Executando os Testes Unitários (Prova de Conceito)

```markdown
### ✅ Executando e Validando os Testes

Para rodar todos os testes unitários e verificar a cobertura:

```bash
npm run test
