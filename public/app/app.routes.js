angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider

	.when('/', {
		templateUrl : 'app/views/homepage.html',
		controller: 'electionController as election'
	})

	// get rid of the hash in the URL
	$locationProvider.html5Mode(true);
	
});