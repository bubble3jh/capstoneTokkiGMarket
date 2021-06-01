var express = require("express");
var router = express.Router();
var User = require("../models/User");
var util = require("../util");

//var smart_function = require('../public/js/script2');

var client = require("../utils/client");
const { smart_function, web3 } = client;

// New
router.get("/new", function (req, res) {
  var user = req.flash("user")[0] || {};
  var errors = req.flash("errors")[0] || {};
  res.render("users/new", { user: user, errors: errors });
});

router.get("/identity", function (req, res) {
  var user = req.flash("user")[0] || {};
  var errors = req.flash("errors")[0] || {};
  res.render("users/identity", { user: user, errors: errors });
});

router.get("/addip", function (req, res) {
  var user = req.flash("user")[0] || {};
  var errors = req.flash("errors")[0] || {};
  res.render("users/addip", { user: user, errors: errors });
});

// create
router.post("/", async function (req, res) {
  var blockchain = await smart_function.get_account();
  req.body.blockhash = blockchain.toString();
  //console.log("Test1" + blockchain.toString());
  //console.log(typeof(req.body.blockhash));
  //console.log(req.body.blockhash);
  console.log(req.body);

  User.create(req.body, function (err, user) {
    if (err) {
      req.flash("user", req.body);
      req.flash("errors", util.parseError(err));
      return res.redirect("/");
    }
    console.log(user);
    res.redirect("/");
  });
});

// show -> user의 마이페이지
router.get("/:username", util.isLoggedin, checkPermission, function (req, res) {
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err) return res.json(err);
    res.render("users/show", { user: user });
  });
});

// edit -> 프로필 수정 페이지
router.get(
  "/:username/edit",
  util.isLoggedin,
  checkPermission,
  function (req, res) {
    var user = req.flash("user")[0];
    var errors = req.flash("errors")[0] || {};
    if (!user) {
      User.findOne({ username: req.params.username }, function (err, user) {
        if (err) return res.json(err);
        res.render("users/edit", {
          username: req.params.username,
          user: user,
          errors: errors,
        });
      });
    } else {
      res.render("users/edit", {
        username: req.params.username,
        user: user,
        errors: errors,
      });
    }
  }
);

router.get(
  "/:username/report",
  util.isLoggedin,
  checkPermission,
  function (req, res) {
    var user = req.flash("user")[0];
    var errors = req.flash("errors")[0] || {};
    if (!user) {
      User.findOne({ username: req.params.username }, function (err, user) {
        if (err) return res.json(err);
        res.render("users/report", {
          username: req.params.username,
          user: user,
          errors: errors,
        });
      });
    } else {
      res.render("users/report", {
        username: req.params.username,
        user: user,
        errors: errors,
      });
    }
  }
);

router.get(
  "/:username/report1",
  util.isLoggedin,
  checkPermission,
  function (req, res) {
    var user = req.flash("user")[0];
    var errors = req.flash("errors")[0] || {};
    if (!user) {
      User.findOne({ username: req.params.username }, function (err, user) {
        if (err) return res.json(err);
        res.render("users/report1", {
          username: req.params.username,
          user: user,
          errors: errors,
        });
      });
    } else {
      res.render("users/report", {
        username: req.params.username,
        user: user,
        errors: errors,
      });
    }
  }
);

// update
router.put(
  "/:username",
  util.isLoggedin,
  checkPermission,
  function (req, res, next) {
    User.findOne({ userid: req.params.username })
      .select("password")
      .exec(function (err, user) {
        if (err) return res.json(err);

        // update user object
        user.originalPassword = user.password;
        user.password = req.body.newPassword
          ? req.body.newPassword
          : user.password;
        for (var p in req.body) {
          user[p] = req.body[p];
        }

        // save updated user
        user.save(function (err, user) {
          if (err) {
            req.flash("user", req.body);
            req.flash("errors", util.parseError(err));
            return res.redirect("/users/" + req.params.username + "/edit");
          }
          res.redirect("/users/" + user.username);
        });
      });
  }
);

module.exports = router;

// private functions
function checkPermission(req, res, next) {
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err) return res.json(err);
    if (user.username != req.user.username) return util.noPermission(req, res);
    next();
  });
}
