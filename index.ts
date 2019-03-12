function createInstance<T>(t: new () => T): T {
	return new t();
}

class Test {
	x: number = 4;
	// constructor(x: number) {

	// }
}

// let test: Test = new Test();
let test: Test = createInstance<Test>(Test);
console.log(test);

function createInstance2<T>(t: new(...constructorArgs: any[]) => T, ...args: any[]): T {
	return new t(args);
}

class Test2 {
	private x: number;

  constructor(x: number) {
	  this.x = x;
  }
}

function createInstance3<R, T extends { new(...constructorArgs: any[]): R }>(constructor: T, ...args: any[]): R {
	return new constructor(args);
}

class Test3 {
	private x: number;

	constructor(x: number) {
		this.x = x;
	}

}

let test3: Test3 = createInstance3(Test3, 6);
console.log(test3);

// new Test2(3);

let test2: Test2 = createInstance2(Test2, 3, 5);
console.log(test2);