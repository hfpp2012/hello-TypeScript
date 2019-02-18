// 1

let a: any;

a = function(): void {
	console.log('It work');
}

function fun(): any {
	return function(): void {
		console.log('It work');
	}
}

// 2

let c: Function;

c = function(): void {
	console.log('It work');
}

// c = "xxx"


// 3

let d: (para: string) => string;

d = function(pass: string): string {
	return pass;
}

// 4

type e = (para: string) => string;

const f:e = function(pass: string): string {
	return pass;
}

// 5

interface g {
	(para: string): string;
}

const h:g = (pass: string) => pass;