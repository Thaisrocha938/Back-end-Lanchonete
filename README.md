# Back-end-Lanchonete Ideal
Sistema de pedidos de lanchonete

## Intalando Dependencias
> O projeto foi feito em Node.js por esse motivo será necessário que [baixa-lo](https://nodejs.org/pt-br/download/).
####- No diretorio do projeto digite o comando :
>[npm install](https://docs.npmjs.com/cli/v6/commands/npm-install)

## Configurando banco de dados 
### Foi utilizado o postigresql precisará está intalado ou terá que mudar as configurações do banco em src/config/database.js
1º No diretorio do projeto via terminal(cmd): digite o comando yarn sequelize db:create
    Caso ainda não tenha o yarn é só digitar npm install --global yarn

2º yarn sequelize db:migrate

## Subindo servidor
1º yarn dev  ou npm run dev
