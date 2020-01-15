var db = require("../models/index");

// this pulls information from database

module.exports = function (app) {
    //get all the pets with the same owner//
    app.get("/api/owner/pet/:OwnerId", function (req, res) {
        db.Pet.findAll({
            where:
            {
                OwnerId: req.params.OwnerId
            }

        }).then(function (dbPet) {
            res.json(dbPet);
        });
    });

    app.get("/api/pets", function (req, res) {
        db.Pet.findAll({}).then(function (dbPet) {
            res.json(dbPet);
            console.log("this is the new pet " + dbPet);
        });
    });

    //get one pet by the id//
    app.get("/api/pet/:id", function (req, res) {
        db.Pet.findOne({
            where:
            {
                id: req.params.id
            }

        }).then(function (dbPet) {
            res.json(dbPet);
            console.log(dbPet);
        });
    });

    app.get("/api/pet/:pets_name", function (req, res) {
        db.Pet.findOne({
            where:
            {
                pets_name: req.params.pets_name
            }

        }).then(function (dbPet) {
            res.json(dbPet);
            console.log(dbPet);
        });
    });

    app.post("/api/pet", function (req, res) {
        db.Pet.create(req.body).then(function (newPet) {
            res.json(newPet);
            console.log(newPet);
        });
    });

    app.delete("/api/pet/:id", function (req, res) {
        db.Pet.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPet) {
            res.json(dbPet);
        })
    })

    // update a pet profile //
    app.put("/api/pet", function (req, res) {
        db.Post.update(req.body, {
            where: {
                id: req.body.id
            }
        })
            .then(function (dbPet) {
                res.json(dbPet);
            })
    })


};