function sayHi(): void {
	console.log('Hi');
}

let a: void = sayHi();
console.log(a);

function loopForever(): never {
	// 无限循环
	while (true) {

	}
}

function terminateWithError($msg: string): never {
	throw new Error($msg);
}