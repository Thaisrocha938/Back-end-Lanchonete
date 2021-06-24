const { Model, DataTypes } = require('sequelize');
class Pedido extends Model{
    static init(connection){
        super.init({
        }, {
            sequelize: connection
        });
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey:'user_id', as: 'users'});
    }
}
module.exports = Pedido;