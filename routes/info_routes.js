var db = require("../models/index");

// this pulls information from database

module.exports = function (app) {


    // this is the feeding post/create routes //
    app.post("/api/pet/feeding", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet_feeding);
        db.Pet_feeding.create(req.body).then(function (dbPet_feeding) {
            res.json(dbPet_feeding);
            console.log(dbPet_feeding);
        });
    });



    // feeding GET routes //
    app.get("/api/pet/feedings", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet_feeding);
        db.Pet_feeding.findAll(req.body).then(function (dbPet_feeding) {
            res.json(dbPet_feeding);
            console.log(dbPet_feeding);
        });
    });


    // this is the vaccinations post/create routes //
    app.post("/api/pet/vaccs", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet_vaccination);
        db.Pet_vaccination.create(req.body).then(function (dbPet_vaccination) {
            res.json(dbPet_vaccination);
            console.log(dbPet_vaccination);
        });
    });

    // vaccinations GET routes //
    app.get("/api/pet/vacc", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet_vaccination);
        db.Pet_vaccination.findAll(req.body).then(function (dbPet_vaccination) {
            res.json(dbPet_vaccination);
            console.log(dbPet_vaccination);
        });
    });


    // this is the medications post/create routes//
    app.post("/api/pet/medication", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Medication);
        db.Medication.create(req.body).then(function (dbMeds) {
            res.json(dbMeds);
            console.log(dbMeds);
        });
    });

    //  medication GET routes //
    app.get("/api/pet/medications", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Medication);
        db.Medication.findAll(req.body).then(function (dbMedication) {
            res.json(dbMedication);
            console.log(dbMedication);
        });
    });



    //this is the appointments post/create route//
    app.post("/api/pet/appt", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Appt);
        db.Appt.create(req.body).then(function (dbAppt) {
            res.json(dbAppt);
            console.log(dbAppt);
        });
    });

    //  appointments GET routes //
    app.get("/api/pet/appts", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Appt);
        db.Appt.findAll(req.body).then(function (dbAppt) {
            res.json(dbAppt);
            console.log(dbAppt);
        });
    });



    // this is the special inst post/create route//
    app.post("/api/pet/specInst", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Special_instruction);
        db.Special_instruction.create(req.body).then(function (dbSpecial_instruction) {
            res.json(dbSpecial_instruction);
            console.log(dbSpecial_instruction);
        });
    });

<<<<<<< HEAD
=======

    //  special instructions GET routes //
    app.get("/api/pet/specInsts", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Special_instruction);
        db.Special_instruction.findAll(req.body).then(function (dbSpecial_instruction) {
            res.json(dbSpecial_instruction);
            console.log(dbSpecial_instruction);
        });
    });


    // app.delete("/api/owner/:id", function (req, res) {
    //     db.Owner.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbOwner) {
    //         res.json(dbOwner);
    //     })
    // })

>>>>>>> 1d7ff3d39a759f897f93433fd0e1dde0d69766ac

    //  special instructions GET routes //
    app.get("/api/pet/specInsts", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Special_instruction);
        db.Special_instruction.findAll(req.body).then(function (dbSpecial_instruction) {
            res.json(dbSpecial_instruction);
            console.log(dbSpecial_instruction);
        });
    });


    // app.delete("/api/owner/:id", function (req, res) {
    //     db.Owner.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbOwner) {
    //         res.json(dbOwner);
    //     })
    // })


};