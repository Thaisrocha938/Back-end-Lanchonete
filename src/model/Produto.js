const { Model, DataTypes } = require('sequelize');



class Produto extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.DOUBLE,
            descricao: DataTypes.STRING
        }, {
            sequelize: connection
        });

    }
}
module.exports = Produto;
