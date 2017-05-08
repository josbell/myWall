var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = {

	index: function(req, res){
		console.log('Post Controller index');
		Post.find({}).sort('-created_at').exec(function(err, posts){
			res.json(posts);
		});
	},

	create: function(req,res){
		console.log('Post Controller Create: Data from Factory',req.body);
		var newPost = new Post(req.body);
		newPost.save(function(err, post){
			if(err){console.log('Something went wrong when creating post', err)}
			res.json(post);
		});
	},

	delete: function(req, res){
		console.log('Post Controller Delete: Data from Factory',req.params.id);
		Post.remove({_id:req.params.id}, function(err){
			if(err){console.log('Something went wrong when deleting post', err)}
			res.json();
		});
	},

	addComment: function(req, res){
		console.log('Post Controller addComment: Data from Factory', req.body);
		var postId = req.body._id;
		var newComment = {text:req.body.newComment.text, user: req.body.newComment.user, createdAt:Date.now()}
		console.log(postId, newComment);
		Post.findOne({_id:postId}, function(err, post){
			if(err){console.log('Something went wrong finding post to update with new comment', err)};
			post.comments.push(newComment);
			post.save(function(err,post){
				if(err){console.log('Something went wrong when saving new comment in post', err)};
				res.json(post);
			})
			
		})
	},

	deleteComment: function(req, res){
		console.log('Post Controller deleteComment: Data from Factory', req.params.postId, req.params.commentId);
		var commentId = req.params.commentId;
		Post.update({'comments._id':commentId},{$pull:{'comments':{'_id':commentId}}}, function(err, data){
			if(err){console.log('Something went wrong finding post to delete comment', err)};
			console.log('Comment Query Result:',data);
			res.json();
		})
		
	}

}