require('dotenv').config();
var express = require('express');
var path = require('path');

var requestsRouter = require('./routes/requests');

var app = express();
const cors = require('cors');
var corsOptions = { origin: '*' };

app.use(express.static('public'))
app.use('/', cors(corsOptions), requestsRouter);

module.exports = app;