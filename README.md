# Back-end-Lanchonete Ideal
Sistema de pedidos de lanchonete

## Intalando Dependencias
> O projeto foi feito em Node.js por esse motivo será necessário que [baixa-lo](https://nodejs.org/pt-br/download/).
#### - No diretorio(via terminal) do projeto digite o comando:
>[npm install](https://docs.npmjs.com/cli/v6/commands/npm-install)

## Configurando banco de dados 
#### Foi utilizado o postigresql precisará está intalado ou terá que mudar as configurações do banco em src/config/database.js
1. No diretorio do projeto digite o comando: 
> npx sequelize db:create
> yarn sequelize db:migrate

## Subindo servidor
> npm run dev
