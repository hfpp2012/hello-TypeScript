interface Collection<T> {
	add(t: T): void;
	remove(t: T): void;
	asArray(): T[];
}

interface Collection1<T> extends Collection<T> {
	getElementAt(index: number): T;
}

class List<T> implements Collection<T> {
	private data: T[] = [];

	constructor(elements: T[]) {
		this.data = elements;
	}

	add(t: T): void {
		this.data.push(t);
	}

	remove(t: T): void {
		let index = this.data.indexOf(t);
		if (index > -1) {
			this.data.splice(index, 1);
		}
	}

	asArray(): T[] {
		return this.data;
	}
}

let numbers: Collection<number> = new List<number>([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers);

// let strings: Collection<number> = new List<string>(["1, 2, 3", "2"]);

class BookList<T> extends List<T> {

}

let bookList: BookList<boolean> = new BookList<boolean>([true, false])
console.log(bookList);

let bookList1: BookList<number> = new BookList<number>([1, 2]);
console.log(bookList1);

class MovieList extends List<boolean> {}

let movieList: MovieList = new MovieList([true, false]);
console.log(movieList);