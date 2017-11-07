


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    /* data list */
    $scope.info = [
        {id:1, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:2, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:3, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
    ];
    /* detail form */
      $scope.showData = function(id) {
        $scope.data={ name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"};
        $("#showData1").modal("show");
      };
      /* edit button */
      $scope.showEdit = function(id) {
        $scope.edit = { name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"};
   $("#showEdit1").modal("show");  
  };
  /* confirm pop up */
   $scope.showConfirm = function(id) {
   $("#deleteConfirm").modal("show");  
  };
  /* Delete after confirm */
  
});

