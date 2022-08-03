var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hafa-samband', { title: 'Halló Krakkar' });
});

module.exports = router;
