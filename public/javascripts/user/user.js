(function(){

angular.module('user', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate','admin']);

angular.module('user').config(function($routeProvider) {

    $routeProvider.when('/',{templateUrl: 'user/pizzalist/pizzalist.html', controller:'pizzaCtrl',
            controllerAs:'pCtrl'});
    $routeProvider.when('/cart',{templateUrl: 'user/pizzacart/pizzacart.html', controller:'pizzaorderCtrl',
            controllerAs:'poCtrl'});
    $routeProvider.when('/placeorder',{templateUrl: 'user/pizzaorder/pizzaorder.html',controller:'placeorderCtrl',
            controllerAs:'plCtrl'});
    $routeProvider.when('/:pizzaName',{templateUrl: 'user/pizzadesc/pizzadesc.html',controller:'pizzaDetailsCtrl',
            controllerAs:'pdCtrl'
  });
    /* Add New Routes Above */

});

})();