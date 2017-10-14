var app=angular.module("myMovie",[]);
app.controller("controller",function($scope,$http){
    $scope.movieSearch=function(){
        if(typeof $scope.movieinput =='undefined' || $scope.movieinput=='' )
            {
                
            }
        else
            search();
    }
     function search(){
             $http.get( "http://www.omdbapi.com/?apikey=3070385b&t=" + $scope.movieinput).then(function(response){
                 $scope.movie=response.data;
         console.log(response.data);
             });
    }
})