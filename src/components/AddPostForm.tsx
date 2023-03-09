import React, { FC, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './css/style.css'

const AddPostForm: FC = () => {
	const { posts, loading, error } = useTypedSelector(state => state.post)
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [modal, setModal] = useState(false);
	const [id, setId] = useState(posts.length);
	const { addNewPost } = useActions();
	const addPost = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		addNewPost({ id: id, userId: 1, title: title, body: body });
		setBody('');
		setTitle('');
		setModal(false);
		setId(id + 1);
	}
	return (
		<div className='form__hide'>
			<div className="form__button">
				<button
					onClick={() => setModal(true)}
				>
					Add New Post
				</button>
			</div>
			<form className={modal ? "post__form active" : "post__form"}>
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
				<input
					onClick={e => addPost(e)}
					type="submit"
					value="Add post"
					className='post__btn'
				/>
			</form>
		</div>
	);
};

export default AddPostForm;