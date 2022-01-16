<h1 align="center">
    🚀 Ignite - Prisma
</h1>
<p align="center">Aplicação com Prisma</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-14.15.4-green"/>
  <img src="https://img.shields.io/badge/typescript-4.5.4-blue"/>
  <img src="https://img.shields.io/badge/last%20commit-january-orange" />
  <img src="https://img.shields.io/badge/license-MIT-success"/>
</p>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-o-back-end-servidor">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Lincença</a>
</p>

<h3 align="center"> 
🚧  Finalizado  🚧
</h3>

### 📌 Sobre 
Aplicação para realizar entregas. Nesta aplicação, tem um lado o cliente - que irá se cadastrar e cadastrar itens para serem entregues em determinada localização - e, do outro, o entregador - que poderá pegar ou não determinada entrega para ser realizada.

### 📎 Features

- [x] Criar cliente
- [x] Criar entrega
- [x] Criar entregador
- [x] Autenticação do cliente
- [x] Autenticação do entregador
- [x] Listar entregas por cliente
- [x] Listar entregas por entregador
- [x] Atualizar data da entrega
- [x] Atualizar entregador da entrega

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://https://yarnpkg.com/) 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/gabriel-nt/ignite-prisma

# Instale as dependências
$ npm install ou yarn

# Rode as migrations
$ yarn prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ yarn dev ou npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🧾 Insomnia
Para ter um exemplo das rotas para a nossa API, basta clicar no link abaixo:
</br>
<a href="https://insomnia.rest/run/?label=Rentx&uri=https%3A%2F%2Fgithub.com%2Fgabriel-nt%2Frentx-api%2Fblob%2Fmaster%2Fassets%2Fcollection_insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

### :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- Typescript

### 📕 Bibliotecas

Esse projeto foi desenvolvido com o auxílio das seguintes libs:

- prisma
- bcrypt
- jsonwebtoken
- ts-node-dev

### :memo: Licença

Esse projeto está sob a licença MIT.

<hr/>

Feito por Gabriel Teixeira
