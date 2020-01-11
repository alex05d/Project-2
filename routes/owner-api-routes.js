var db = require("../models");

// this pulls information from database

module.exports = function (app) {

    app.get("/api/owner/:id", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.findOne({
            where:
            {
                id: req.params.id
            }

        }).then(function (Owner) {
            res.json(Owner);
            console.log(Owner);
        });
    });

    app.post("/api/owner", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.create(req.body).then(function (dbOwner) {
            res.json(dbOwner);
            console.log(dbOwner);
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