import {combineReducers} from "redux";
import {userReducer} from "./userReduser";
import {todoReducer} from "./todoReduser";
import {coffeeCardReducer} from "./cofeeItemReduser";

export const RootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    coffeeCard: coffeeCardReducer
})

export type RootState = ReturnType<typeof RootReducer>