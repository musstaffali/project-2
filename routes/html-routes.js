// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const passport = require("../config/passport");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

<<<<<<< HEAD
  app.get("/auth/facebook/secrets", passport.authenticate("facebook"));

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect("/members");
    }
  );
=======

  app.get("/favorites", (req, res) => {
    // If the user already has an account send them to the members page

    // if (req.user) {
    //   res.redirect("/favorites");
    // }
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
  });

>>>>>>> b81debcd6e3daa21d7243afd52071f7acb57b237
};
