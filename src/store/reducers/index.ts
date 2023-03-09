import { combineReducers } from "redux";
import { CommentReducer } from "./commentReducer";
import { PostReducer } from "./postReducer";
import { TodoReducer } from "./todoReducer";
import { UserReducer } from "./usersReduxer";

export const rootReducer = combineReducers({
	post: PostReducer,
	users: UserReducer,
	comments: CommentReducer,
	todos: TodoReducer,
})

export type RootState = ReturnType<typeof rootReducer>