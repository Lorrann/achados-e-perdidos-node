const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//base
mongoose.connect('mongodb://lorrann:lorrann01@ds042607.mlab.com:42607/achados-perdidos');

//model
const Object = require('./models/object-model');

//route
const indexRoutes = require('./routes/index-route');
const objectRoutes = require('./routes/object-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/objectRoutes', objectRoutes);

module.exports = app;