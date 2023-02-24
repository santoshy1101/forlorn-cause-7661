import {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import { bagReducer } from "./Bag/reducer";
import { menReducer } from "./Men/men.reducer";
import { womenReducer } from "./Women/women.reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({ 
    bagReducer:bagReducer,
    menReducer:menReducer,
    womenReducer:womenReducer
})

export const store=legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)))
