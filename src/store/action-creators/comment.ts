import axios from "axios"
import { Dispatch } from "react"
import { CommentAction, CommentActionType, CommentProps } from "../../types/comment"

export const fetchComment = () => {
	return async (dispatch: Dispatch<CommentAction>) => {
		try {

			dispatch({ type: CommentActionType.FETCH_COMMENT })
			const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
			dispatch({ type: CommentActionType.FETCH_COMMENT_SUCCESS, payload: response.data })
		} catch (error) {
			dispatch({ type: CommentActionType.FETCH_COMMENT_ERROR, payload: "error" })
		}
	}
}
export const deleteComment = (id: number) => {
	return { type: CommentActionType.DELETE_COMMENT, payload: id }
}
export const addNewComment = (comment: CommentProps) => {
	return { type: CommentActionType.ADD_COMMENT, payload: comment }
}