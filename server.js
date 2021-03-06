require("dotenv").config();
var express = require("express");
var db = require("./models/index");
var keys = require("./keys");

var app = express();
var PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Routes
require("./routes/owner-api-routes")(app);
require("./routes/pets_api_routes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/info_routes")(app);

// false: allows data to stay in database
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

