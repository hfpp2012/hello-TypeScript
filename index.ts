interface Pair<F, S> {
	first: F;
	second: S;
}

let p: Pair<string, number> = { first: "rails365", second: 45 };
console.log(p);

interface Command<T, R> {
	id: T;
	// run 是个函数, 函数返回值为 R
	run(): R
}

let c: Command<string, number> = {
	id: Math.random().toString(36),
	run: function() {
		return 99;
	}
}

console.log(c.id);
console.log(c.run());

interface ElementChecker {
	// 函数
	<T>(items: T[], toBeChecked: T, atIndex: number): boolean
}

function checkElementAt<T>(elements: T[], toBeChecked: T, atIndex: number): boolean {
	return elements[atIndex] === toBeChecked;
}

// 函数
let checker: ElementChecker = checkElementAt;
let items = [1, 3, 5, 7];
let b: boolean = checker<number>(items, 5, 2);
console.log(b);

let g: boolean = checker<number>(items, 5, 1);
console.log(g);