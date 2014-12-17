/**
 * Created by Surendra on 12/17/2014.
 */
app.service('customersService', function ($http) {

    var that=this;
    that.APP_HEADERS={
        'X-Parse-Application-Id':'fKKL6D9Fgw0LxF8dRthUbOC0TcAdZVaZOisaPkkt',
        'X-Parse-REST-API-Key':'3M2oXrVPGaQsxZTCCDFpwrRybg7yjCK5dwFJVwo5'
    };

    that.URL="https://api.parse.com/1/classes/";


    this.getCustomers = function () {
        return customers;
    };
    this.insertNewUser = function (reqData,successCB,failureCB) {
        $http({ method : 'POST',
            data:reqData,
            url : that.URL+'UserManagement',
            headers:that.APP_HEADERS
        })
            .success(function(data, status) {
                successCB(data);
            })
            .error(function(data, status) {
                failureCB(data);
            })

    };
    this.deleteCustomer = function (id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.loginUser  = function (name, password) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].userName === name  && customers[i].password == password) {
                return  true;
            }
            return false;
        }
    };

    var customers = [
        {
            id: 1, firstName: 'Surendra', lastName: 'Rathore', address: '1234 Anywhere.', city: 'Churu',
            userName:'Surendra', password:'12345' },
        {
            id: 2, firstName: 'Bhupsa', lastName: 'Rathore', address: 'cmnsc', city: 'Jaipur', userName:'bhupsa',
            password:'ndjs'}

    ];

});