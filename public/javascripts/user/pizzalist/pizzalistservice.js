(function(){
	
       function pizzaserv($http,portlink){
       
        this.getpizza=function(){
        return $http.get(portlink+'/pizza');
    };
       }
       angular.module('user')
       .service('pizzaserv', pizzaserv);

       })();