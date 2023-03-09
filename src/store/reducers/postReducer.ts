import { PostAction, PostActionType, PostState } from "../../types/post";

const initialState: PostState = {
	posts: [],
	loading: false,
	error: null
}

export const PostReducer = (state = initialState, action: PostAction): PostState => {
	switch (action.type) {
		case PostActionType.FETCH_POSTS:
			return { ...state, loading: true }
		case PostActionType.FETCH_POSTS_SUCCESS:
			return { ...state, posts: action.payload, loading: false }
		case PostActionType.FETCH_POSTS_ERROR:
			return { ...state, error: action.payload, loading: false }
		case PostActionType.ADD_NEW_POST:
			return { ...state, posts: [action.payload, ...state.posts] }
		case PostActionType.DELETE_POST:
			return { ...state, posts: [...state.posts.filter(post => post.id !== action.payload)] }
		default:
			return state
	}
}