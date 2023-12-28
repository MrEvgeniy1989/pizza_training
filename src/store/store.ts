import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import {pizza_reducer} from "./reducers/pizza_reducer.ts";
import {appReducer} from "./reducers/app-reducer.ts";

const rootReducer = combineReducers({
    app: appReducer,
    pizzas: pizza_reducer,
})

export const store = legacy_createStore(rootReducer, undefined,  applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>