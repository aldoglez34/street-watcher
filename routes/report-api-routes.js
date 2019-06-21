var db = require("../models");

module.exports = function (app) {

    // POST route to save a new report
    app.post("/api/newreport", function (req, res) {

        db.Report.create(req.body).then(function (dbReport) {

            res.json(dbReport);
        });
    });

};