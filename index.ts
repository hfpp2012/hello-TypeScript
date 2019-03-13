interface Shape {
	draw(): void;
}

// function drawShapes(shape: Shape): Shape {
// 	shape.draw();
// 	return shape;
// }

function drawShapes<T extends Shape>(shape: T): T {
	shape.draw();
	return shape;
}

let a: Shape = {
	draw: () => { }
}

drawShapes(a);

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

let c = drawShapes(circle);