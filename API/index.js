const express = require('express');
const mongoose = require('mongoose');
// Imports routes file
const routes = require('./routes');
// Imports bodyParser to parse req and res
const bodyParser = require('body-parser')


// Creates the server
const app = express();

// Connects to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/medical-records', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Enables body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enables routing (midleware)
app.use('/', routes());


// Defines port and a callback
app.listen(27017, () => {
    console.log('Server OK')
});


