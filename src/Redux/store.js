import {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux"
import {reducer as bagReducer} from "./Bag/reducer"
import thunk from "redux-thunk"


const composeEnhancer=window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose;

const rootReducer=combineReducers({ bagReducer})

const store=legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk)))

export  {store};