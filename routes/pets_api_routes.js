var db = require("../models");

// this pulls information from database

module.exports = function (app) {

    app.get("/api/owner/pet/:id", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet);
        db.Pet.findAll({
            where:
            {
                id: req.params.id
            }

        }).then(function (dbPet) {
            res.json(dbPet);
            console.log(dbPet);
        });
    });

    app.get("/api/owner/pet/:id", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet);
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

    app.post("/api/pet", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet);
        db.Pet.create(req.body).then(function (dbPet) {
            res.json(dbPet);
            console.log(dbPet);
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


};