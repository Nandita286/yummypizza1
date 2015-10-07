(function(){
function adminviewserv($http,portlink){
	this.view=function(){
		return $http.get(portlink+'/pizzaview');
	};
	this.delivery=function(postid){
    console.log("httpyil",postid);
	return $http({
          method  : 'POST',
          url     : portlink+'/update',
          data    : postid, 
          headers : {'Content-Type': 'application/json'} 
         });
    };
}
 angular.module('admin')
       .service('adminviewserv',adminviewserv);
})();