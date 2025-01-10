# Módulo 1 - Primeiros passos com NodeJS

Esta pasta contém o código desenvolvido durante o Módulo 1 do curso JStack, com foco na criação de APIs e endpoints utilizando Node.js.

## Descrição do Módulo

As aulas abordaram conceitos básicos de criação de APIs REST com Node.js, como rotas, controladores e manipulação de dados. Como já possuo experiência com esses tópicos, aproveitei a oportunidade para adicionar algumas melhorias e personalizações:

- Adicionei um arquivo package.json e yarn.lock devido à minha preferência por usar o Yarn como gerenciador de pacotes.
- Disponibilizei a collection do Insomnia utilizada durante o desenvolvimento, para facilitar a verificação e o teste dos endpoints.
- Na aula sobre query params, ao invés de implementar apenas a ordenação desc e asc, criei uma funcionalidade extra que permite filtrar os usuários de acordo com o nome fornecido no parâmetro name.
- Fiz um arquivo de rotas centralizado para o caso da necessidade da criação de mais controllers

## Estrutura do Projeto

A estrutura de diretórios e arquivos ficou organizada da seguinte forma:

```
index.js
package.json
yarn.lock
src/
├── controllers/
│   └── user-controller.js
├── helpers/
│   └── body-parser.js
├── mocks/
│   └── users.js
└── routes/
    ├── routes.js
    └── user-router.js
```

## Como executar

1. Certifique-se de ter o Node.js e o Yarn instalados na sua máquina.
2. Clone este repositório e, no diretório do projeto, execute o comando abaixo para iniciar o servidor:

```
yarn start
```

3. Utilize a collection do Insomnia (disponível neste repositório) para testar os endpoints criados
