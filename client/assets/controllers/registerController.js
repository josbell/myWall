app.controller('registerController', ['$scope', 'userFactory','$location','$cookies', function($scope, userFactory, $location, $cookies){
	$scope.user = {};

	$scope.register = function(){
		if(!$scope.registerForm.$valid) {
       return;
     	}
     	
     	$scope.user.username = $scope.user.username.toLowerCase();
     	$scope.user.email = $scope.user.username.toLowerCase();

		console.log('registerController register: User Input Data', $scope.user);
		userFactory.create($scope.user, function(data){
			console.log('RegisterController Register: Returned Data',data);
			$cookies.put('user', data.username);
			$location.url('/wall');
		})
	};

}])