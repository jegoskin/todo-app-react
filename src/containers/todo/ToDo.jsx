import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from '../../classes/ToDoItem';
import ToDoItemComponent from './ToDoItemComponent';
import { todoAdd,todoDone } from '../../actions/todo.js';

class ToDo extends React.Component {
	constructor() {
		super();
		this.state = { 
			input: ""
		}
	}

	handleChange = (e) => {
		let a = e.currentTarget.value;
		let newState = Object.assign({}, this.state);
		newState.input = a;
		this.setState(newState);
	}

	handleClick = () => {
		let newState = Object.assign({}, this.state);
		this.props.todoAdd(newState.input);
		newState.input = "";
		this.setState(newState);
	}

	handleDone = (id) => {
		this.props.todoDone(id);
	}

	render() {
		return(
		<div>
			<input value={this.state.input} onChange={this.handleChange} />
			<button onClick={this.handleClick}>Poslat</button>
			<div>
				<ul>
					{this.props.todos.map( (item, index) => <ToDoItemComponent onDone={this.handleDone} toDoItem={item} key={index} /> )}
				</ul>
			</div>
		</div>
		)
	}
}

const mapStateToProps = (state) => ({
	todos: state.todos
})

const mapDispatchToProps = {
	todoAdd,
	todoDone
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDo);