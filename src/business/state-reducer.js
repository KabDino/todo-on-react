import { combineReducers } from "redux";

const ADD_TODO = "ADD_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";
// const SET_FILTER = "SET_FILTER";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: { 
    id: ++nextTodoId,
    content,
  },
}) 


export default combineReducers({});
