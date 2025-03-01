# API de Games e Usuários

Esta API permite gerenciar jogos e autenticar usuários, oferecendo endpoints para criar, autenticar e modificar jogos, além de gerenciar usuários com autenticação JWT.

## **Autenticação**

As rotas protegidas requerem um **token JWT** para autenticação. O token deve ser enviado no cabeçalho `Authorization` como `Bearer Token`.

## **Rotas de Games**

### 1. **GET /games**

- **Descrição**: Retorna todos os jogos cadastrados.
- **Autenticação**: Requer token JWT no cabeçalho `Authorization`.
- **Exemplo de Request**:
  - **URL**: `GET /games`
  - **Cabeçalho**:
    ```bash
    Authorization: Bearer <SEU_TOKEN_AQUI>
    ```
- **Resposta**: Retorna uma lista de jogos.
  - **Exemplo de Resposta (200 OK)**:
    ```json
    [
      {
        "id": 1,
        "name": "Jogo 1",
        "genre": "Ação",
        "release_date": "2024-01-01"
      },
      {
        "id": 2,
        "name": "Jogo 2",
        "genre": "Aventura",
        "release_date": "2023-06-15"
      }
    ]
    ```

---

### 2. **GET /game/:id**

- **Descrição**: Retorna as informações de um jogo específico, baseado no `id`.
- **Autenticação**: Requer token JWT no cabeçalho `Authorization`.
- **Parâmetros de URL**: 
  - `id`: ID do jogo.
- **Exemplo de Request**:
  - **URL**: `GET /game/1`
  - **Cabeçalho**:
    ```bash
    Authorization: Bearer <SEU_TOKEN_AQUI>
    ```
- **Resposta**: Retorna as informações do jogo com o ID fornecido.
  - **Exemplo de Resposta (200 OK)**:
    ```json
    {
      "id": 1,
      "name": "Jogo 1",
      "genre": "Ação",
      "release_date": "2024-01-01"
    }
    ```

---

### 3. **POST /games**

- **Descrição**: Cria um novo jogo.
- **Autenticação**: Requer token JWT no cabeçalho `Authorization`.
- **Exemplo de Request**:
  - **URL**: `POST /games`
  - **Cabeçalho**:
    ```bash
    Authorization: Bearer <SEU_TOKEN_AQUI>
    ```
  - **Corpo da Requisição**:
    ```json
    {
      "name": "Novo Jogo",
      "genre": "RPG",
      "release_date": "2024-03-01"
    }
    ```
- **Resposta**: Retorna os dados do jogo recém-criado.
  - **Exemplo de Resposta (201 Created)**:
    ```json
    {
      "id": 3,
      "name": "Novo Jogo",
      "genre": "RPG",
      "release_date": "2024-03-01"
    }
    ```

---

### 4. **PUT /games/:id**

- **Descrição**: Atualiza as informações de um jogo existente.
- **Autenticação**: Requer token JWT no cabeçalho `Authorization`.
- **Parâmetros de URL**: 
  - `id`: ID do jogo a ser atualizado.
- **Exemplo de Request**:
  - **URL**: `PUT /games/1`
  - **Cabeçalho**:
    ```bash
    Authorization: Bearer <SEU_TOKEN_AQUI>
    ```
  - **Corpo da Requisição**:
    ```json
    {
      "name": "Jogo Atualizado",
      "genre": "Estratégia",
      "release_date": "2024-04-01"
    }
    ```
- **Resposta**: Retorna os dados do jogo atualizado.
  - **Exemplo de Resposta (200 OK)**:
    ```json
    {
      "id": 1,
      "name": "Jogo Atualizado",
      "genre": "Estratégia",
      "release_date": "2024-04-01"
    }
    ```

---

### 5. **DELETE /games/:id**

- **Descrição**: Exclui um jogo existente.
- **Autenticação**: Requer token JWT no cabeçalho `Authorization`.
- **Parâmetros de URL**:
  - `id`: ID do jogo a ser excluído.
- **Exemplo de Request**:
  - **URL**: `DELETE /games/1`
  - **Cabeçalho**:
    ```bash
    Authorization: Bearer <SEU_TOKEN_AQUI>
    ```
- **Resposta**: Retorna uma mensagem de sucesso.
  - **Exemplo de Resposta (200 OK)**:
    ```json
    {
      "message": "Jogo excluído com sucesso!"
    }
    ```

---

## **Rotas de Usuários**

### 1. **POST /createUser**

- **Descrição**: Cria um novo usuário.
- **Autenticação**: Não é necessário autenticação.
- **Exemplo de Request**:
  - **URL**: `POST /createUser`
  - **Corpo da Requisição**:
    ```json
    {
      "email": "usuario@example.com",
      "password": "senha123"
    }
    ```
- **Resposta**: Retorna os dados do usuário recém-criado.
  - **Exemplo de Resposta (201 Created)**:
    ```json
    {
      "id": 1,
      "email": "usuario@example.com"
    }
    ```

---

### 2. **POST /authenticate**

- **Descrição**: Autentica um usuário e retorna um token JWT.
- **Autenticação**: Não é necessário autenticação.
- **Exemplo de Request**:
  - **URL**: `POST /authenticate`
  - **Corpo da Requisição**:
    ```json
    {
      "email": "usuario@example.com",
      "password": "senha123"
    }
    ```
- **Resposta**: Retorna o token JWT.
  - **Exemplo de Resposta (200 OK)**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdWl6QGVtYWlsLmNvbSIsImlhdCI6MTYwODAxNzY5MCwiZXhwIjoxNjA4MDE4NjkwfQ.RWWQp6qJEyZWW7GEwRzhiL8P-tWUwCR3hr9MDmsuQ88"
    }
    ```

---

##
