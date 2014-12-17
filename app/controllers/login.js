app.controller('LoginController', function ($scope, usersService) {
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertUser = function () {
  /*      $scope.reqData={};
        $scope.reqData.firstName = $scope.firstName;
        $scope.reqData.lastName  = $scope.lastName;
        $scope.reqData.useName=$scope.useName;
        $scope.reqData.password=$scope.password;
        $scope.reqData.city=$scope.city;
      customersService.insertNewUser($scope.reqData,successCB=function(data){


          },
          failureCB=function(data){
              alert(data);
          })      //code
    }*/
}



        $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };

    $scope.authUser = function ()
    {
        $scope.useName = "";
        $scope.password = "";

        if($scope.isValidate())
        {
            var  useName = $scope.useName;
            var  password = $scope.password;


        }


    };

        $scope.isValidate = function ()
        {
            if($scope.userName.trim() == "" || userName ==undefined )
            {
                var validateMessage  = "Please enter User Name ";
                return false;
            }
            if($scope.password.trim() == "" || password ==undefined)
            {
                var validateMessage = "Please Enter Password";
                return false;
            }
            return true;
        };
});

//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the order view
//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the orders view

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a customer. Put it here rather than duplicating
//setOrder and orderby across multiple controllers.
