'use strict';

angular.module('booksApp')
  .controller('UsersCtrl', function ($scope, $http, Auth) {
    var user = Auth.getCurrentUser()._id
    $http.get('api/users/' + user).then(function(data){
      console.log(data)
    }, function(e){
      console.log(e)
    })
  });
