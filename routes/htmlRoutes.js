// var db = require("../models");


// ?? Do we need to require Sequelize here?

module.exports = function (app) {

  //login route
  // === displays "/start" page

  app.get("/start", function (req, res) {
    res.sendFile(path.join(__dirname, "/../views/start.html"));
  });



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
// };
