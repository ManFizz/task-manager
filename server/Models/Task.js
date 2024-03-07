const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define('task', {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT,
		defaultValue: ''
	},
	dateEnd: {
		type: DataTypes.DATE,
		defaultValue: null
	},
	priority: {
		type: DataTypes.INTEGER,
		defaultValue: null
	}
}, {
	timestamps: false,
});

module.exports = Task;
