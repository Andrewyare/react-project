export interface TodosState {
	todos: TodoState[],
	loading: boolean,
	error: string | null
}
export interface TodoState {
	userId: number,
	id: number,
	title: string,
	completed: boolean
}

export enum TodosActionType {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	SET_COMPLETE_TODO = 'SET_COMPLETE_TODO',
	ADD_TODO = 'ADD_TODO',
	DELETE_TODO = 'DELETE_TODO'
}
interface FetchTodosAction {
	type: TodosActionType.FETCH_TODOS,
}
interface FetchTodosSuccessAction {
	type: TodosActionType.FETCH_TODOS_SUCCESS,
	payload: TodoState[]
}
interface FetchTodosErrorAction {
	type: TodosActionType.FETCH_TODOS_ERROR,
	payload: string
}
interface AddTodoAction {
	type: TodosActionType.ADD_TODO,
	payload: TodoState
}
interface DeleteTodoAction {
	type: TodosActionType.DELETE_TODO,
	payload: number
}
interface SetCompleteTodoAction {
	type: TodosActionType.SET_COMPLETE_TODO,
	payload: number
}
export type TodoAction = FetchTodosAction | FetchTodosErrorAction | FetchTodosSuccessAction | AddTodoAction | DeleteTodoAction | SetCompleteTodoAction;