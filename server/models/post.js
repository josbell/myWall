var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function(){
	var postSchema = new mongoose.Schema({
		text:{
			type:String,
			required:true
		},
		user:{
			type:String,
			required:true
		},
		comments:[
			{
				text:{type:String, required:true},
				user:{type:String, required:true},
				createdAt:{type:Date, required:true}
			}]

	},{timestamps:true})

	mongoose.model('Post', postSchema);
};

