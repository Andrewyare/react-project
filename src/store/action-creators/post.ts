import axios from "axios"
import { Dispatch } from "redux"
import { PostAction, PostActionType, PostTypeState } from "../../types/post"

export const fetchPosts = () => {
	return async (dispatch: Dispatch<PostAction>) => {
		try {
			dispatch({
				type: PostActionType.FETCH_POSTS
			})
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			dispatch({
				type: PostActionType.FETCH_POSTS_SUCCESS,
				payload: response.data
			})
		} catch (error) {
			dispatch({
				type: PostActionType.FETCH_POSTS_ERROR,
				payload: 'error'
			})
		}
	}
}

export const addNewPost = (post: PostTypeState,) => {

	return { type: PostActionType.ADD_NEW_POST, payload: post }

}

export const deletePost = (id: number) => {
	return { type: PostActionType.DELETE_POST, payload: id }
}