import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import "./css/style.css"

interface props {
	id: number,
	name: string,
	email: string,
	body: string
}

const Comment: FC<props> = ({ id, name, email, body }) => {

	const { deleteComment } = useActions()
	return (
		<div className='comment'>
			<div className="comment__head">
				<div className='comment__user'>{email}</div>
				<button className="comment__delete"
					onClick={() => deleteComment(id)}></button>
			</div>
			<div className='comment__title'>{name}</div>
			<div className='comment__body'>{body}</div>
		</div>
	);
};

export default Comment;