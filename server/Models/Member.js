const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Member = sequelize.define('member', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	info: {
		type: DataTypes.STRING
	}
}, {
	timestamps: false,
});

module.exports = Member;