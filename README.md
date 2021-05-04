# Back-end-Lanchonete
Sistema de pedidos de lanchonete

## Intalando Dependencias
1º No diretorio do projeto: digite o comando npm install

## Configurando banco de dados 
### Foi utilizado o postigresql precisará está intalado ou terá que mudar as configurações do banco em src/config/database.js
1º No diretorio do projeto via terminal(cmd): digite o comando yarn sequelize db:create
    Caso ainda não tenha o yarn é só digitar npm install --global yarn

2º yarn sequelize db:migrate

## Subindo servidor
1º yarn dev  ou npm run dev
