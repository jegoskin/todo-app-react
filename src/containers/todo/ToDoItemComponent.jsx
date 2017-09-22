import React from 'react';

class	ToDoItemComponent extends React.Component {
	render() {
		return(
			<li onClick={() => this.props.onDone(this.props.toDoItem.id)} style={{backgroundColor: this.props.toDoItem.completed? 'red': 'transparent'}} >{this.props.toDoItem.note}</li>
		)
	}
}

export default ToDoItemComponent;