type ListType<T> = { elements: T[] };

let numList: ListType<number> = { elements: [1, 2, 3] };
console.log(numList);

interface Item {
	name: string;
	price: number;
}

type Entity<E> = { id: number } & E;
let itemEntity: Entity<Item> = { id: 1, name: "rails365", price: 12 };
console.log(itemEntity);

interface Person {
	name: string;
}

interface Contact {
	phone: string;
}

function showPersonContact(personContact: Person & Contact): void {
	console.log(personContact)
}

let personContact: Person & Contact = { name: "Dane", phone: "111-111-111" };
showPersonContact(personContact);

interface PersonDetail {
	detail: Person & Contact;
}

let personDetail: PersonDetail = { detail: { name: "Dane", phone: "111-111-111" } };
console.log(personDetail);