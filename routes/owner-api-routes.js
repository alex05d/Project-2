var db = require("../models");

// this pulls information from database

module.exports = function (app) {


    app.get("/api/Owner", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.findOne({
            include: [
                {
                    model: db.Pet
                }
            ]
        }).then(function (Owner) {
            res.json(Owner);
            console.log(Owner);
        });
    });

    app.post("/api/new-profile", function (req, res) {
        console.log("Owners info made it", req.body)
    })
};