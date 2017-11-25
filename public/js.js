


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    /* data list */
    /*$scope.info = [
        {id:1, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:2, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:3, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:4, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
        {id:5, name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"},
    ];*/
    $http({
method: "GET",
url: 'http://192.168.1.30:8080/angulara/public/api/v1/employees?page=1'
    }).then(function successCallback(response){
$scope.employeesList = response.data;

});

    /* add info */
     $scope.addNew = function(id) {
         $http({
             method: 'POST',
             url: 'http://192.168.1.30:8080/angulara/public/api/v1/employees?page=1' + id,
         }).then(function myAdd() {
            location.reload()
         });
     }
    /* detail form */
     $scope.showData = function(id) {
        $scope.data2={ name: "anh", email: "abc123@xyz", contact: "0123456789", position: "abc street"};
        $("#showData1").modal("show");
      }; 
      /*$http({
method: "POST",
url: 'http://192.168.56.1:8080/angulara/public/api/v1/employees?page=1'
data: 'name' : $scope.name; 'email' : $scope.email; 'contact' : $scope.contact; 'position' : $scope.postion;
    }).then(function successCallback(response){
$scope.data2 = response.data;

});
      /* edit button */
      $scope.showEdit1 = function(id) {
        $http({
            method: 'POST',
            url: 'http://192.168.1.30:8080/angulara/public/api/v1/employees?page=1' + id,
        }).then(function myEdit(response) {
            $scope.edit = response.data;
        });
      };
      $scope.data1 = function (id) {
          $http({
              method: 'POST',
              url: 'http://192.168.1.30:8080/angulara/public/api/v1/employees/' + id,
          }).then(function myPost(response){
        location.reload();

        });
      }   
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
/* Pagination */
$scope.pagi = function(id) {
    $http({
        
    })
}

