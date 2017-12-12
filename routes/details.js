var express = require('express');
var router = express.Router();
var details = require('../dataBaseControl/detailSend');

router.get('/', function(req, res, next) {
    details(1).then(function(doc) {
         res.render('details', {
        	detailDate:doc
        });
    })
});

router.get('/:id', function(req, res, next) {
	var id = req.params.id;
    details(id).then(function(doc) {
        res.render('details', {
        	detailDate:doc
        });
    })
});

module.exports = router;