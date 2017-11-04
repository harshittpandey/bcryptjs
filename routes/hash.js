var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

//login
router.get('/hash',function(req,res){
	res.render('hash');
});

router.post('/hash',function(req, res){
   var password = req.body.password;
   req.checkBody('password','Password is required').notEmpty();
   var errors =req.validationErrors();

	if(errors){
		res.render('hash',{
			errors : errors
		});
	}

	else{
      bcrypt.genSalt(10,function(err,salt){
	      	bcrypt.hash(password,salt,function(err,hash){
              res.render('hash',{
              salt:salt,
          	  hash:hash
             })
		    });
	  });
	}
});

module.exports = router;