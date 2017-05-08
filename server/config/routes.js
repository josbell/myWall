console.log('router file loaded')
users = require('../controllers/users.js');
posts = require('../controllers/posts.js');

module.exports = function(app){
	// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
	app.get('/posts', function(req, res){
		posts.index(req, res);
	});

	app.post('/users/new', function(req, res){
		console.log('users/new router reached');
		users.create(req, res);
	});

	app.post('/users/validate', function(req, res){
		console.log('users/validate router reached');
		users.validateCredentials(req, res);
	});

	app.post('/posts/new', function(req, res){
		console.log('post/new router reached');
		posts.create(req, res);
	})

	app.put('/posts/comment/new', function(req, res){
		posts.addComment(req, res);
	})

	app.delete('/posts/:id', function(req, res){
		console.log('delete posts router reached');
		posts.delete(req, res);
	})

	app.put('/posts/:postId/comment/:commentId', function(req, res){
		console.log('delete comments router reached');
		posts.deleteComment(req, res);
	})
}