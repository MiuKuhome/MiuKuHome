var sequelize = require('sequelize'); //引入mysql orm sequelize包
var connect = require("../connect/connect_db");
var Reply = require("../dataBaseModel/reply");
var Article = require("../dataBaseModel/article");
//定义类型表字段类型
var Comment = connect.define('comment', {
    username: sequelize.STRING, //名称
    photo: sequelize.STRING, //头像
    content: sequelize.STRING, //内容
})


module.exports = Comment;