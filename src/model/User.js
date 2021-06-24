const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            email: DataTypes.STRING,
            password_has: DataTypes.STRING,
            sexo: DataTypes.ENUM('Masculino', 'Feminino')
        }, {
            sequelize: connection
        });

    
        this.addHook('beforeSave', async (user)=>{
            if(user.password_has){
                user.password_has = await bcrypt.hash(user.password_has, 8);
            }
        });
        return this;
    }
    static associate(models){
        User.hasMany(models.Endereco, { foreignKey:'user_id', as: 'enderecos'});
        User.hasMany(models.Pedido, { foreignKey:'user_id', as: 'pedidos'});
        
    }
    
    checkPassword(password){
        return bcrypt.hashSync(password, 8)

    }
}

module.exports = User;