const User = require("./User");
const Tag = require("./Tag");
const Action = require("./Action");
const Member = require("./Member");
const Project = require("./Project");
const Status = require("./Status");
const Task = require("./Task");
const MemberTasks = require("./MemberTasks");
const TaskTags = require("./TaskTags");

Status.hasMany(Task, {
	onDelete: 'RESTRICT',
	foreignKey: {
		name: 'statusId',
		allowNull: false,
	},
});

Member.hasMany(Action, {
	foreignKey: 'memberId',
	onDelete: 'SET NULL',
});

Member.hasMany(Task, {
	foreignKey: 'authorId',
	onDelete: 'RESTRICT',
});

Task.hasMany(Action, {
	foreignKey: 'taskId',
	onDelete: 'CASCADE',
});


Project.hasMany(Task, {
	foreignKey: {
		name: 'projectId',
		allowNull: false,
	},
	onDelete: 'CASCADE',
});

Project.hasMany(Member, {
	foreignKey: {
		name: 'projectId',
		allowNull: false,
	},
	onDelete: 'CASCADE',
});


User.hasMany(Member, {
	foreignKey: {
		name: 'userId',
		allowNull: false,
	},
	onDelete: 'CASCADE',
});

Task.belongsToMany(Member, { through: MemberTasks });
Member.belongsToMany(Task, { through: MemberTasks });

Task.belongsToMany(Tag, { through: TaskTags });
Tag.belongsToMany(Task, { through: TaskTags });