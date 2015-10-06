(function(){
       function loginCtrl(adminviewserv){
          var vm=this;
          adminviewserv.view().success(function (data){
          if(data === 'nothing'){
            vm.details={};
            window.alert("No more orders to be delivered!");
          }
            
          else{
            vm.details=data;
          }
        });
          vm.delivered=function(id){
            console.log("id",id);
            vm.postcontact={};
            vm.postcontact.pizzaid=id;
            vm.d=adminviewserv.delivery(vm.postcontact);
            vm.d.success(function(data) {
            window.alert("successfully delivered");
            if (data.errors){
              vm.errorName = data.errors.name;
              vm.errorUserName = data.errors.username;
              vm.errorEmail = data.errors.email;
            } 
          });

         adminviewserv.view().success(function (data) {
            if(data === 'nothing'){
              vm.details={};
              window.alert("No more orders to be delivered!");
            }
            else{
            vm.details=data;
        }
      }); 
    };
  }      
  angular.module('admin')
         .controller('loginCtrl', loginCtrl);
})();