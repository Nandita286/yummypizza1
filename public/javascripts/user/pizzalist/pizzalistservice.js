(function(){
	
       function pizzaserv($http){
       
        this.getpizza=function(){
        return $http.get('http://localhost:3000/pizza');
    };
       }
       angular.module('user')
       .service('pizzaserv', pizzaserv);

       })();