import React, { FC, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './css/style.css'

interface props {
	postId: string | undefined
}

const AddCommentForm: FC<props> = ({ postId }) => {
	const { comments, loading, error } = useTypedSelector(state => state.comments)
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [email, setEmail] = useState('');
	const [modal, setModal] = useState(false);
	const [id, setId] = useState(comments.length);
	const { addNewComment } = useActions();
	const addComment = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		addNewComment({ id: id, postId: postId ? parseInt(postId) : 1, name: title, email: email, body: body });
		setBody('');
		setTitle('');
		setEmail('');
		setModal(false);
		setId(id + 1);
	}
	return (
		<div className='form__hide'>
			<div className="form__button">
				<button
					onClick={() => setModal(true)}
				>
					Add New Comment
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
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type="email"
					className="post__text"
					placeholder='email'
				/>
				<textarea
					value={body}
					onChange={e => setBody(e.target.value)}
					className="post__text"
					placeholder='body'
					rows={3}
				/>
				<input
					onClick={addComment}
					type="submit"
					value="Add post"
					className='post__btn'
				/>
			</form>
		</div>
	);
};

export default AddCommentForm;