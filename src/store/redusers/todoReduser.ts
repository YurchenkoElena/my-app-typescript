import {TodoAction, TodoActionsTypes, TodoState} from "../../types/todos/todos";

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: null,
    limit: 10,
    page: 1,
    total: 0
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionsTypes.FETCH_TODOS:
            return {...state, isLoading: true}
        case TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return {...state, isLoading: false, todos:action.payload }
        case TodoActionsTypes.FETCH_TODOS_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case TodoActionsTypes.SET_TODOS_PAGE:
            return {...state, page: action.payload}
        case TodoActionsTypes.SET_TODOS_TOTAL_NUMBER:
            return {...state, total: action.payload}
        default:
            return state
    }
}