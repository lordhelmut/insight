'use strict';

angular.module('insight.paymentrequest').controller('PaymentRequestGenerator',
function($scope){
	$scope.name =  'PaymentRequest';

	//var shit = new Address("n24X8LKTVLmGSGZoTcsm3muqgRXyyE51vq");
	//console.log(shit.isValid());

	$scope.master = {};

	$scope.update = function(pr) {
	  $scope.master = angular.copy(pr);
	  //console.log($scope.pr);
	  //var stuff = $scope.pr;
	  //console.log(stuff.Addr);
	  console.log($scope.pr.Addr);
	  //var shit = $scope.pr.Addr;
	};

	$scope.reset = function() {
	  $scope.pr = angular.copy($scope.master);
	};

	$scope.isUnchanged = function(pr) {
    	  return angular.equals(pr, $scope.master);
	};

	$scope.reset();
	});

