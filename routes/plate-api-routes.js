var db = require("../models");

module.exports = function (app) {

    // find one specific plate
    app.get("/api/plates/:p", function (req, res) {

        db.Plate.findOne({
            where: {
                plate: req.params.p
            }
        }).then(function (dbPlate) {

            res.json(dbPlate);
        });
    });

    // update plates
    app.post("/api/authors", function (req, res) {
        
        db.Author.create(req.body).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

};