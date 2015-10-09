(function(){
         function placeorderCtrl(pizzaorderservice, pizzadescserv, $location,$log,$scope){
            var vm=this; 
            vm.mytime = new Date();
            vm.ismeridian = true;
           vm.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };        
            vm.showmessage=false;
            vm.message=function(){
            //window.alert("Thankyou,your order has been placed!Push your hunger away with YUMMY PIZZA!");
            vm.showmessage=true;
            //$location.path('/');
    
            vm.postdata=pizzadescserv.p2();
            vm.user.order=vm.postdata;
            vm.user.deliverystatus=true;
             pizzadescserv.p4();

            pizzaorderservice.pizzaorder(vm.user).success(function(data) {
                              // console.log("success");
           
          
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