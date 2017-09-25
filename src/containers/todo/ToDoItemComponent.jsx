import React from 'react';

class	ToDoItemComponent extends React.Component {
	render() {
		return(
			<li onClick={() => this.props.onDone(this.props.toDoItem.id)} style={{textDecoration: this.props.toDoItem.completed? 'line-through': 'none'}} >{this.props.toDoItem.note}</li>
		)
	}
}

export default ToDoItemComponent;