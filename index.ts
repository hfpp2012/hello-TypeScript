// 1

function foo(x: number, y: number, z: number) { 
	console.log(x, y, z);
}
var args: number[] = [0, 1, 2];

// foo.apply(null, args);
// foo.apply(void 0, args);

(<any>foo)(...args);

// 2

function foo1(...x: number[]) { 
	console.log(JSON.stringify(x));
}

foo1(...args);
foo1(1, 2, 3);

// 3
function foo2(...args: number[]): void;
function foo2(x: number, y: number, z: number) { 
	console.log(x, y, z);
}

foo2(...args);

foo2(1, 2, 3);

// Destructuring

var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining);

// Array Assignment

var list = [1, 2];
list = [...list, 3, 4];
console.log(list);

// Object spread

const point2D = {x: 1, y: 2};
const point3D = {...point2D, z: 3};
console.log(point3D);

const anotherPoint3D = {x: 5, z: 4, ...point2D};
console.log(anotherPoint3D);

const yetAnotherPoint3D = {...point2D, x: 5, z: 4}
console.log(yetAnotherPoint3D);

const foo4 = {a: 1, b: 2, c: 0};
const bar = {c: 1, d: 2};

const fooBar = {...foo4, ...bar};
console.log(fooBar);

//

class List<T> {
	private data: T[];

	constructor(...elements: T[]) {
			this.data = elements;
	}

	add(t: T) {
			this.data.push(t);
	}

	remove(t: T) {
			let index = this.data.indexOf(t);
			if (index > -1) {
					this.data.splice(index, 1);
			}
	}

	asArray(): T[] {
			return this.data;
	}
}

let numbers = new List<number>(1, 2, 3, 4);
numbers.add(5);
numbers.remove(3);
let numArray = numbers.asArray();
console.log(numArray);

let fruits = new List<string>('apple', 'banana', 'orange');
fruits.add('mango');
fruits.remove('apple');
let fruitArray = fruits.asArray();
console.log(fruitArray);