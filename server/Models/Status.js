const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Status = sequelize.define('status', {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	color: {
		type: DataTypes.STRING,
		defaultValue: 'primary'
	}
}, {
	timestamps: false,
});

module.exports = Status;