import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                tableName: 'users',
                timestamps: true,  // ✅ MUDOU AQUI
                underscored: true,
            }
        );
    }
}


export default User;
