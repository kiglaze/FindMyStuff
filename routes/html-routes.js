var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    else {
        res.render("login", {});
    }
  });


  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    else {
        res.render("login", {});
    }
  });


  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    else {
      res.render("signup", {});
    }
  });


  // Here we've add our isAuthenticated middleware to this route.
  app.get("/members", isAuthenticated, function(req, res) {
    db.User.findOne({
        include: [
        {model: db.Room, include: [
          {model: db.Item}
        ]}
        ],
        where: {
            id: req.user.id
        }
    }).then(function (dbUser) {
        res.render("members", {
          email: dbUser.email,
          id: dbUser.id,
          rooms: dbUser.Rooms
        });
    });
  });

};
