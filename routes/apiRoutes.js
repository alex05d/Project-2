var db = require("../models");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var saltRounds = 10;
process.env.SECRET_KEY = 'secret';

module.exports = function (app) {

  // login form POST method
  app.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
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
    res.redirect('/')
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

};


        // Get all examples
        // app.get("/api/examples", function (req, res) {
        //   db.Example.findAll({}).then(function (dbExamples) {
        //     res.json(dbExamples);
        //   });
        // });

        // // Create a new example
        // app.post("/api/examples", function(req, res) {
        //   db.Example.create(req.body).then(function(dbExample) {
        //     res.json(dbExample);
        //   });
        // });

        // // Delete an example by id
        // app.delete("/api/examples/:id", function(req, res) {
        //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        //     res.json(dbExample);
        //   });
        // });
