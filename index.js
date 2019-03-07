// interface States<R> {
// 	[state: string]: R
// }
var s = {
    'enabled': { first: 1, second: true }, 'maximized': { first: 2, second: false }
};
console.log(s);
console.log(s['enabled']);
