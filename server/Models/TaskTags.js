const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Task = require('./Task');
const Tag = require("./Tag");

const TaskTags = sequelize.define('taskTags', {
	taskId: {
		type: DataTypes.INTEGER,
		references: {
			model: Task,
			key: 'id'
		}
	},
	tagId: {
		type: DataTypes.INTEGER,
		references: {
			model: Tag,
			key: 'id'
		}
	}
}, {
	timestamps: false,
});

module.exports = TaskTags;