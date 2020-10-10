require('dotenv').config();
var express = require('express');
var path = require('path');

var viewsRouter = require('./routes/views');
var requestsRouter = require('./routes/requests');

var app = express();

const cors = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))

app.use('/', viewsRouter);
app.use('/', cors(), requestsRouter);

module.exports = app;