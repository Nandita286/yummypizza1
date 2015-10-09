(function(){
        function pizzaorderCtrl(pizzadescserv,$location){
          var vm=this;
          vm.details = pizzadescserv.p2();
          console.log(vm.details);
          vm.total=pizzadescserv.p3();
          vm.showmessage=false;
          if(vm.details.length === 0){
            vm.showmessage=true;
            // window.alert("Your Cart is empty");
            // $location.path('/');
          }

          else{
          console.log(vm.details);
        }
      }
       angular.module('user')
       .controller('pizzaorderCtrl', pizzaorderCtrl);

    })();