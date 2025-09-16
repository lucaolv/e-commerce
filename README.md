# Backend API para E-commerce

Este é o repositório do backend para um projeto de e-commerce que estou construindo com Node.js. O objetivo é criar uma API robusta, segura e escalável utilizando tecnologias modernas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express.js**: Framework para a construção da API.
- **Prisma**: ORM para a comunicação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **Docker**: Para rodar o ambiente do banco de dados de forma isolada.
- **Zod**: Para validação dos dados de entrada (schemas).

## Funcionalidades Implementadas

Até o momento, a API suporta as seguintes funcionalidades:

- ✅ CRUD (Criar, Ler, Atualizar, Deletar) completo para **Produtos**.
- ✅ CRUD (Criar, Ler, Atualizar, Deletar) completo para **Categorias**.
- ✅ Validação de dados em todas as rotas de criação e atualização para garantir a integridade dos dados.

## Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

**Pré-requisitos:**
- Node.js (v18 ou superior)
- Docker e Docker Compose

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    cd nome-do-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Renomeie o arquivo `.env.example` para `.env`.
    - As credenciais padrão do banco de dados já estão configuradas para funcionar com o `docker-compose.yml`.

4.  **Inicie o banco de dados com Docker:**
    ```bash
    docker-compose up -d
    ```

5.  **Aplique as migrações do Prisma:**
    ```bash
    npx prisma migrate dev
    ```

6.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### Produtos (`/api/products`)

- `GET /` - Lista todos os produtos.
- `GET /:id` - Obtém os detalhes de um produto específico.
- `POST /` - Cria um novo produto.
- `PUT /:id` - Atualiza um produto existente.
- `DELETE /:id` - Deleta um produto.

### Categorias (`/api/categories`)

- `GET /` - Lista todas as categorias.
- `GET /:id` - Obtém os detalhes de uma categoria específica.
- `POST /` - Cria uma nova categoria.
- `PUT /:id` - Atualiza uma categoria existente.
- `DELETE /:id` - Deleta uma categoria.

## Próximos Passos

- [ ] Implementar autenticação de usuários (Registro e Login) com JWT.
- [ ] Criar rotas protegidas para ações específicas (ex: apenas admins podem criar produtos).
- [ ] Implementar a lógica de criação de Pedidos (Orders).
