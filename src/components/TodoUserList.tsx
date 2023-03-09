import React, { useEffect, useMemo, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Todo from './Todo';
import './css/style.css'
import { Link, useParams } from 'react-router-dom';

const options = ["All", "Done", "In progress"];
const TodoUserList = () => {
	const { addNewTodo } = useActions()
	const { todos } = useTypedSelector(state => state.todos)
	const { id } = useParams()
	const todosUser = todos.filter(todo => todo.userId.toString() === id)
	const [selected, setSelected] = useState(options[0]);
	let todosArray = todos;
	if (selected === options[0]) {
		todosArray = todosUser
	} else if (selected === options[1]) {
		todosArray = todosUser.filter(todo => todo.completed === true)
	} else if (selected === options[2]) {
		todosArray = todosUser.filter(todo => todo.completed === false)
	} else {
		todosArray = todosUser
	}

	const [title, setTitle] = useState('');
	const [todoId, setTodoId] = useState(todos.length);
	const [search, setSearch] = useState('');
	const seachedTodo = useMemo(() => {
		if (search) {
			return todosArray.filter(todo => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
		} else return todosArray
	}, [todosArray])
	const newTodo = () => {
		addNewTodo({ title: title, id: todoId, userId: parseInt(id ? id : "1"), completed: false })
		setTitle('')
		setTodoId(todoId + 1)
	}
	return (
		<div className='todo__page'>
			<h2 className='todo__headings'>TODO LIST</h2>
			<div className='todo__search'>
				<input type="text" placeholder='Seacrh...' value={search} onChange={e => setSearch(e.target.value)} />
			</div>
			<div className="todo__navbar">
				<button className='todo__add' onClick={() => newTodo()}>
					Add Task
				</button>
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
					type="text"
					className='todo__input'
					placeholder='Task' />
				<form className='todo__link'>
					<select
						value={selected}
						onChange={e => setSelected(e.target.value)}>
						{options.map((value) => (
							<option className='todo__option' value={value} key={value}>
								{value}
							</option>
						))}
					</select>
				</form>
			</div>
			<div className="todo__list">
				{
					seachedTodo.map(todo =>

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

export default TodoUserList;