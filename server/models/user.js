var mongoose = require('mongoose');
var bcrypt = require('bcryptjs'); 
var Schema = mongoose.Schema;
module.exports = function(){
	//Create User Schema
	var userSchema = new mongoose.Schema({
		username:{
			type: String,
			required: true,
			lowercase: true
		},

		email:{
			type: String,
			required: true,
			lowercase: true
		},

		password:{
			type: String,
			required: true
		},

		posts:{
			type:Schema.Types.ObjectId, reg:'Post'
		}

	}, {timestamps:true});

	userSchema.methods.encryptPassword = function(password){
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
	};

	userSchema.statics.checkCredentials = function(data){
		console.log('Inside checkCredentials', data);
	};

	userSchema.statics.passwordMatch = function(password,encryptedPassword){
		return bcrypt.compareSync(password, encryptedPassword);
	};

	userSchema.pre('save', function(done){
		this.password = this.encryptPassword(this.password);
		done();
	});

	//Register User Schema
	mongoose.model('User', userSchema);
}