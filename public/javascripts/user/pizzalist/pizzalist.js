(function(){
function pizzaCtrl(pizzaserv,$location){
        var vm=this;
        vm.details=pizzaserv.getpizza();
        vm.details.success(function(data){
        vm.details1=data;
    });

        vm.login=function(){
         if(vm.user ==='admin'&& vm.password ==='admin'){
            $location.path('login');
        }
         else{
            window.alert("login failed!Try again");
        }
    };
}
angular
.module('user')
.controller('pizzaCtrl', pizzaCtrl);
})();