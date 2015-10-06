(function(){
	angular.module('admin', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('admin').config(function($routeProvider) {

    $routeProvider.when('/login',{templateUrl: 'admin/adminview/adminview.html',controller:'loginCtrl',
            controllerAs:'lctrl'});
    /* Add New Routes Above */

});
})();