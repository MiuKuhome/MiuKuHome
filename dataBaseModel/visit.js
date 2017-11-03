var sequelize = require('sequelize'); //引入mysql orm sequelize包
var connect = require("../connect/connect_db");

//定义文章表字段类型
var visitor = connect.define('visit', {
    username:sequelize.STRING, //昵称
    pic:sequelize.STRING, //头像
})

module.exports = visitor;