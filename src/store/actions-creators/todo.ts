import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionsTypes} from "../../types/todos/todos";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TodoActionsTypes.FETCH_TODOS_ERROR,
                payload: 'Server Error'
            })
        }
    }
}
export const fetchAllTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
           dispatch({type: TodoActionsTypes.SET_TODOS_TOTAL_NUMBER, payload: response.data.length})
        } catch (e) {
            dispatch({
                type: TodoActionsTypes.FETCH_TODOS_ERROR,
                payload: 'Server Error'
            })
        }
    }
}


export const setTodosPage = (page: number): TodoAction => {
    return {type: TodoActionsTypes.SET_TODOS_PAGE, payload: page}
}