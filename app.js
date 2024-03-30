var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var galleryRouter = require('./routes/gallery');
var photoRouter = require('./routes/photo');

var cors = require('cors')
var app = express()

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/gallery', galleryRouter);
app.use('/photo-info', photoRouter);

module.exports = app;
