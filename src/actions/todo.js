import ToDoItem from '../classes/ToDoItem';

export const todoAdd = (note) => {
	let item = new ToDoItem(note);
	return {
		type: 'TODO_ADD',
		payload: item
	}
}

export const todoDone = (id) => ({
	type: 'TODO_DONE',
	payload: id
})