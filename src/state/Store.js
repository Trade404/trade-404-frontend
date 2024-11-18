import { thunk } from "redux-thunk";
import authReducer from "./auth/Reducer";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import coinReducer from "./coin/Reducer";
import walletReducer from "./wallet/Reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    coin:coinReducer,
    wallet:walletReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))