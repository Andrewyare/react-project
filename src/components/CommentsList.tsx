import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import AddCommentForm from './AddCommentForm';
import Comment from './Comment'

const CommentsList: FC = () => {
	const { comments, loading, error } = useTypedSelector(state => state.comments)
	const { postId } = useParams()
	const commentArray = comments.filter(comment => comment.postId.toString() == postId)
	return (
		<div>
			<AddCommentForm postId={postId} />
			{commentArray.map(comment =>
				<Comment
					id={comment.id}
					name={comment.name}
					email={comment.email}
					body={comment.body}
				/>
			)
			}
		</div>
	);
};

export default CommentsList;