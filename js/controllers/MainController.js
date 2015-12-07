/**
 * Created by Guillaume on 10/09/2015.
 */
app.controller('MainController', ['$scope', '$location', function ($scope, $location) {

    //$location.path('/search');

    $scope.search = function (searchWord) {
        $location.path('/search/'+searchWord);
    };

}]);

app.controller('HomeController', ['$scope', 'Characters', function ($scope, Characters) {

    var charactersParams = {
        limit: 5
    };

    Characters.get(charactersParams, function (data) {
        $scope.characters = data.data.results;
    });

    $scope.search = function (searchWord) {
        console.log(searchWord);
    };


    $scope.tweets = [
        {
            content: 'Phasellus tincidunt eu tortor vitae sagittis. Nunc nec magna vitae enim commodo molestiecursus sit amet dolor. Integer vel purus urna. Sed pretium vulputate elementum. Namconvallis bibendum cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus pretium tincidunt erat non pharetra.',
            image: ''
        }
    ];
}]);


