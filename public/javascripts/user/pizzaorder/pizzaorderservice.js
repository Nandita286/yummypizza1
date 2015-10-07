  (function(){
function pizzaorderservice($http,portlink){
     
      
      this.pizzaorder=function(postuser){
        
        return $http({
          method  : 'POST',
          url     : portlink+'/pizzaorder',
          data    : postuser, 
          headers : {'Content-Type': 'application/json'} 
         });
     };
      }
  angular.module('user')
  .service('pizzaorderservice',pizzaorderservice);
      })();
