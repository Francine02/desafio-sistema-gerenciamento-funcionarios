<h1 align="center">
  Desafio técnico: Sistema de gerenciamento de funcionários de uma empresa.
  <p>
    <img src="https://img.shields.io/github/last-commit/Francine02/desafio-sistema-gerenciamento-funcionarios?style=flat&logo=git&logoColor=gray&color=black" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/top/Francine02/desafio-sistema-gerenciamento-funcionarios?style=flat&color=black" alt="Top Language">
    <img src="https://img.shields.io/github/languages/count/Francine02/desafio-sistema-gerenciamento-funcionarios?style=flat&color=black" alt="Languages Count">
  </p>
</h1>
API RESTful desenvolvida para o teste técnico da vaga Desenvolvedor Backend Node JR - Contato Seguro. O sistema serve para gerenciar empresas e funcionários, utilizando Node.js, Express, TypeScript e MongoDB/Mongoose.


## Tecnologias Utilizadas:
- TypeScript
- Node.js
- Express
- MongoDB
- Mongoose
- Swagger
- Zod


## Endpoints:
### Employee:
- **POST /employees**: Cria um novo funcionário 
- **DELETE /employees/:id**: Deleta um funcionário 
- **GET /employees**: Retorna todas os funcionários
- **GET /employees/company/:id**: Retorna todos os funcionários de uma empresa
- **PUT /employees/:id**: Atualiza os dados de um funcionário

### Company:
- **POST /companies**: Cria uma nova empresa
- **DELETE /companies/:id**: Deleta uma empresa
- **GET /companies**: Retorna todas as empresas
- **GET /companies/:id**: Retorna uma empresa
- **PUT /companies/:id**: Atualiza os dados de uma empresa

## Documentação:
A API utiliza Swagger para documentar os endpoints, sendo possível acessar, por exemplo:

```
  http://localhost:3000/api-docs/
```

<img width="700" height="700" alt="image" src="https://github.com/user-attachments/assets/ae5a01ac-076c-4f7f-a0cc-3ca7ddc22f30" />


## Sobre o desenvolvimento:
- A API foi desenvolvida com base nos requisitos do teste, incluindo alguns diferenciais, como documentação via Swagger e conteinerização com Docker para o banco e para a API.
- O projeto foi estruturado seguindo princípios de modularidade e inspiração na Clean Architecture.
- A convenção de nomenclatura utilizada segue o padrão kebab-case.pasta.ts.

O projeto está organizado da seguinte forma:
```
src/
├── configs/                    # Configurações gerais (Swagger, env, etc)
│   ├── db/                     # Conexão do MongoDB
│   ├── env/
│   ├── swagger/                # Configurações, arquivos e geração da documentação Swagger
├── modules/                    # Módulos principais da API
│   ├── company/                
│   │   ├── controllers/        # Recebem a requisição HTTP e chamam os serviços
│   │   ├── dtos/               # Transferência de dados
│   │   ├── mappers/            # Conversão Models → DTOs
│   │   ├── models/             # Models Mongoose
│   │   ├── repositories/       # Consultas ao BD
│   │   ├── routes/             # Rotas da entidade
│   │   ├── schemas/            # Validações com Zod
│   │   └── services/           # Regras de negócio
│   └── employee/
│   │   ├── constants/          # Constantes específicas de Employee
│   │   ├── controllers/        # Recebem a requisição HTTP e chamam os serviços
│   │   ├── dtos/               # Transferência de dados
│   │   ├── mappers/            # Conversão Models → DTOs
│   │   ├── models/             # Models Mongoose
│   │   ├── repositories/       # Consultas ao BD
│   │   ├── routes/             # Rotas da entidade
│   │   ├── schemas/            # Validações com Zod
│   │   └── services/           # Regras de negócio
├── shared/
│   ├── middlewares/            # Middlewares globais (ex: validações, erros)
│   └── errors/                 # Classes de erro customizadas
└── server.ts                   # Levanta o servidor e inicializa
└── app.ts                      # Configura o Express (rotas, middlewares, etc)
```


## Como rodar o projeto:
1. Clone o repositório:
   
```
git clone https://github.com/Francine02/desafio-sistema-gerenciamento-funcionarios.git
cd desafio-sistema-gerenciamento-funcionarios
```

2. Variáveis de ambiente
   
Use o arquivo .env-example como referência para criar seu .env.

(Caso não crie, valores padrão já são utilizados.)

3. Rodar com Docker (recomendado)

Certifique-se de ter Docker e Docker Compose instalados. Siga aqui passo a passo a instalação caso não tenha o necessário: https://docs.docker.com/desktop/

Depois execute:
```
docker compose up
```

A API rodará em por padrão:
```
http://localhost:3000
```

Swagger:
```
http://localhost:3000/api-docs/
```
---

4. Rodar sem Docker (modo manual)
Instale as dependências:
```
npm install
```

Inicie o servidor:
```
npm run dev
```


## Contribuição:
Apesar de este projeto ter sido desenvolvido para um teste técnico, contribuições, sugestões ou melhorias são sempre bem-vindas. Sinta-se à vontade para abrir issues ou enviar pull requests caso queira propor ajustes, otimizações ou novas funcionalidades.

