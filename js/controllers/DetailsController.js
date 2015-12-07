/**
 * Created by Guillaume on 29/10/2015.
 */
app.controller('CharacterDetailsController', ['$scope','CharacterDetails', '$routeParams', function($scope, CharacterDetails, $routeParams) {


    var charactersParams = {
        characterId:$routeParams.characterId
    };

    CharacterDetails.get(charactersParams,function(data){
        $scope.characters = data.data.results;
    });

    
}]);