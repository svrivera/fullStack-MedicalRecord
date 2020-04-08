const express = require('express');
const mongoose = require('mongoose');
// Imports routes file
const routes = require('./routes');
// Imports bodyParser to parse req and res
const bodyParser = require('body-parser');
// Imports CORS
const cors = require('cors');


// Creates the server
const app = express();


// // uncomment if you want to restrict the sites that can request the api
// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//     origin: (origin, callback) => {
//         const allowed = whitelist.some(domain => domain === origin);
//         if (allowed) {
//             callback(null, true);
//         } else {
//             callback(new Error('not allowed by CORS'))
//         };
//     }
// }

// Enables CORS
app.use(cors());

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


