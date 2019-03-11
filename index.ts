interface Shape {
	draw(): void;
}

function drawShapes<S extends Shape>(shapes: S[]): void {
	shapes.forEach(shape => shape.draw())
}

class Circle implements Shape {
	draw(): void {
		console.log("drawing Circle")
	}
}

class Rectangle implements Shape {
	draw(): void {
		console.log('drawing Rectangle')
	}
}

let circle = new Circle();
let rectangle = new Rectangle();
drawShapes([circle, rectangle]);

// K keyof T, extends
function getProp<T, K extends keyof T>(key: K, obj: T): any {
	return obj[key];
}

let obj = { a: 2, b: 3, c: 4 };
let prop = getProp('c', obj);