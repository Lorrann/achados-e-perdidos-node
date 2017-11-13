const express = require('express');

const app = express();

const indexRoutes = require('./routes/index-route');

app.use('/', indexRoutes);

module.exports = app;