
import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";

import{ reducer as adminReducer } from "./AdminRedux/AdminReducer"
import thunk from "redux-thunk";

let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootreducer=combineReducers({adminReducer})
export let store=legacy_createStore(rootreducer,composeEnhancer(applyMiddleware(thunk)))