var sequelize = require('sequelize'); //引入mysql orm sequelize包
var connect = require("../connect/connect_db");
var Type = require("../dataBaseModel/type");
var visitor = require("../dataBaseModel/visit");
var comment = require("../dataBaseModel/comment");
var reply = require("../dataBaseModel/reply");

//定义文章表字段类型
var Article = connect.define('article', {
    title:sequelize.STRING, //标题
    cover:sequelize.STRING, //封面
    abstract:sequelize.STRING,//文章摘要
    content:sequelize.STRING //文章内容
})

    //外键关联
    Article.belongsTo(Type);
    Article.hasMany(visitor);
    Article.hasMany(visitor);
    Article.hasMany(comment);
    comment.hasMany(reply);
    
// // 创建文章表,并设置初始值
// connect.sync().then(function () {
//     return Article.create({
//         title: "关于javascript的面向对象部分",
//         cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505127355339&di=ff9db17bc8fef5974ecc50227d241dfb&imgtype=0&src=http%3A%2F%2Fimg.c7sky.com%2Fphotobucket%2Fflexbox_zpsb2193349.png",
//         abstract:"移动平台的SDK通常会绑定模拟器，它是一个可执行的设备镜像，这样你就可以在主屏幕启动你的App，看看它在多个平台是如何交互的。 在命令行运行下面的命令，会重新构建App并可以在特定平台的模拟器上查看,移动平台的SDK通常会绑定模拟器，它是一个可执行的设备镜像，这样你就可以在主屏幕启动你的App，看看它在多个平台是如何交互的。 在命令行运行下面的命令，会重新构建App并可以在特定平台的模拟器上查看",
//         content: "<p>移动平台的SDK通常会绑定模拟器，它是一个可执行的设备镜像，这样你就可以在主屏幕启动你的App，看看它在多个平台是如何交互的。 在命令行运行下面的命令，会重新构建App并可以在特定平台的模拟器上查看,移动平台的SDK通常会绑定模拟器，它是一个可执行的设备镜像，这样你就可以在主屏幕启动你的App，看看它在多个平台是如何交互的。 在命令行运行下面的命令，会重新构建App并可以在特定平台的模拟器上查看</p>",
//     })
// })

// // 创建分类表,并设置初始值
// connect.sync().then(function () {
//     return Type.create({
//        name:"javascript"
//     })
// })

// // 创建浏览记录表,并设置初始值
// connect.sync().then(function () {
//     return visitor.create({
//        username:"南国兔", //昵称
//        pic:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2333412040,4076017672&fm=27&gp=0.jpg" //头像
//     })
// })

// // 创建评论表,并设置初始值
// connect.sync().then(function () {
//     return comment.create({
//        username:"南国兔", //名称
//        photo:"http://img.25pp.com/uploadfile/soft/images/2014/0927/20140927123300330.jpg", //头像
//        content: "这篇文章非常有趣，支持!!", //内容
//     })
// })

// // 创建评论表,并设置初始值
// connect.sync().then(function () {
//     return reply.create({
//        username:"北国兔", //名称
//        photo:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2333412040,4076017672&fm=27&gp=0.jpg", //头像
//        content: "你说的太对了!!", //内容
//     })
// })

module.exports = Article;