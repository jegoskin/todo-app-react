const todos = (state = [], action) => {
	let newState = state.slice(0);
	switch (action.type) {
		case 'TODO_ADD':
			newState.push(action.payload); 
			break;
		case 'TODO_DONE':
			let id = action.payload;
			let item = newState.find( (item) => item.id == id );
			if (item) item.done();
			else alert(`todo s id: ${id} neexistuje`); 
			break;
	}
	return newState;
}
export default todos;