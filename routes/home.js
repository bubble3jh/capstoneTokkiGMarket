var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var User = require('../models/User');
// chat
router.get('/chat', function(req, res){
  res.render('home/chat');
});

// chatindex
router.get('/chatindex', function(req, res){
  res.render('home/chatindex');
});
// chatindex post // chatejs로 tochatuser과 chatroom을 보내줌.
router.post('/chatindex', function(req, res) {
  var chatroom = req.body.chatroom;
  var tochatuser = req.body.tochatuser;
  // res.redirect('/chat');
  res.render('home/chat', { tochatuser: tochatuser, chatroom: chatroom});
});


// report
router.get('/report', function(req, res){
  res.render('home/report');
});
router.get('/report1', function(req, res){
  res.render('home/report1');
});

// Home
router.get('/', function(req, res){
  res.render('home/welcome');
});
router.get('/about', function(req, res){
  res.render('home/about');
});

// Login
router.get('/login', function (req,res) {
  var username = req.flash('username')[0];
  var errors = req.flash('errors')[0] || {};
  res.render('home/login', {
    username:username,
    errors:errors
  });
});

// Post Login
router.post('/login',
  function(req,res,next){
    var errors = {};
    var isValid = true;

    if(!req.body.username){
      isValid = false;
      errors.username = 'username is required!';
    }
    if(!req.body.password){
      isValid = false;
      errors.password = 'Password is required!';
    }

    if(isValid){
      next();
    }
    else {
      req.flash('errors',errors);
      res.redirect('/login');
    }
  },
  passport.authenticate('local-login', {
    //successRedirect : '/posts',
    failureRedirect : '/login'
  }),
  function(req, res){
    /*polic 계정이 들어왔을 때 */
    if(req.body.username == "bubble1jh"){
      res.redirect('/police');
    }
    else res.redirect('/posts');
  });

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;

// private function
function check_police(req, res, next){

  User.findOne({username:req.body.username}, function(err, user){
    
    console.log(user.username);
    if(err) res.json(err);
    if(user.username == "bubble1jh"){
      next();
    }
  });

}