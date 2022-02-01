export enum UserActionsTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface UserState {
    users: any[],
    isLoading: boolean,
    error: null | string
}

export interface FetchUserAction {
    type: UserActionsTypes.FETCH_USERS
}

export interface FetchUserActionSuccess {
    type: UserActionsTypes.FETCH_USER_SUCCESS,
    payload: any[]
}

export interface FetchUserActionError {
    type: UserActionsTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUserAction | FetchUserActionSuccess | FetchUserActionError