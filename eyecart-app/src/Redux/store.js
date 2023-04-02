
import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";

import{ reducer as adminReducer } from "./AdminRedux/AdminReducer"
import thunk from "redux-thunk";
import { reducer as CartReducer } from "../Account/Redux/CartRedux/reducer";

let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootreducer=combineReducers({adminReducer,CartReducer})

export let store=legacy_createStore(rootreducer,composeEnhancer(applyMiddleware(thunk)))