/**
 * Created by Guillaume on 20/10/2015.
 */
var apikey = '9e6522a455b2e3f86d51c2689ee825ba';

app.factory('Characters', function ($resource) {
    return $resource('http://gateway.marvel.com:80/v1/public/characters?apikey=:apikey', {apikey: apikey});
});

app.factory('Comics', function ($resource) {
    return $resource('http://gateway.marvel.com:80/v1/public/comics?apikey=:apikey', {apikey: apikey});
});

app.factory('CharacterDetails', function ($resource) {
    return $resource('http://gateway.marvel.com:80/v1/public/characters/'+characterId+'?apikey=:apikey', {apikey: apikey});
});


