# API de Usuários

Esta é uma API simples para gerenciar usuários, permitindo a criação, leitura, atualização e exclusão de usuários.

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 12 ou superior)
- npm (geralmente vem com a instalação do Node.js)
- MongoDB (instalado e em execução)

## Instalação

1. Clone este repositório


2. Acesse o diretório do projeto


3. Instale as dependências do projeto


## Configuração

1. Crie um arquivo `.env` na raiz do projeto e defina a variável de ambiente `MONGODB_URI` com a URI de conexão do seu banco de dados MongoDB. Por exemplo:

`MONGODB_URI=mongodb+srv://<nome-usuário>:<senha-usuárioa>@<nome-cluster>.eudzpya.mongodb.net/?retryWrites=true&w=majority`

Certifique-se de substituir `<nome-usuário>:<senha-usuárioa>@<nome-cluster>` pela URI de conexão correta do seu banco de dados MongoDB.

## Rodando a aplicação

Para iniciar o servidor da API, execute o seguinte comando:
```bash
npm run dev 
 ```
 ou 
 ```bash
yarn dev 
 ```

A API estará disponível em http://localhost:3000.

## Rotas

A API possui as seguintes rotas:

- `POST /users`: Cria um novo usuário. Envie um JSON com os dados do usuário.

- `GET /users`: Retorna a lista de todos os usuários cadastrados.

- `GET /users/:id`: Retorna os detalhes de um usuário específico com base no ID fornecido.

- `PUT /users/:id`: Atualiza os dados de um usuário específico com base no ID fornecido. Envie um JSON com os campos que deseja atualizar.

- `DELETE /users/:id`: Remove um usuário específico com base no ID fornecido.
