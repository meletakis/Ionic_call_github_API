angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('GithubCtrl', function($scope,$http) {

  $scope.onchange = function(username){

    //alert(username);
    $http({method: 'GET', url: 'https://api.github.com/users/'+username+'?access_token=e1c73e40b21f13c5aaa6a0a91d50892835ff17d8'}).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.avatar_url = data.avatar_url;
          //alert($scope.username);
          //alert(data.avatar_url);
          $scope.show_image = true;
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.show_image = false;
        });


  }

});
