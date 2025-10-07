<div align="center">

# 🎮 GameLounge_backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

</div>

---

## 📄 Descrição

**GameLounge_backend** é o backend de uma aplicação para catalogar e consultar jogos de tabuleiro e cartas. Ele fornece um conjunto de endpoints RESTful para listar, filtrar, criar, atualizar e remover jogos. O projeto utiliza **Node.js** com **Express** e **PostgreSQL** como banco de dados.

> 💡 Este guia é um passo-a-passo detalhado, focado em iniciantes e utilizando o terminal integrado do **Visual Studio Code (VS Code)**, com preferência pelo **Command Prompt (cmd)** para comandos de instalação.

---

## ⚙️ Requisitos

Para configurar e rodar o projeto, você precisará de:

- 💻 **Visual Studio Code** (com o terminal integrado)
- 🟢 **Node.js** (versão 14+ ou superior)
- 📦 **npm ou yarn** (instalados com o Node.js)
- 🐘 **PostgreSQL** (versão 12+ ou superior)
- 🔧 **Git** (opcional, mas recomendado para clonar o repositório)
- 📮 **Postman** (para testar os endpoints da API)

---

## 💻 Configuração do Projeto

Siga estas etapas para clonar, instalar dependências e abrir o projeto no VS Code.

### 1️⃣ Clonar o Repositório

Abra um terminal (ex: Command Prompt, PowerShell ou o próprio terminal do VS Code) e use o Git:

```bash
git clone https://github.com/AnaCarolinaFreitas/GameLounge_backend.git
cd GameLounge_backend
code . # Abre a pasta do projeto no VS Code
```

### 2️⃣ Abrir o Terminal Integrado e Instalar Dependências (VS Code)

No VS Code, abra o terminal integrado (`Ctrl + \``). Por padrão, ele pode abrir no PowerShell.

1. Clique no ícone **+** (sinal de adição) ao lado da aba do terminal para abrir um novo terminal.
2. Selecione **Command Prompt (cmd)** na lista de shells disponíveis para garantir que os comandos abaixo funcionem corretamente.
3. Verifique se você está na pasta raiz do projeto (**GameLounge_backend**).
4. Execute o comando para instalar as dependências do Node.js:

```bash
npm install
```

### 3️⃣ Criar o Arquivo .env

Crie um arquivo chamado `.env` na raiz do projeto para configurar o acesso ao banco de dados e a porta do servidor.

> ⚠️ **Importante:** Substitua `sua_senha_aqui` pela senha do usuário `postgres` que você definiu ao instalar o PostgreSQL.

```env
PORT=3000
PGUSER=postgres
PGPASSWORD=sua_senha_aqui
PGHOST=localhost
PGDATABASE=gamelounge
PGPORT=5432
```

---
## 🐘 Configuração do PostgreSQL (SQL)

Aqui você configurará o banco de dados **gamelounge** e criará a tabela **games** usando os comandos SQL fornecidos.

### 1️⃣ Instalar o PostgreSQL (se necessário)

Se ainda não tem o PostgreSQL:

1. Acesse https://www.postgresql.org/download/ e baixe o instalador.
2. Durante a instalação, anote a senha escolhida para o usuário `postgres`. A porta padrão é **5432**.
3. Verifique a instalação no terminal: `psql --version`

### 2️⃣ Executar o Script SQL

O arquivo `src/database/schema.sql` contém a criação do banco de dados (**gamelounge**), da tabela (**games**) e a inserção dos dados iniciais de exemplo.

Use o terminal do VS Code (certificando-se de que o `psql` está no PATH) ou o **SQL Shell (psql)** para executá-lo.

#### Abra o aplicativo SQL Shell (psql) e execute os comandos:

# Crie o banco
CREATE DATABASE gamelounge;

# Conecte ao novo banco (se for no psql shell)
\c gamelounge;

# Execute o restante do conteúdo presente no arquivo schema.sql
\i 'C:/caminho/completo/para/seu/projeto/src/database/schema.sql'

Ao final, o banco gamelounge estará criado e pronto para uso com dados de exemplo. Para ver a estrutura das colunas, abra o arquivo src/database/schema.sql.

---

## 🚀 Rodar o Servidor

Com as dependências instaladas e o banco de dados configurado, inicie o backend.

No terminal integrado do VS Code (de preferência o **Command Prompt**), execute:

```bash
node server.js
```

ou, se o `package.json` tiver um script `dev`

```bash
npm run dev
```

✅ Aguarde a mensagem de confirmação, como: **"Server running on port 3000"**.

---

## 🧪 Testar com Postman

Use o Postman para testar todos os endpoints da API (CRUD e filtros).

### 1️⃣ Configurar Postman

1. Baixe e instale o Postman: https://www.postman.com/downloads/
2. Crie uma **Collection** (ex: **GameLounge API**) para organizar seus requests.

### 2️⃣ Exemplos de Requisições

Use a URL base `http://localhost:3000/api/games` para todos os exemplos:

| Método | Endpoint | Descrição | Corpo/Parâmetros |
|--------|----------|-----------|------------------|
| 🟢 **GET** | `/api/games` | Lista todos os jogos. | Nenhum |
| 🔵 **GET** | `/api/games` | Busca com filtros. | **Params:** Adicione Query Params como `name=catan` ou `genre1=estratégia`. |
| 🟡 **GET** | `/api/games/:id` | Busca um jogo por ID. | Ex: `/api/games/1` |
| 🟠 **POST** | `/api/games` | Cria um novo jogo. | **Body** → raw → JSON (com todos os campos do `schema.sql`). |
| 🟣 **PUT** | `/api/games/:id` | Atualiza um jogo. | Ex: `/api/games/1`. **Body** → raw → JSON (com os campos a serem atualizados). |
| 🔴 **DELETE** | `/api/games/:id` | Remove um jogo. | Ex: `/api/games/1` |

### 📝 Exemplo de Corpo JSON para POST/PUT:

```json
{
    "image_url": "novo.png",
    "name": "Novo Jogo",
    "description": "Descrição",
    "rating": 4,
    "genre1": "Cartas",
    "genre2": "Estratégia",
    "age_rating": 8,
    "duration": 30,
    "num_players": 4,
    "developer": "Editora",
    "mechanics": "Teste",
    "rules": "Regras"
}
```

---
## 📂 Estrutura Principal do Projeto

Para ajudar na navegação:

```
GameLounge_backend/
│
├── 📄 server.js                      # Ponto de entrada da aplicação Express
│
├── 📁 src/
│   ├── 📁 routes/
│   │   └── gameRoutes.js             # Define os endpoints da API
│   │
│   ├── 📁 controllers/
│   │   └── gameController.js         # Lógica de negócio (CRUD e filtros)
│   │
│   ├── 📁 models/
│   │   └── gameModel.js              # Interação direta com o banco (queries)
│   │
│   └── 📁 database/
│       └── schema.sql                # Script SQL para criação de DB, tabela e dados iniciais
```

---

<div align="center">

### 🎮 Feito com ❤️ por [Ana Carolina Freitas](https://github.com/AnaCarolinaFreitas)

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

</div>