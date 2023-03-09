import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { TodoState } from '../types/todo';
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

const Todo: FC<TodoState> = ({ userId, id, title, completed }) => {
	const { deleteTodo, setCompleteTodo, fetchUsers } = useActions()

	const { users } = useTypedSelector(state => state.users)
	return (
		<div className='todo'>
			<div className="todo__head">
				<label className='todo__check'>
					<input checked={completed ? true : false} type="checkbox" onClick={() => setCompleteTodo(id)} />
					<span className="checkmark"></span>
				</label>
				<div className="todo__title">
					<div className={completed ? "todo__done" : "todo__body"}>{title}</div>
					<div className="todo__date">4:23 AM, 24/02/2023</div>
				</div>
			</div>
			<div className="todo__buttons">

				<button className="todo__delete"
					onClick={() => deleteTodo(id)}>
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default Todo;