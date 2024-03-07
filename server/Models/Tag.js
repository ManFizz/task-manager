const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Tag = sequelize.define('tag', {
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

module.exports = Tag;
