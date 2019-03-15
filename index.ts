// import sum from 'lodash-ts/sum';
import * as _ from 'lodash';

class Person {
	firstName: string;
	lastName: string;
}

let foo = new Person();
foo.firstName = "11";

console.log(foo.firstName);

let a = [1, 2, 3];
let c = _.reverse(a)
// let c = sum(a);
console.log(c);