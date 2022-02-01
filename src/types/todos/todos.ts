export enum TodoActionsTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
    SET_TODOS_TOTAL_NUMBER = 'SET_TODOS_TOTAL_NUMBER'
}

export interface TodoState {
    todos: any[],
    isLoading: boolean,
    error: null | string
    page: number
    limit: number
    total: number
}

export interface FetchTodoAction {
    type: TodoActionsTypes.FETCH_TODOS
}

export interface FetchTodoActionSuccess {
    type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}

export interface FetchTodoActionError {
    type: TodoActionsTypes.FETCH_TODOS_ERROR,
    payload: string
}

export interface SetTodoPageAction {
    type: TodoActionsTypes.SET_TODOS_PAGE,
    payload: number
}

export interface SetTodosTotalNumberAction {
    type: TodoActionsTypes.SET_TODOS_TOTAL_NUMBER,
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoActionSuccess | FetchTodoActionError | SetTodoPageAction | SetTodosTotalNumberAction