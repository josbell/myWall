app.controller('loginController', ['$scope', 'userFactory','$cookies','$location', function($scope,userFactory, $cookies, $location){
	$scope.user = {};
	$scope.usernameEntered = '';

	
	$scope.submit = function(){
		console.log('loginController login:', $scope.user);
		$scope.user.username = $scope.user.username.toLowerCase();
		userFactory.validateCredentials($scope.user, function(returned_data){
			console.log(returned_data);
			if(returned_data.valid){
				$cookies.put('user', $scope.user.username);
				$location.url('/wall');
			}
			else{
				//Display message saying pwd/username invalid
				$scope.credentialsFailed = true;
			}
		});


	}
}])