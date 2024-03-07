const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	dateBirthday: {
		type: DataTypes.DATEONLY,
		allowNull: true
	},
	dateJoin: {
		type: DataTypes.DATEONLY,
		allowNull: true
	},
	login: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	mail: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	}
}, {
	timestamps: false,
});

module.exports = User;