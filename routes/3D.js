var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('3D', { title: 'Halló Krakkar' });
});

module.exports = router;
