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
var add = function (a, b) {
    if (b === void 0) { b = 10; }
    if (b) {
        console.log(a + b);
    }
    else {
        console.log(a);
    }
};
// let sum = add(10, 20);
// console.log(sum.toFixed(2));
// console.log(sum.substr(0, 3));
var sum = add(20, 20);
console.log(sum);
