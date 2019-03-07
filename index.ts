class Pair<F, S> {
	first: F;
	second: S;

	constructor(first: F, second: S) {
		this.first = first;
		this.second = second;
	}
}

// pairs 是个数组参数，数组中的每个元素是 Pair<F, S> 类型
function getFirstArray<F, S>(pairs: Pair<F, S>[]): F[] {
	let arr: F[] = [];
	for (let i = 0; i < pairs.length; i++) {
		let first: F = pairs[i].first;
		arr.push(first);
	}
	return arr;
}

let numArray: Pair<number, boolean>[] = [new Pair(1, true), new Pair(2, false), new Pair(4, true)];

console.log(getFirstArray(numArray));

// (t: T) => boolean
function findFirst<T>(items: T[], searchFunction: (t: T) => boolean): T {
	for (let i = 0; i < items.length; i++) {
		let item: T = items[i];
		if (searchFunction(item)) {
				return item;
		}
	}
	return null;
}

let items: number[] = [1, 4, 7, 9];

let n:number = findFirst(items, (t: number) => t % 2 === 0);
console.log(n);

let items2: string[] = ["one", "two", "three"];
let s: string = findFirst<string>(items2, (s: string) => s.indexOf("wo") != -1);
console.log(s);