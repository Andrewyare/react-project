import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Todo from './Todo';

const UncompletedTodoList = () => {

	const { todos } = useTypedSelector(state => state.todos)
	const { id } = useParams()
	const todosUser = todos.filter(todo => todo.userId.toString() === id)
	return (
		<div>
			<h2 className='todo__headings'>UNCOMPLETED TODO LIST</h2>
			<div className="todo__list">
				{todosUser.map(todo => (!todo.completed ?
					<Todo
						id={todo.id}
						userId={todo.userId}
						title={todo.title}
						completed={todo.completed}
					/>
					: <></>
				))}
			</div>
		</div>
	);
};

export default UncompletedTodoList;