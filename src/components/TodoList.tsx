import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Todo from './Todo';
import './css/style.css'
import { Link } from 'react-router-dom';

const TodoList = () => {

	const { todos } = useTypedSelector(state => state.todos);
	const setTodosComplete = () => {
		todos.filter(todo => todo.completed ? todo : null)
	}
	return (
		<div>
			<h2 className='todo__headings'>TODO LIST</h2>
			<div className="todo__list">
				{
					todos.map(todo =>
						<Todo
							id={todo.id}
							userId={todo.userId}
							title={todo.title}
							completed={todo.completed}
						/>)}
			</div>
		</div>
	);
};

export default TodoList;