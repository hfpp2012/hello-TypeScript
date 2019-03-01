// 打印机 A
class PrinterA {
	// name: string
	// type => 字符串，标识类型
	pageOrientation: "landscape";

	// 风景画
	printLandscape(): void {
		console.log("printing in landscape");
	}

	// type(): string {
	// 	return "landscape";
	// }
}

// 打印机 B
class PrinterB {
	pageOrientation: "portrait"
	// 肖像画
	printPortrait(): void {
		console.log("printing in portrait");
	}
}

function doPrint(pt: PrinterA | PrinterB): void {
	if (pt.pageOrientation === "landscape") {
		pt.printLandscape();
	} else if (pt.pageOrientation === "portrait") {
		pt.printPortrait();
	} else {
		let unknownPrinter: never = pt;
	}
}


// 接口
interface FullTimeEmployee {
	empType: "FullType";
	name: string;
	annualSalary: number;
}

interface PartTimeEmployee {
	empType: "PartTime";
	name: string;
	monthlySalary: number;
}

interface ContractEmployee {
	empType: "Contractor";
	name: string;
	hourlySalary: number;
}

//using type alias
type Employee = FullTimeEmployee | PartTimeEmployee | ContractEmployee;

function getEmployeeSalary(emp: Employee): number {
	switch (emp.empType) {
			case "FullType":
					return emp.annualSalary;
			case "PartTime":
					return emp.monthlySalary;
			case "Contractor":
					return emp.hourlySalary;
			default:
					let temp: never = emp;
					return temp;
	}
}

let contractor: ContractEmployee = {empType: "Contractor", name: "Tina", hourlySalary: 34};
let sal = getEmployeeSalary(contractor);
console.log(sal);


// enum

enum ShapeType {TRIANGLE, RECTANGLE }

interface RightAngledTriangle {
    shapeType: ShapeType.TRIANGLE;
    base: number;
    height: number;
    hypotenuse: number;
}

interface Square {
    shapeType: ShapeType.RECTANGLE;
    length: number;
    width: number;
}


type Shape = RightAngledTriangle | Square;

function getArea(shape: Shape): number {
    switch (shape.shapeType) {
        case ShapeType.TRIANGLE:
            return (shape.base * shape.height) / 2;
        case ShapeType.RECTANGLE:
            return shape.length * shape.width;
        default:
            let temp: never = shape;
            return temp;
    }
}

let shape: Square = {shapeType: ShapeType.RECTANGLE, length: 5, width: 5};
let area = getArea(shape);
console.log(area);