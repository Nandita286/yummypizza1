(function(){
         function placeorderCtrl(pizzaorderservice, pizzadescserv, $location,$log){
            var vm=this;
           
            vm.mytime = new Date();
            
            vm.ismeridian = true;
           vm.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };
            vm.message=function(){
            window.alert("Thankyou,your order has been placed!Push your hunger away with YUMMY PIZZA!");
            $location.path('/');
    
            vm.postdata=pizzadescserv.p2();
            vm.user.order=vm.postdata;
            vm.user.deliverystatus=true;

            pizzaorderservice.pizzaorder(vm.user).success(function(data) {
                              pizzadescserv.p4();

          
              if (data.errors) {
               vm.errorName = data.errors.name;
               vm.errorUserName = data.errors.username;
                vm.errorEmail = data.errors.email;
              } else {
                vm.message = data.message;
              }
          });
      };
    }
    angular.module('user')
        .controller('placeorderCtrl',placeorderCtrl);
    })();