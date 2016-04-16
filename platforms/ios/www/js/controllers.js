angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
    $scope.getData = function(){
  var url = "https://search-proxy.spredfast.com/search.json?q=junglebook&filter.start=-1d&filter.finish=0&view.entities.limit=500";
  $http.get(url).success(function(data){
    var data = data.views.entities.data;
    $scope.datas = [];
    var listdata = [];
    var media = [];
    for (var i = 0; i < data.length; i++) {
      listdata.push({
        tweet : data[i].raw.text,
        imgUrl : data[i].raw.user.profile_image_url,
        });
         media.push = data[i].raw.extended_entities
    }
    $scope.datas = listdata;
    $scope.media = media;
    console.log(data);
    console.log($scope.media);

       
       //$scope.profileImgUrl = $scope.datas.raw.user.profile_image_url;
      
  });
}
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
