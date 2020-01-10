var db = require("../models");


module.exports = function (app) {


    app.get("/api/Owner", function (req, res) {
        console.log("!!!!!!!!!!!!!", db.Owner);
        db.Owner.findAll({
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
};