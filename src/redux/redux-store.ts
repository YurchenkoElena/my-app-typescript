import { compose } from "@reduxjs/toolkit";
import {combineReducers, createStore} from "redux";
import coffeeitemitemReducer from "./coffeeitem/coffeeitem";

let reducers = combineReducers({
    coffeeitem: coffeeitemitemReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducers,
    composeEnhancers()
);

export default store;