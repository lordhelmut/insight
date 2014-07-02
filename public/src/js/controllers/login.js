'use strict';

angular.module('insight.login').controller('LoginController',
function($scope, $modal, Address){

	$scope.name =  'Login';

  	$scope.open = function (size) {
    	  var modalInstance = $modal.open({
      	   templateUrl: 'resetpasswd.html',
           controller: ModalInstanceCtrl,
           size: size,
      	   resolve: {
        	items: function () {
          	return $scope.items;
        	}
      	   }
    	  });
		/*
    	  modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
		    })
		*/
			//, function () { console.log('Modal dismissed at: ' + new Date()); });
         };


	$scope.master = {};
	$scope.wasSubmitted = false;

	$scope.update = function(login) {
	  $scope.master = angular.copy(login);
	  var checklogin = $scope.login;

	  if (!checklogin.username || !checklogin.password) {
		console.log('Need username and password');
	  }
	
	  //copy over app from 172.17.254.107
	  //check username/password 

		
		//where the magic happens
		
		$scope.wasSubmitted = true;
		
	};

	$scope.reset = function() {
	  $scope.login = angular.copy($scope.master);
	};

	$scope.isUnchanged = function(login) {
    	  return angular.equals(login, $scope.master);
	};

	$scope.reset();
	});

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
	$scope.items = items;
	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};
};
