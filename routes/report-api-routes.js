var db = require("../models");

module.exports = function (app) {

    // POST route to save a new report
    app.post("/api/newreport", function (req, res) {

        db.Report.create(req.body).then(function (dbReport) {

            res.json(dbReport);
        });
    });

    // GET route to get all the infractions of a given plate
    app.get("/api/reportinfractions/:plate", function (req, res) {
        db.Report.findAll({
            where: {
                plate: req.params.plate
            }
        }).then(function (dbPlate) {
            res.json(dbPlate);
        });
    });

};