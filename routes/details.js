var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('details', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
    res.render('details', { title: 'Express' });
});

module.exports = router;