const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines patient schema
const patientsSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    insurance: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    hour: {
        type: String,
        trim: true
    },
    symthoms: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Patient', patientsSchema);