interface States {
	[index: string]: boolean;
}

let s: States = { 'enabled': true, 'maximized': false }
console.log(s);
console.log(s["enabled"]);

interface States1 {
	// An index signature parameter type must be 'string' or 'number'.
	[index: number]: number;
}

let s1: States1 = [12, 34, 45, 1];
console.log(s1);
console.log(s1[0]);

let s2: number[] = [1, 2, 3];

// let x = {a: 1, b: 2};
// x['a'] // 1
// x['b'] // 2