import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PostTypeState } from '../types/post';

const Post: FC<PostTypeState> = ({ userId, id, title, body }) => {
	const { deletePost } = useActions()
	const { users, loading, error } = useTypedSelector(state => state.users)
	return (
		<div className='post'>
			<div className="post__head">
				<div className='post__user'>{users.find(user => user.id === userId)?.username}</div>
				<div className='post__id'>10:42</div>
				<button className="post__delete"
					onClick={() => deletePost(id)}>
					<FaTrash />
				</button>
			</div>
			<div className='post__title'>{title}</div>
			<div className='post__body'>{body}</div>
			<hr />
			<div className="post__comment">
				<Link to={"/comment/" + id}>Comments</Link>
			</div>
		</div>
	);
};

export default Post;