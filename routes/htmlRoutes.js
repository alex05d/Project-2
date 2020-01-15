// var db = require("../models");
var path = require("path");


module.exports = function (app) {

  // OWNER Homepage
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  // Each Pet's PROFILE PAGE
  app.get("/profile_page", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/profile_page.html"));
  });

  //sign in page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
  // logout path
  app.get("/logout", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // OWNER profile page setup form
  app.get("/owner_profile_setup", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/owner_profile_setup.html"));
  });

  // pet profile form #1
  // (about pet)
  app.get("/about_pet_setup_form", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/about_pet_setup_form.html"));
  });

  // pet profile form #2
  // (feeding/vaccines/medication/special instructions)
  app.get("/pet", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/profile_setup.html"));
  });
};

