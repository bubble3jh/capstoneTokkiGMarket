var express = require('express');
const { rawListeners } = require('../models/User');
var router = express.Router();
// model
var User = require('../models/User');
//const Web3 = require('web3');
// var smart_function = require('../public/js/script2');

// var Web3 = require ('web3')
// var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
var client = require('../utils/client');
const { smart_function, web3 } = client
// var smart_function = client.smart_function
// var web3 = client.web3

// var util = require('../util');

/*police 계정이 들어왔을 때 */

router.get('/', function(req,res){
    var name = null;
    var resi_num = null;

    res.render('users/police', {name: name, resi_num: resi_num});
    
});

router.get('/search', async function(req,res){
    /*
    console.log(req.body.username);
    console.log('들어 오긴 한건가....');*/

    User.findOne({username:req.body.username}, async function(err, user){

        if(err) res.json(err);
        
        if(!user){
            req.flash('error', 'There is no user');
        }
        else {
            //var ether_account = user.blockchain;
            var name = await smart_function.getName();
            var resi_num = await smart_function.getNum();
            console.log(name, resi_num);
            res.render('users/police',{name: name, resi_num: resi_num});
        }

    });

});

module.exports = router;