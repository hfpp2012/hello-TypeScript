interface States {
	[index: string]: boolean;
}

let s: States = { 'enabled': true, 'maximized': false }
console.log(s);
console.log(s["enabled"]);

interface States1 {
	// An index signature parameter type must be 'string' or 'number'.
	// 这种方式定义的数组没有 push length join 等属性或方法
	[index: number]: number;
}

let s1: States1 = [12, 34, 45, 1];
// console.log(s1.length);
// console.log(s1.join('-'));
// console.log(s1.push(23));
// console.log(s1);
// console.log(s1[0]);

let s2: number[] = [1, 2, 3];
// console.log(s2.length);
// console.log(s2.join('-'));
// s2.push(23);

// let x = {a: 1, b: 2};
// x['a'] // 1
// x['b'] // 2

interface States2 {
	[index: number]: boolean;
	length: number;
	pop(): boolean;
}

let s3: States2 = [true, false, false, false];
console.log(s3);
console.log(s3.length);
console.log(s3.pop());

interface States3 {
	[state: string]: any;
	mainScreen: string;
}

let s4: States3 = { mainScreen: 'sss' };
// s4['enabled'] = false;
// s4['maximized'] = true;

interface NestedCss {
	color?: string;
	nest?: {
		[selector: string]: NestedCss
	}
}

let example: NestedCss = {
	color: "red",
	nest: {
		'.subclass': {
			color: "blue"
		}
	}
}