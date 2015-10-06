  (function(){
function pizzaorderservice($http){
     
      
      this.pizzaorder=function(postuser){
        
        return $http({
          method  : 'POST',
          url     : 'http://localhost:3000/pizzaorder',
          data    : postuser, 
          headers : {'Content-Type': 'application/json'} 
         });
     };
      }
  angular.module('user')
  .service('pizzaorderservice',pizzaorderservice);
      })();
