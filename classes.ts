export default interface Shape {
	draw(): void;
}

// function drawShapes(shape: Shape): Shape {
// 	shape.draw();
// 	return shape;
// }

export function drawShapes<T extends Shape>(shape: T): T {
	shape.draw();
	return shape;
}