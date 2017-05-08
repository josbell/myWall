var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	create: function(req,res){
		console.log('User Controller Register: Data from Factory',req.body);
		var newUser = new User(req.body);
		newUser.save(function(err, user){
			if(err){console.log('Something went wrong when registering user', err)}
			console.log('Encrypted Password', newUser.password);
			res.json(user);
		})
	},

	validateCredentials: function(req, res){
		console.log('User Controller validateCredentials: Data From Factory', req.body);
		var rawPwd = req.body.password;

		User.findOne({username:req.body.username}, function(err, user){
			if(err){console.log(err); res.json({valid:false});
			}else if(!user){
				console.log('user not found');
				res.json({valid:false});

			}else if(User.passwordMatch(rawPwd,user.password)){
				console.log('Validation Passed', user);
				res.json({valid:true});
			}else{
				console.log('Validation Failed', user);
				res.json({valid:false});
			}
		}); 
	}
}