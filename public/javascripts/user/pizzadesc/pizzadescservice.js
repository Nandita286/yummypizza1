(function(){
  function pizzadescserv(){
    var plist = [];
    var total=0;
      this.p1 = function(user) {    
        plist.push(user);
        total=total+user.cost;
      };
      this.p2=function(){
        return plist;
      };
      this.p3=function(){
        return total;
      };
    }
    angular.module('user')
           .service('pizzadescserv', pizzadescserv);
})();