var app=angular.module("myApp" , []);

app.controller("myController" ,["$scope", "custdata" , "custservice" , "custFactory" , function($scope , custdata , custservice ,custFactory){
$scope.message="hiii"
$scope.view=custdata
$scope.display=custservice.getCustData()
$scope.result=custFactory
}])