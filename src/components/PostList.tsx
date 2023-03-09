import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import AddPostForm from './AddPostForm';
import "./css/style.css"
import Post from './Post';

const PostList: FC = () => {
	const { posts, loading, error } = useTypedSelector(state => state.post)
	return (
		<div className='post__page'>
			<div className="post__button">
			</div>
			<div className="post__list">

				{posts.map(post =>
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

export default PostList;