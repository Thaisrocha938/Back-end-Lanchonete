const { Model, DataTypes } = require('sequelize');
class Endereco extends Model{
    static init(connection){
        super.init({
            cep: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            complemento: DataTypes.STRING,

        }, {
            sequelize: connection
        });
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey:'user_id', as: 'users'});
    }
}
module.exports = Endereco;