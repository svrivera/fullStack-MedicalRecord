// Imports model
const Patient = require('../models/Patient');



// When a new patient is created
exports.newPatient = async (req, res, next) => {
    // Creates object for new patient
    const patient = new Patient(req.body);
    try {
        // Inserts patient in DB
        await patient.save();
        res.json({message: 'Patient added successfully'});
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.getAllPatients = async (req, res, next) => {
    try {
        const patients = await Patient.find({});
        res.json(patients);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.getPatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.updatePatient = async (req, res, next) => {
    try {
        const patient = await Patient.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.json(patient);
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.deletePatient = async (req, res, next) => {
    try {
        await Patient.findOneAndDelete({_id: req.params.id});
        res.json({message: 'Patient deleted successfully'});
    } catch (error) {
        console.log(error);
        next();
    }
};
