var app = angular.module('app', ['ngRoute', 'ngCookies','ngPassword']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/login.html',
			controller: 'loginController'
		})
		.when('/register',{
			templateUrl: 'partials/register.html',
			controller: 'registerController'
		})
		.when('/wall',{
			templateUrl: 'partials/wall.html',
			controller: 'wallController'
		})
		.otherwise({
			redirectTo: '/'
		});

});