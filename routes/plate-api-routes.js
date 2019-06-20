var db = require("../models");

module.exports = function (app) {

    // GET route to find one specific plate
    app.get("/api/plates/:p", function (req, res) {

        db.Plate.findOne({
            where: {
                plate: req.params.p
            }
        }).then(function (dbPlate) {

            res.json(dbPlate);
        });
    });

    app.put("/api/points/:plate", function (req, res, next) {

        var body = req.body;

        var newpoints = parseInt(body.puntosactuales) - parseInt(body.puntosarestar);

        console.log(newpoints);

        // update
        db.Plate.findOne({ where: { plate: req.params.plate } }).then(function (dbPlate) {
            dbPlate.update({
                points: newpoints
            }).then(function (resp) {
                res.send(resp);
            })
        }).catch(function (error) {
            resp.status(500).send(error);
        });

    })

};