import { TodoAction, TodosActionType, TodosState } from "../../types/todo"

const initialState: TodosState = {
	todos: [],
	loading: false,
	error: null
}
export const TodoReducer = (state = initialState, action: TodoAction): TodosState => {
	switch (action.type) {
		case TodosActionType.FETCH_TODOS:
			return { todos: [], loading: true, error: null }
		case TodosActionType.FETCH_TODOS_SUCCESS:
			return { todos: action.payload, loading: false, error: null }
		case TodosActionType.FETCH_TODOS_ERROR:
			return { ...state, loading: false, error: action.payload }
		case TodosActionType.ADD_TODO:
			return { ...state, todos: [action.payload, ...state.todos] }
		case TodosActionType.DELETE_TODO:
			return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)] }
		case TodosActionType.SET_COMPLETE_TODO:
			return {
				...state,
				todos: [...state.todos.map(
					todo => (todo.id === action.payload)
						? { ...todo, completed: !todo.completed }
						: todo)]
			}
		default:
			return state
	}
}