
var app=angular.module("spy",[]).controller('MainController',function($scope,$http){
	$scope.search=function(email){
		
		$http.get('https://api.fullcontact.com/v2/person.json?email='+email+'&apiKey=64cd8f6f01b184c0').then(onUserComplete,onError);
  $scope.show=true;
	};
	var onUserComplete=function(response){
	$scope.user=response.data;
    $scope.err="";
    $scope.userPics=$scope.user.photos;
    $scope.pro=$scope.user.socialProfiles;
    $scope.name=$scope.user.contactInfo;
  };
 
  var onError=function(reason){
    $scope.err="Some error";
  };
  $scope.resetForm = function ()
    {
      $scope.show=false;
      $scope.email="";
    };
  
});
