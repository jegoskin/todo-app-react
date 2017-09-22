let id = 1;

class ToDoItem {
	constructor(note) {
		this.id = id++;
		this.note = note;
		this.completed = false;
	}
	done(){
		this.completed = true;
	}
}

export default ToDoItem;