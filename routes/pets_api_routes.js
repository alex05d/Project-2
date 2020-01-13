var db = require("../models");

// this pulls information from database

module.exports = function (app) {
    //get all the pets with the same owner//
    app.get("/api/owner/pet/:owner_id", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Pet);
        db.Pet.findAll({
            where:
            {
                owner_id: req.params.owner_id
            }

        }).then(function (dbPet) {
            res.json(dbPet);
            console.log("this is the new pet " + dbPet);
        });
    });
    //get one pet by the id//
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