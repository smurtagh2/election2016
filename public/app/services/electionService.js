angular.module('electionService', [])

.factory('Election', function($http){

	var electionFactory = {};

	electionFactory.storyful = function() {
		return $http.get('irish-elections.storyful.com/candidates.json');
	}

	return electionFactory;
})