/**
 * 连接数据库
 */
var sequelize = require("sequelize");

var connect = new sequelize("MiuKuhome","root","root",{
	  host: 'localhost',
  	  dialect: 'mysql',
});
module.exports = connect;