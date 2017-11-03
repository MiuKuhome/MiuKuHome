var sequelize = require('sequelize'); //引入mysql orm sequelize包
var connect = require("../connect/connect_db");

//定义类型表字段类型
var Reply = connect.define('replied', {
    username: sequelize.STRING, //名称
    photo: sequelize.STRING, //头像
    content: sequelize.STRING, //内容
})


module.exports = Reply;