<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# 🚀 Next.js Task Testing (App Router & Unit Tests)
Aplicação To-Do construída em Next.js para demonstrar testes unitários em Server Components, Client Components e Hooks customizados.

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
>>>>>>> 92cf7d2f055ee01f75cf8f867ab0233c59cc820e
