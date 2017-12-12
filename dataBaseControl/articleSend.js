var article = require("../dataBaseModel/article");
var Type = require("../dataBaseModel/type");
var visitor = require("../dataBaseModel/visit");
var async = require("async");
// 查询文章
function Article(sNum){
    sNum = sNum*5
    return new Promise(function(resolve,reject){
        async.series({
            doc:function(callback){
                article.findAndCountAll({order:[['id','DESC']],offset:sNum,limit:5,attributes:['id','title','cover','abstract','createdAt'],include:[{model:visitor,attributes:['username','pic']},{model:Type,attributes:['name'],required:true}]}).then(function(doc){
                    callback(null,doc)
                })
            },
        },function(err,result){
            if(result.doc.count > 0){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

module.exports = Article;