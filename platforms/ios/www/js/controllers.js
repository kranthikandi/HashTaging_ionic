angular.module('app.controllers', [])
     
.controller('HomeCtrl', function($scope) {

})
   
.controller('cartTabDefaultPageCtrl',['$scope','$cordovaOauth', '$ionicLoading','$state',  function($scope,$cordovaOauth, $ionicLoading, $state) {
	  $scope.twitterlogin = function(){
    var api_key = "gNJTOGra4VEurFBc2UEc85QDk"; //Enter your Consumer Key (API Key)
    var api_secret = "k3NetUEfzFX9Ax0eVvRHPE0k5yTKMkhqCbWKXJEPh200eSwzhh"; // Enter your Consumer Secret (API Secret)
    console.log("twitterlogin function got called");
    $ionicLoading.show({template: 'Loading...'});
    $cordovaOauth.twitter(api_key, api_secret).then(function(result) {
      console.log(result);
      $ionicLoading.hide();
    })
    $state.go('tabsController.home');
  }
  

}])
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})
.controller('loginCtrl',['$scope','$cordovaOauth', '$ionicLoading','$state',  function($scope,$cordovaOauth, $ionicLoading, $state) {
	  $scope.twitterlogin = function(){
    var api_key = "gNJTOGra4VEurFBc2UEc85QDk"; //Enter your Consumer Key (API Key)
    var api_secret = "k3NetUEfzFX9Ax0eVvRHPE0k5yTKMkhqCbWKXJEPh200eSwzhh"; // Enter your Consumer Secret (API Secret)
    console.log("twitterlogin function got called");
    $ionicLoading.show({template: 'Loading...'});
    $cordovaOauth.twitter(api_key, api_secret).then(function(result) {
      console.log(result);
      $ionicLoading.hide();
    })
    $state.go('tabsController.home');
  }
  

}])
    