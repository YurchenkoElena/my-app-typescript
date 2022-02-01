import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import {RootReducer} from "./redusers";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(RootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

