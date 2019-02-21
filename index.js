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
function move(vehicle) {
    vehicle.start();
    console.log(vehicle.drive);
    // vehicle.drive !== undefined
    if (vehicle.drive) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
}
move(new Car());
