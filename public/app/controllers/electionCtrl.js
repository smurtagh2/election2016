angular.module('electionCtrl', ['electionService', 'ngSanitize'])

.controller('electionController', function(Election){

	var self = this;

	Election.storyful()

  		.success(function(data) {
    	self.storyful = data;
  	})
})