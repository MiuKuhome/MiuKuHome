/**
 * 连接数据库
 */
var sequelize = require("sequelize");

var connect = new sequelize("MiuKuhome","root","root");

module.exports = connect;