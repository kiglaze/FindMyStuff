var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // app.get("/", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    else {
        res.render("index", {});
    }
  });

  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    else {
        res.render("login", {});
    }
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  app.get("/members", isAuthenticated, function(req, res) {
    db.User.findOne({
        include: [db.Room],
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
