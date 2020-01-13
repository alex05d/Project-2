// var db = require("../models");
var path = require("path");

// ?? Do we need to require Sequelize here?

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // once new user registers, they will be redirected to this welcome page
  app.get("/start", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/start.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  });

  app.get("/owner_profile_setup", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/owner_profile_setup.html"));
  });

  app.get("/logout", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  app.get("/pet_profile", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/profile_page.html"));
  });

  // app.get("/pet_profile_setup", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../views/profile_setup.html"));
  // });

  app.get("/pet", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/profile_setup.html"));
  });




  // OWNER Homepage
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // Each Pet's PROFILE PAGE
  app.get("/profile_page", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/profile_page.html"));
  });

};


//   //login POST method
  //   app.get('/login', (req, res) => {
  //     res.render('login.ejs')
  //   })

  //   //register route
  //   app.get('/register', (req, res) => {
  //     res.render('register.ejs')
  //   })

  //   // Load index page
  //   app.get("/", function (req, res) {
  //     db.Example.findAll({}).then(function (dbExamples) {
  //       res.render("index", {
  //         msg: "Welcome!",
  //         examples: dbExamples
  //       });
  //     });
  //   });

  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function (req, res) {
  //     db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  //   });

  //   // Render 404 page for any unmatched routes
  //   app.get("*", function (req, res) {
  //     res.render("404");
  //   });