var db = require("../models");

var cloudinary = require('cloudinary')
// module.exports = function (app) {

//   //login route
//   app.get("/", (req, res) => {
//     res.render('login.ejs')
//   })

//   //login POST method
//   app.get('/login', (req, res) => {
//     res.render('login.ejs')
//   })

//   //register route
//   app.get('/register', (req, res) => {
//     res.render('register.ejs')
//   })

  // Get all examples
  // app.get("/api/examples", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example\

  app.post("/api/pet_image", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
    // console.log(req.body);
    var dataURI = req.body.dataURI;
    var uploadStr = 'data:image/jpeg;base64,' + dataURI;

    cloudinary.v2.uploader.upload(uploadStr, {
      api_key: "773177291336529",
      api_secret: "FZUKToWuQ9ijBcUCygsLd7rXvCg",
      cloud_name: "katedavis",
        overwrite: true,
        invalidate: true,
        width: 810, height: 456, crop: "fill"
    },
        function (error, result) {
            res.json(result);
        });
    // res.json(req.body)
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
// };
