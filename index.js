// typeof
function show(x) {
    console.log(typeof x);
    if (typeof x === 'number') {
        console.log("a number " + x);
    }
    else {
        console.log("a string " + x);
    }
}
// show("test string");
// show(4);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
// console.log(typeof person);
// console.log(typeof new String("test"));
// console.log(typeof undefined);
// console.log(typeof null);
// 属性
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log('car starting');
    };
    Car.prototype.drive = function () {
        console.log('car driving');
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log('bike starting');
    };
    Bike.prototype.ride = function () {
        console.log('bike ridding');
    };
    return Bike;
}());
// boolean 返回值发挥的作用是在运行时
// vehicle is Car 发挥在编译时期
function isCar(vehicle) {
    return vehicle.drive !== undefined;
}
function move(vehicle) {
    vehicle.start();
    // console.log(vehicle.drive);
    // vehicle.drive !== undefined
    // if((vehicle as Car).drive) {
    // 	(vehicle as Car).drive();
    // } else {
    // 	(vehicle as Bike).ride();
    // }
    // if(isCar(vehicle)) {
    // 	vehicle.drive();
    // } else {
    // 	vehicle.ride();
    // }
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
}
move(new Car());
