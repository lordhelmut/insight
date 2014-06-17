'use strict';

angular.module('insight.paymentrequest').controller('PaymentRequestGenerator',
function($scope, Address){

	$scope.name =  'Payment Request';

	$scope.master = {};
	$scope.wasSubmitted = false;

	$scope.update = function(pr) {
	  $scope.master = angular.copy(pr);
	  var paymentrequest = $scope.pr;
	  console.log(paymentrequest.Addr);
	  //console.log('Address is: ' + $scope.pr.Addr);
	  //alert('Address is: ' + $scope.pr.Addr);
	  var now = new Date(); //used for Payment request 
	  console.log(now);
	  if(paymentrequest.PR){
		//timez (& et al) deliberatly spelled wrong to avoid clashes with real constructors
		function addMinz(timez){
			return now.setMinutes(now.getMinutes()+timez);	
		};
	
		function generateURL(){
			//TODO:generate a unique secret(?) id for each request
			//TODO:bitcoin URI is bitcoin:?r=http://whatever.com/getpaid.html?uniqueID
			//TODO: set the ACK message URL

			if(paymentrequest.Signed != 'noCert' ){
			//TODO:Get the cert, and sign the request
			//TODO:Get openssl certs to sign request
				alert('Its signed!');
			}
			else{
				alert('not signed');
			};

		};

		switch (paymentrequest.Exp){
		case '5min':
			var exptime = addMinz(5);
			break;
		case '15min':
			var exptime = addMinz(15);
			break;
		case '30min':
			var exptime = addMinz(30);
			break;
		case 'never':
			var exptime = addMinz(3000000);
			break;
		default: var exptime = now;
		};
		
		console.log('Exptime is: ' + exptime + '.');
		
		//where the magic happens
		generateURL();
		
		$scope.wasSubmitted = true;
		
	    }; //if paymentrequest.pr
	};

	$scope.reset = function() {
	  $scope.pr = angular.copy($scope.master);
	};

	$scope.isUnchanged = function(pr) {
    	  return angular.equals(pr, $scope.master);
	};

	$scope.reset();
	});

