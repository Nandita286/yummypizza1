(function(){
  function pizzadescserv(){
    var plist = [];
    var total=0;
      this.p1 = function(user) {    
        plist.push(user);
        total=total+user.cost;
      };
      this.p2=function(){
       console.log("p2");
        return plist;
      };
      this.p3=function(){
        return total;
      };
      this.p4=function(){
        plist=[];
      };
    }
    angular.module('user')
           .service('pizzadescserv', pizzadescserv);
})();