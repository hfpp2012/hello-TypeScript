// function add(a: number, b: number) {
// 	return a + b;
// }

// const add = (a: number, b: number): number => {
// 	return a + b;
// }

// const add = (a: number, b: number = 10): void => {
// 	console.log(a + b)
// }

// const add = (a: number, b?: number): void => {
// 	if (b) {
// 		console.log(a + b);
// 	} else {
// 		console.log(a);
// 	}
// }

const add = (a: number, ...num: number[]): number => {
	return num.reduce(function(total, num) {
		return total + num
	}, a);
}

// let sum = add(10, 20);
// console.log(sum.toFixed(2));
// console.log(sum.substr(0, 3));

let sum = add(20, 20, 30, 40);
console.log(sum);