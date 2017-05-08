app.factory('postFactory',['$http', function($http){
	var posts=[],
		factory = {};

	factory.index = function(callback){
		$http.get('/posts').then(function(returned_data){
			console.log('postFactory index: returned_data', returned_data);
			callback(returned_data.data);
		})
	};
	factory.create = function(post, callback){
		console.log('postFactory create: input data', post);
		$http.post('/posts/new', post).then(function(returned_data){
			console.log('postFactory create: returned_data', returned_data)
			callback(returned_data.data);
		})
	}
	factory.delete = function(post, callback){
		console.log('postFactory delete: input data', post);
		$http.delete('/posts/'+post._id).then(function(returned_data){
			console.log('postFactory delete: returned_data', returned_data);
			callback(returned_data.data);
		})
	}
	factory.addComment = function(post, callback){
		console.log('postFactory addComment: input data', post);
		$http.put('/posts/comment/new', post).then(function(returned_data){
			console.log('postFactory addComment: returned_data', returned_data);
			callback(returned_data.data);
		})
	}
	factory.deleteComment = function(data, callback){
		console.log('postFactory deleteComment: input data', data);
		$http.put('/posts/'+data.postId+'/comment/'+data.commentId).then(function(returned_data){
			console.log('postFactory deleteComment: returned_data', returned_data);
			callback(returned_data.data);
		})
		
	}


	return factory;

}]);