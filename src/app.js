const express = require('express');

const app = express();

//route
const indexRoutes = require('./routes/index-route');

//model
const Object = require('./models/object-model');

app.use('/', indexRoutes);

module.exports = app;