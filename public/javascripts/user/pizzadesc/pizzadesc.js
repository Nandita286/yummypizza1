(function(){
function pizzaDetailsCtrl($routeParams, $http,pizzaserv,pizzadescserv,$log){
        var vm=this;
        vm.user={};
        vm.user.flag1=false;
        vm.name = $routeParams.pizzaName;
        vm.details=pizzaserv.getpizza();
        vm.details.success(function (data) {
         vm.pizza = data.filter(function (entry){
             return entry.name === vm.name;
            })[0];
            
            // var user={};

          vm.enter=function(){
            console.log("qty = ",vm.user.qty);
            if(vm.user.qty === undefined||vm.user.qty === ""){
              vm.user.flag1=false;

            }else
            {     
              vm.user.flag1=true;

            }
          };
          vm.order=function(){
            vm.user.pname=vm.pizza.name;
            vm.user.rate=vm.pizza.rate;
            vm.user.pic=vm.pizza.image;
            // user.qty=vm.user.qty;
            vm.user.cost=vm.user.rate*vm.user.qty;
            console.log("pizzaeduthu",vm.user);
            pizzadescserv.p1(vm.user);
          };
        });
      }
       angular.module('user')
       .controller('pizzaDetailsCtrl',pizzaDetailsCtrl);
       })();