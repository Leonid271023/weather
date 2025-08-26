import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducer/weatherReducer.js";
import {logger} from "redux-logger/src";
import {thunk} from "redux-thunk";

const initialState = {
    weather: {}
};

export const store = createStore(weatherReducer, initialState, applyMiddleware(thunk,logger))