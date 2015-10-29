/**
 * Created by Guillaume on 29/10/2015.
 */
app.controller('SearchController', ['$scope','Characters','Comics', '$routeParams', function($scope, Characters,Comics, $routeParams) {

    var charactersParams = {
        name:$routeParams.searchWord
    };

    Characters.get(charactersParams,function(data){
        $scope.characters = data.data.results;
    });

    var comicsParams = {
        titleStartsWith:$routeParams.searchWord
    };

    Comics.get(comicsParams, function (data){
        $scope.comics = data.data.results;
    });


}]);