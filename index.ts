// typeof
function show(x: number | string): void {
	console.log(typeof x);
	if (typeof x === 'number') {
		console.log("a number " + x);
	} else {
		console.log("a string " + x);
	}
}

// show("test string");
// show(4);

class Person {}

let person = new Person();
// console.log(typeof person);
// console.log(typeof new String("test"));
// console.log(typeof undefined);
// console.log(typeof null);


// 属性
class Car {
	start() {
		console.log('car starting');
	}

	drive() {
		console.log('car driving');
	}
}

class Bike {
	start() {
		console.log('bike starting');
	}

	ride() {
		console.log('bike ridding');
	}
}


// boolean 返回值发挥的作用是在运行时
// vehicle is Car 发挥在编译时期
function isCar(vehicle: Bike | Car): vehicle is Car {
	return (vehicle as Car).drive !== undefined;
}

function move(vehicle: Bike | Car): void {
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

	if(vehicle instanceof Car) {
		vehicle.drive();
	} else {
		vehicle.ride();
	}
}

move(new Car());

