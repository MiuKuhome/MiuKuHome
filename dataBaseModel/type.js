var sequelize = require('sequelize'); //引入mysql orm sequelize包
var connect = require("../connect/connect_db");

//定义类型表字段类型
var Type = connect.define('type', {
    name: sequelize.STRING
})

module.exports = Type;