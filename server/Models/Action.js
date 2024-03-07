const { DataTypes, DATE} = require('sequelize');
const sequelize = require('../database');
const Task = require("./Task");
const Member = require('./Member');

const Action = sequelize.define('action', {
	info: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	date: {
		type: DataTypes.DATE,
		default: DataTypes.NOW,
	}
}, {
	timestamps: false,
});

module.exports = Action;
