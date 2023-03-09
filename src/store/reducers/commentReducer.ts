import { CommentAction, CommentActionType, CommentsState } from "../../types/comment";

const initialState: CommentsState = {
	comments: [],
	loading: false,
	error: null
}

export const CommentReducer = (state = initialState, action: CommentAction): CommentsState => {
	switch (action.type) {
		case CommentActionType.FETCH_COMMENT:
			return { ...state, loading: true }
		case CommentActionType.FETCH_COMMENT_SUCCESS:
			return { comments: action.payload, loading: false, error: null }
		case CommentActionType.FETCH_COMMENT_ERROR:
			return { ...state, loading: false, error: action.payload }
		case CommentActionType.DELETE_COMMENT:
			return { ...state, comments: [...state.comments.filter(comment => comment.id !== action.payload)] }
		case CommentActionType.ADD_COMMENT:
			return { ...state, comments: [action.payload, ...state.comments] }
		default:
			return state
	}
}