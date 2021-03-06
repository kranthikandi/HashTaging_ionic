angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
    $scope.getData = function(){
  var url = "https://search-proxy.spredfast.com/search.json?q=junglebook&filter.start=-1d&filter.finish=0&view.entities.limit=500";
  $http.get(url).success(function(data){
        console.log(data);
    var data = data.views.entities.data;
    $scope.datas = [];
    $scope.mediaDatas = [];
    var listdata = [];
    var media = [];
    var mediaData = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].raw.extended_entities ) {
          var media = data[i].raw.extended_entities.media;
          var imgDiv = ""; 
          
          for (var j = 0; j < media.length; j++) {
           // imgDiv = imgDiv+""+media[j].media_url+"<br>";
console.log(media.length);
                      listdata.push({
              tweet : data[i].raw.text,
              imgUrl : data[i].raw.user.profile_image_url,
              mediaUrl : media[j].media_url
        });
                    }
      }else{
            listdata.push({
              tweet : data[i].raw.text,
              imgUrl : data[i].raw.user.profile_image_url,
            });
    }
  }
    $scope.datas = listdata;
    $scope.mediaDatas = mediaData;
    console.log($scope.datas);
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

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
  //  $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  // $scope.data = [
  //   [65, 59, 90, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 96, 27, 100]
  // ];
});
