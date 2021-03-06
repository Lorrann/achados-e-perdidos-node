const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//base
mongoose.connect('mongodb://lorrann:lorrann01@ds042607.mlab.com:42607/achados-perdidos', { useMongoClient: true });

//model
const Object = require('./models/object');
const User = require('./models/user');

//route
const indexRoutes = require('./routes/index');
const object = require('./routes/object');
const user = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/object', object);
app.use('/user', user);

module.exports = app;