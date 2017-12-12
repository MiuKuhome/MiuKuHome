var express = require('express');
var router = express.Router();
var article = require("../dataBaseControl/articleSend");
/* GET home page. */
router.get('/', function(req, res, next) {
    article(0).then(function(result){
        res.render('index',{
            art: result.doc.rows,
            count: result.doc.count,
            page: 0
        });
    })
});

router.get('/page/:id',function(req, res, next){
	var id = req.params.id;
	article(id).then(function(result){
		res.render('index',{
            art: result.doc.rows,
            count: result.doc.count,
            page: id
        });
	})
})

module.exports = router;