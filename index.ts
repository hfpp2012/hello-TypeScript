// interface States<R> {
// 	[state: string]: R
// }

// let s: States<boolean> = { 'enabled': true, 'maximized': false };
// console.log(s);
// console.log(s['maximized']);

interface Pair<F, S> {
	first: F;
	second: S;
}

interface States<F, S> {
	[state: string]: Pair<F, S>
}

let s: States<number, boolean> = {
	'enabled': { first: 1, second: true }, 'maximized': { first: 2, second: false }
};

console.log(s);
console.log(s['enabled']);