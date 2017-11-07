


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.info = [
        {id:1, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:2, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:3, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
    ];
      $scope.showData = function(id) {
        $scope.data={ name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"};
        $("#showData1").modal("show");
      }
});