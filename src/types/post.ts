export interface PostState {
	posts: any[];
	loading: boolean;
	error: null | string;
}

export interface PostTypeState {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export enum PostActionType {
	FETCH_POSTS = 'FETCH_POSTS',
	FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
	FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
	ADD_NEW_POST = 'ADD_NEW_POST',
	DELETE_POST = "DELETE_POST"
}

interface FetchPostsAction {
	type: PostActionType.FETCH_POSTS
}

interface FetchPostsSuccessAction {
	type: PostActionType.FETCH_POSTS_SUCCESS,
	payload: any[]
}

interface FetchPostsErrorAction {
	type: PostActionType.FETCH_POSTS_ERROR,
	payload: string
}

interface AddNewPostAction {
	type: PostActionType.ADD_NEW_POST,
	payload: PostTypeState
}
interface DeletePost {
	type: PostActionType.DELETE_POST,
	payload: number
}

export type PostAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction | AddNewPostAction | DeletePost;