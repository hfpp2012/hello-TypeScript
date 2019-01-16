var sayName = function (o) {
    o.greet();
};
// 实现接口，微信支付，支付宝支付
// 类实现接口
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.greet = function () {
        console.log('I am employee');
    };
    return Employee;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greet = function () {
        console.log('I am customer');
    };
    return Customer;
}());
// let cu = new Customer();
// cu.greet();
// sayName(cu);
// let em = new Employee();
// em.greet();
// sayName(em);
var customer = new Customer();
customer.greet();
var employee = new Employee();
employee.greet();
