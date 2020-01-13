var db = require("../models/index");

// this pulls information from database

module.exports = function (app) {
    // find one owner //
    app.get("/api/owner/:email", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.findOne({
            where:
            {
                email: req.params.email
            }

        }).then(function (Owner) {
            res.json(Owner);
        });
    });

    // find one owner by id
    app.get("/api/owner/:id", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.findOne({
            where:
            {
                id: req.params.id
            }

        }).then(function (Owner) {
            res.json(Owner);
        });
    });

    // find all owners //
    app.get("/api/owners", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.findAll({}).then(function (Owner) {
            res.json(Owner);
            console.log(Owner);
        });
    });

    // create a new owner //
    app.post("/api/owner", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.create(req.body).then(function (dbOwner) {
            res.json(dbOwner);
        });
    });

    app.delete("/api/owner/:id", function (req, res) {
        db.Owner.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbOwner) {
            res.json(dbOwner);
        })
    })


};