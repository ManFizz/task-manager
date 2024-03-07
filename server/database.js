const {Sequelize} = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	port: parseInt(config.port),
	dialect: config.dialect,
});

module.exports = sequelize;

require('./Models/Relationship');