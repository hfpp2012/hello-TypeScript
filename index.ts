// x? number | undefined
function show(x?: number | null): void {
	if (x === undefined) {
		console.log("value not set");
	} else if (x === null) {
		console.log("value is null");
	} else {
		console.log(x);
	}
}

let x = 10;
// undefined
let y;
let z = null;

show(x);
show(y);
show(z);