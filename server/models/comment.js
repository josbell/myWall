var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function(){
	var commentSchema = new mongoose.Schema({
		text:{
			type:String,
			required: true
		},
		user:{
			type:String,
			required:true
		},
		_post:{
			type:Schema.Types.ObjectId, ref:'Post',
			required: true
		}
	},{timestamps:true})

	mongoose.model('Comment', commentSchema);
};

