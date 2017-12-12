var article = require("../dataBaseModel/article");
var Type = require("../dataBaseModel/type");
var comment = require("../dataBaseModel/comment");

function Details(byId) {
    return new Promise(function(resolve, reject) {
        article.findById(byId, { include: [{ model: Type, attributes: ['name'] }, { model: comment }] }).then(function(doc) {
            resolve(doc)
        }, function(error) {
            reject(error)
        })
    })
}

module.exports = Details;