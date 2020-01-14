var db = require("../models");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var saltRounds = 10;
var cloudinary = require('cloudinary');
process.env.SECRET_KEY = 'secret';

module.exports = function (app) {

  // login form POST method
  app.post('/login', (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        console.log(user);
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          }
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
    // commented this out because it was redirecting users to index page without authenticating user
    //res.redirect('/')
  })

  //register POST method
  app.post('/register', (req, res) => {
    var myPlaintextPassword = req.body.password;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        if (err) {
          console.log(err);
        }
        db.User.create({
          email: req.body.email,
          password: hash
        }).then(function (dbUsers) {
          res.json({ status: "success" });
          // eslint-disable-next-line no-console
          console.log(dbUsers);
        })
      })

    })

  })

  //logout function
  app.post("/logout", function (req, res) {

  })


  app.post("/api/pet_image", function (req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
    // console.log(req.body);
    var dataURI = req.body.dataURI;
    var uploadStr = dataURI;


    cloudinary.v2.uploader.upload(uploadStr, {
      api_key: "773177291336529",
      api_secret: "FZUKToWuQ9ijBcUCygsLd7rXvCg",
      cloud_name: "katedavis"
    },
      function (error, result) {
        if (error) {
          console.log(error);
        }
        return res.send(result.url);

      });
    // res.json(req.body)
  });
};
