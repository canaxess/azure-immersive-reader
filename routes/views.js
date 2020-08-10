var express = require('express');
var router = express.Router();
var path = require('path');
var viewRoot = path.join(__dirname, '../views');

router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: viewRoot});
});

module.exports = router;
