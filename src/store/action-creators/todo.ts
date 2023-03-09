import axios from "axios";
import { Dispatch } from "redux"
import { TodoAction, TodosActionType, TodoState } from "../../types/todo"

export const fetchTodos = () => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			dispatch({ type: TodosActionType.FETCH_TODOS });
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
			dispatch({ type: TodosActionType.FETCH_TODOS_SUCCESS, payload: response.data })
		} catch (error) {
			dispatch({ type: TodosActionType.FETCH_TODOS_ERROR, payload: 'Error' })
		}
	}
}
export const addNewTodo = (todo: TodoState) => {
	return { type: TodosActionType.ADD_TODO, payload: todo }
}
export const deleteTodo = (id: number) => {
	return { type: TodosActionType.DELETE_TODO, payload: id }
}
export const setCompleteTodo = (id: number) => {
	return { type: TodosActionType.SET_COMPLETE_TODO, payload: id }
}