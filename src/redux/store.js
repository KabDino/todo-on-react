import { applyMiddleware, combineReducers, createStore } from 'redux';
import todoReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({ todoReducer });
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = store;

export default store;
