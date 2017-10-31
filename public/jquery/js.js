/*var app = angular.module('myApp', []);

app.service('', function() {
    this.myFunc = function () {
        return name = ;
    }
});
app.controller('myCtrl', function($scope, ) {
  $scope.ex = ;
  $scope.lastname = Trinh;
  $scope.numb = 
});*/
var app = angular.module('myapp1',[]);
    app.controller('cntryController',function ($scope) {
//data for ng-repeat
    $scope.names=[{'drname':'Dr.Test1'},{'drname':'Dr.Test2'},{'drname':'Dr.Test3'}]
    $scope.LoadSessionData = function(val) {
//console log
        console.log(val);
    }
});