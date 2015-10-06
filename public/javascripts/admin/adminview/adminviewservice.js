(function(){
function adminviewserv($http){
	this.view=function(){
		return $http.get('http://localhost:3000/pizzaview');
	};
	this.delivery=function(postid){
    console.log("httpyil",postid);
	return $http({
          method  : 'POST',
          url     : 'http://localhost:3000/update',
          data    : postid, 
          headers : {'Content-Type': 'application/json'} 
         });
    };
}
 angular.module('admin')
       .service('adminviewserv',adminviewserv);
})();