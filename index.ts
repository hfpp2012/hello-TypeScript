interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

class Todo1 {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

let todo: Todo = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

let todos: Todo1[] = [
	{
		"userId": 1,
		"id": 1,
		"title": "delectus aut autem",
		"completed": false
	},
	{
		"userId": 1,
		"id": 2,
		"title": "quis ut nam facilis et officia qui",
		"completed": false
	},
	{
		"userId": 1,
		"id": 3,
		"title": "fugiat veniam minus",
		"completed": false
	}
]