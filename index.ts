class List<T> {
	private data: T[];

	constructor(elements: T[]) {
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

let numbers = new List<number>([1, 2, 3, 4]);
numbers.add(5);
numbers.remove(3);
let numArray = numbers.asArray();
console.log(numArray);

let fruits = new List<string>(['apple', 'banana', 'orange']);
fruits.add('mango');
fruits.remove('apple');
let fruitArray = fruits.asArray();
console.log(fruitArray);

class Pair<F, S> {
	private _first: F;
	private _second: S;

	constructor(first: F, second: S) {
		this._first = first;
		this._second = second;
	}

	get first(): F {
		return this._first;
	}

	get second(): S {
		return this._second;
	}
}

let pair = new Pair<boolean, string>(true, "111");
console.log(pair.first);
console.log(pair.second);