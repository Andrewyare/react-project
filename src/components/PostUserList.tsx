import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import "./css/style.css"
import Post from './Post';

const PostUserList = () => {
	const { addNewPost } = useActions();
	const { posts } = useTypedSelector(state => state.post);
	const { userId } = useParams()
	const userPosts = posts.filter(post => post.userId.toString() === userId)

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [modal, setModal] = useState(false);
	const [id, setId] = useState(posts.length);
	const newPost = () => {
		addNewPost({ id: id, userId: parseInt(userId ? userId : '1'), title: title, body: body });
		setBody('');
		setTitle('');
		setModal(false);
		setId(id + 1);
	}
	return (
		<div className='post__page'>
			<div className="post__button">
				<div className='form__hide'>
					<div className="form__button">
						<button
							onClick={() => setModal(true)}
						>
							Add New Post
						</button>
					</div>
					<div className={modal ? "post__form active" : "post__form"}>
						<input
							value={title}
							onChange={e => setTitle(e.target.value)}
							type="text"
							className="post__text"
							placeholder='title'
						/>
						<textarea
							value={body}
							onChange={e => setBody(e.target.value)}
							className="post__text"
							placeholder='body'
							rows={3}
						/>
						<button
							onClick={() => newPost()}
							className='post__btn'
						>Add post</button>
					</div>
				</div>
			</div>
			<div className="post__list">
				{userPosts.map(post =>
					<Post
						userId={post.userId}
						id={post.id}
						title={post.title}
						body={post.body}
					/>
				)}
			</div>
		</div>
	);
};

export default PostUserList;