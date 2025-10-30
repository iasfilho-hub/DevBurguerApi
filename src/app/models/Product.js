import Sequelize, { Model } from 'sequelize';

class Product extends Model {
	static init(sequelize) {
		return super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.INTEGER,
				category: Sequelize.STRING,
				path: Sequelize.STRING,
			},
			{
				sequelize,
				tableName: 'products',
				timestamps: true, // ✅ MUDOU AQUI
				underscored: true,
			},
		);
	}
}

export default Product;
