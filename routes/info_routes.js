var db = require("../models/index");

// this pulls information from database

module.exports = function (app) {


    // this is the feeding post/create routes //
    app.post("/api/pet/feeding", function (req, res) {
        db.Pet_feeding.create(req.body).then(function (dbPet_feeding) {
            res.json(dbPet_feeding);
        });
    });



    // feeding GET routes //
    app.get("/api/pet/feedings/:PetId", function (req, res) {
        db.Pet_feeding.findAll({
            where: {
                PetId: req.params.PetId
            }
        }).then(function (dbPet_feeding) {
            res.json(dbPet_feeding);
        });
    });


    // this is the vaccinations post/create routes //
    app.post("/api/pet/vacc", function (req, res) {
        db.Pet_vaccination.create(req.body).then(function (dbPet_vaccination) {
            res.json(dbPet_vaccination);
        });
    });

    // vaccinations GET routes //
    app.get("/api/pet/vaccs/:PetId", function (req, res) {
        db.Pet_vaccination.findAll({
            where: {
                PetId: req.params.PetId
            }
        }).then(function (dbPet_vaccination) {
            res.json(dbPet_vaccination);
            console.log("000000000000000000000" + dbPet_vaccination);
        });
    });




    // this is the medications post/create routes//
    app.post("/api/pet/medication", function (req, res) {
        db.Medication.create(req.body).then(function (dbMeds) {
            res.json(dbMeds);
            console.log(dbMeds);
        });
    });

    //  medication GET routes //
    app.get("/api/pet/medications/:PetId", function (req, res) {
        db.Medication.findAll({
            where: {
                PetId: req.params.PetId
            }
        }).then(function (dbMedication) {
            res.json(dbMedication);
            console.log(dbMedication);
        });
    });



    //this is the appointments post/create route//
    app.post("/api/pet/appt", function (req, res) {
        db.Appt.create(req.body).then(function (dbAppt) {
            res.json(dbAppt);
            console.log(dbAppt);
        });
    });

    //  appointments GET routes //
    app.get("/api/pet/appts/:PetId", function (req, res) {
        db.Appt.findAll({
            where: {
                PetId: req.params.PetId
            }
        }).then(function (dbAppt) {
            res.json(dbAppt);
            console.log(dbAppt);
        });
    });



    // this is the special inst post/create route//
    app.post("/api/pet/specInst", function (req, res) {
        db.Special_instruction.create(req.body).then(function (dbSpecial_instruction) {
            res.json(dbSpecial_instruction);
        });
    });


    //  special instructions GET routes //
    app.get("/api/pet/specInsts/:PetId", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Special_instruction);
        db.Special_instruction.findAll({
            where: {
                PetId: req.params.PetId
            }
        }).then(function (dbSpecial_instruction) {
            res.json(dbSpecial_instruction);
        });
    });

};