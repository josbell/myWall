app.factory('userFactory',['$http', function($http){
	var users = [],
		factory = {};

	factory.create = function(newuser, callback){
		console.log('Factory Register: Data from controller', newuser)
		$http.post('/users/new', newuser).then(function(returned_data){
			console.log(returned_data);
			callback(returned_data.data);
		})
	};

	factory.validateCredentials = function(userData, callback){
		$http.post('/users/validate', userData).then(function(returned_data){
			console.log(returned_data);
			callback(returned_data.data);
		})
	}

	return factory;
}])