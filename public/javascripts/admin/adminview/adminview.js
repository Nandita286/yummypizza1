(function(){
       function loginCtrl(adminviewserv){
          var vm=this;
          vm.max = 200;
          vm.count=0;
          vm.pending=100;
          vm.processing=0;

  vm.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    vm.showWarning = (type === 'danger' || type === 'warning');

    vm.dynamic = value;
   vm.type = type;
  };
 vm.random();

  vm.randomStacked = function() {
    vm.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        vm.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
    }
  };
  vm.randomStacked();
          adminviewserv.view().success(function (data){
          if(data === 'nothing'){
            vm.details={};
            window.alert("No more orders to be delivered!");
          }
            
          else{
            vm.details=data;
            console.log("length",vm.details.length);
            vm.dlength=vm.details.length;
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
         vm.count=vm.count+(100/vm.dlength);
         vm.pending=vm.pending-(100/vm.dlength);
         vm.processing=vm.processing+(100/vm.dlength);
       
    };
    vm.deliverycount=function()
    {
      
      return vm.count;
    };
    vm.pendingcount=function()
    {
      return vm.pending;
    };
    vm.processingcount=function(){
      return vm.processing;
    };
  }      
  angular.module('admin')
         .controller('loginCtrl', loginCtrl);
})();