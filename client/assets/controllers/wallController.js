app.controller('wallController', ['$scope','$cookies','$location','postFactory', function($scope, $cookies, $location,postFactory){
	$scope.posts = [];
	$scope.post = {};
	$scope.newComment = {};
	$scope.user = $cookies.get('user');

	if(!$scope.user){
		$location.url('/');
	}

	var index = function(){
		postFactory.index(function(returned_data){
			$scope.posts = returned_data;
		})
	};
	index();
	$scope.addPost = function(){
		
		$scope.newPost.user = $scope.user;
		postFactory.create($scope.newPost,function(returned_data){
			console.log(returned_data);
			$scope.newPost = null;
			index();
		})
	}
	$scope.addComment = function(post){
		console.log(post);
		post.newComment.user = $scope.user;
		postFactory.addComment(post, function(returned_data){
			console.log(returned_data);
			post.newComment = null;
			index();
		})

	}
	$scope.deletePost = function(post){
		console.log(post);
		postFactory.delete(post, function(returned_data){
			console.log(returned_data);
			index();
		})
	}

	$scope.deleteComment = function(data){
		console.log(data);
		postFactory.deleteComment(data, function(returned_data){
			console.log(returned_data);
			index();
		})
	}

	$scope.logout = function(){
		$cookies.remove('user');
		$location.url('/');
	}
}])