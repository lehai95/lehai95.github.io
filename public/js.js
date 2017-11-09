


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    /* data list */
    $scope.info = [
        {id:1, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:2, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:3, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:4, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:5, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
    ];
    /* add info */
     $scope.showAdd = function(id) {
       $scope.data1 = { name: "type your name", email: "type your email", contact: "type your contact number", position: "type your position"};
        $("#addNew").modal("show");
      };
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
  /* Save change */
$scope.reload = function(id)
{
   location.reload(); 
};
  /* confirm pop up */
   $scope.showConfirm = function(id) {
   $("#deleteConfirm").modal("show");  
  };
  /* Delete after confirm */
$scope.reload1 = function(id)
{
   location.reload(); 
};

});

