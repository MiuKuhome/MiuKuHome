var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var article = require("../dataBaseControl/articleSend");
    article().then(function(result){
        res.render('index',{
            art: result.doc.rows,
            count: result.doc.count
        });
    })
});

module.exports = router;