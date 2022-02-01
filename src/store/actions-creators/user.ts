import {UserAction, UserActionsTypes} from "../../types/users/users";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionsTypes.FETCH_USERS})
           const response = await axios.get('https://jsonplaceholder.typicode.com/users')
           dispatch({type: UserActionsTypes.FETCH_USER_SUCCESS, payload: response.data})
        } catch (e){
           dispatch({
              type: UserActionsTypes.FETCH_USERS_ERROR,
              payload: 'Server Error'})
        }
    }
}