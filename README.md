# eventinho.com

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center"> <a href="https://docs.nestjs.com/">NestJS Documentation</a> | <a href="https://mongoosejs.com/docs/">Mongoose Documentation</a> | <a href="https://www.mongodb.com/">MongoDB</a> </p>

Este projeto é uma API backend para gerenciar eventos, com funcionalidades de CRUD (Create, Read, Update, Delete), utilizando NestJS e MongoDB.

[![Package Version](https://img.shields.io/npm/v/@nestjs/core.svg)](https://www.npmjs.com/package/@nestjs/core)
[![Build Status](https://circleci.com/gh/nestjs/nest.svg?style=svg)](https://circleci.com/gh/nestjs/nest)
[![Node.js Version](https://img.shields.io/node/v/18.svg)](https://nodejs.org/)
[![Jest Tests](https://img.shields.io/badge/tests-jest-brightgreen.svg)](https://jestjs.io/)

## Instalação
### Pré-requisitos

Certifique-se de ter instalado:

Node.js (v18+ recomendado)
```bash
node -v
```
```bash
npm (ou yarn)
```
```bash
npm -v
```

MongoDB em execução local ou via Atlas.

## Configuração do projeto

Clone o projeto:
```bash
git clone https://github.com/seu-usuario/events-api.git
cd events-api
```

Instale as dependências:
```bash
npm install
```
Environment Variables

Crie um arquivo .env na raiz do projeto com as configurações do MongoDB, por exemplo:

MONGO_URI=mongodb://localhost:27017/eventsdb
PORT=3000

Running the API

Para iniciar a aplicação em modo de desenvolvimento:
```bash
npm run start:dev
```

A API estará disponível em http://localhost:3000.

API Endpoints

```POST``` /events – Cria um novo evento

```GET``` /events – Lista todos os eventos

```GET``` /events/:name – Busca evento por nome

```PUT``` /events/:id – Atualiza evento por ID

```DELETE``` /events/:id – Exclui evento por ID

Exemplo de request para criar um evento:

POST /events
{
  "name": "Festa de Aniversário",
  "date": "2025-09-10",
  "location": "Rua Exemplo, 123"
}

## Estrutura do projeto

:file_folder: events-api
```text
├ src
| ├ events
| | ├ dto
| | | ├ create-event.dto.ts
| | | └ update-event.dto.ts
| | ├ events.controller.ts
| | ├ events.service.ts
| | └ events.module.ts
| ├ schema
| | └ events.schema.ts
| └ main.ts
├ .env
├ .gitignore
├ package.json
└ README.md
```
