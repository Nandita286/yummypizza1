(function(){angular.module('yummypizza', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'user', 'admin'])
                   .constant('portlink',"http://localhost:3000");
angular.module('yummypizza').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('yummypizza').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
})();