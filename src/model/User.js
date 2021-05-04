const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');


class User extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            email: DataTypes.STRING,
            password_has: DataTypes.STRING(16),
            password: DataTypes.STRING(16),
            sexo: DataTypes.ENUM('Masculino', 'Feminino')
        }, {
            sequelize: connection
        });

        this.addHook('beforeSave', async (user)=>{
            if(user.password){
                
                user.password_has = await bcrypt.hash(user.password, 8);
                
            }
        });
        return this;
    }
    checkPassword(password){
        return bcrypt.compare(password, this.password_has)

    }

}

module.exports = User;