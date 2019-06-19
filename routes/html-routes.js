// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // main route, loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // loads report.html
  app.get("/report", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/report.html"));
  });

  // loads consult.html
  app.get("/consult", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/consult.html"));
  });

};
