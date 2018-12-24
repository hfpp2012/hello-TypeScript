let a: any;

a = 10;
a = "hfpp2012";
a = [1, 2, 3];

const log = (value: any) => {
	console.log(typeof value);
	if (typeof value === 'number') {
		return `your number is ${value}`;
	}

	if (typeof value === "string") {
		return `your name is ${value}`;
	}

	throw new Error(`Expected string or number, got ${value}.`);
}

console.log(log(10));

let b: any[];

b = [1, 2, "2012", [1, 2]];