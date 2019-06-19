var db = require("../models");

module.exports = function (app) {

    app.get("/api/infractions", function (req, res) {

        db.Infraction.findAll().then(function (dbInfraction) {
            res.json(dbInfraction);
        });
    });

};