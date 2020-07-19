// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

var express = require('express');
var router = express.Router();
var path = require('path');
var viewRoot = path.join(__dirname, '../views');

router.get('/', function(req, res, next) {
  res.redirect('/sections');
});

router.get('/sections', function(req, res, next) {
  res.sendFile('sections.html', {root: viewRoot});
});

module.exports = router;
