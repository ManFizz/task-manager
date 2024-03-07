const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Project = sequelize.define('project', {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	dateCreate: {
		type: DataTypes.DATEONLY,
		defaultValue: null
	}
}, {
	timestamps: false,
});

module.exports = Project;
