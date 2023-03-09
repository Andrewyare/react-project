export interface CommentsState {
	comments: CommentProps[],
	loading: boolean,
	error: string | null
}
export interface CommentProps {
	postId: number,
	id: number,
	name: string,
	email: string,
	body: string
}
export enum CommentActionType {
	FETCH_COMMENT = 'FETCH_COMMENT',
	FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS',
	FETCH_COMMENT_ERROR = "FETCH_COMMENT_ERROR",
	DELETE_COMMENT = 'DELETE_COMMENT',
	ADD_COMMENT = 'ADD_COMMENT'
}
interface FetchCommentAction {
	type: CommentActionType.FETCH_COMMENT
}
interface FetchCommentSuccessAction {
	type: CommentActionType.FETCH_COMMENT_SUCCESS,
	payload: CommentProps[]
}
interface FetchCommentErrorAction {
	type: CommentActionType.FETCH_COMMENT_ERROR,
	payload: string
}
interface DeleteCommentAction {
	type: CommentActionType.DELETE_COMMENT,
	payload: number
}
interface AddCommentAction {
	type: CommentActionType.ADD_COMMENT,
	payload: CommentProps
}
export type CommentAction = FetchCommentAction | FetchCommentSuccessAction | FetchCommentErrorAction | AddCommentAction | DeleteCommentAction;