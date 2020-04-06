const express = require('express');
const router = express.Router();
// Imports controller
const patientController = require('../controllers/patientController');


module.exports = () => {
    // Gets all patients from the DB
    router.get('/patients', patientController.getAllPatients);
    // Gets an specific patient from the DB
    router.get('/patients/:id', patientController.getPatient);
    // Adds new patient through POST
    router.post('/patients', patientController.newPatient);
    // Updates patient information
    router.put('/patients/:id', patientController.updatePatient);
    // Deletes patient from DB
    router.delete('/patients/:id', patientController.deletePatient);



    return router;
}