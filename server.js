const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./src/routes/routes');


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const env = process.env.NODE_ENV;
mongoose.connect(config[env].DATABASE_URL);
const db = mongoose.connection;
const port = process.env.PORT || 8000;

db.on('error',function(){
console.log('Failed to establish connection');
})

db.once('open',function(){
app.listen(port);
console.log('Connection established');
});

app.use('/api/v1', routes);

module.exports = app;