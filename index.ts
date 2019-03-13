// import * as c from './classes';
// import { Shape, drawShapes } from './classes';
import Shape, { drawShapes } from './classes';

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