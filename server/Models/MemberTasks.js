const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Task = require('./Task');
const Member = require("./Member");

const MemberTasks = sequelize.define('memberTasks', {
	taskId: {
		type: DataTypes.INTEGER,
		references: {
			model: Task,
			key: 'id'
		}
	},
	memberId: {
		type: DataTypes.INTEGER,
		references: {
			model: Member,
			key: 'id'
		}
	}
}, {
	timestamps: false,
});

module.exports = MemberTasks;