import { todoAPI } from '../api/api';

const ADD_NEW_TODO = 'ADD_NEW_TODO';
const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
const DELETE_TODO = 'DELETE_TODO';
const SET_TODOS = 'SET_TODOS';
const IS_FETCHING = 'IS_FETCHING';
const UPDATE_NAME_TODO = 'UPDATE_NAME_TODO';
const CHANGE_ORDER_TODO_LIST = 'CHANGE_ORDER_TODO_LIST';

let initialState = {
  todoList: [],
  isFetching: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.newTodo],
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.todoId),
      };
    }

    case UPDATE_NAME_TODO: {
      let newState = {
        ...state,
        todoList: [...state.todoList],
      };
      newState.todoList.map((item) => {
        return item.id === action.todoId
          ? (item.name = action.newName)
          : item.name;
      });
      return newState;
    }

    case CHANGE_COMPLETED: {
      let newState = {
        ...state,
        todoList: [...state.todoList],
      };
      newState.todoList.map((item) => {
        return item.id === action.todoId
          ? (item.completed = !item.completed)
          : item.completed;
      });
      return newState;
    }

    case SET_TODOS: {
      return { ...state, todoList: [...state.todoList, ...action.todos] };
    }

    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case CHANGE_ORDER_TODO_LIST: {
      return { ...state, todoList: action.changedTodoList };
    }

    default:
      return state;
  }
};

const setTodos = (todos) => ({
  type: SET_TODOS,
  todos,
});

const toggleIsFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});

const addTodoSuccess = (newTodo) => ({
  type: ADD_NEW_TODO,
  newTodo,
});

const deleteTodoSuccess = (todoId) => ({
  type: DELETE_TODO,
  todoId,
});

const changeCompletedSuccess = (todoId) => ({
  type: CHANGE_COMPLETED,
  todoId,
});

const updateNameTodoSuccess = (todoId, newName) => ({
  type: UPDATE_NAME_TODO,
  todoId,
  newName,
});

const changeOrderTodoListSuccess = (changedTodoList) => ({
  type: CHANGE_ORDER_TODO_LIST,
  changedTodoList,
});

export const getTodos = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    todoAPI.getTodo().then((response) => {
      dispatch(setTodos(response.docs.map((doc) => doc.data())));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const addTodo = (newTodo, length) => {
  let id = new Date().getTime();
  let order = length + 1;
  return (dispatch) => {
    todoAPI.addTodo({ name: newTodo, completed: false, id, order }).then(() => {
      dispatch(addTodoSuccess({ name: newTodo, completed: false, id, order }));
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    todoAPI.deleteTodo(String(id)).then(() => {
      dispatch(deleteTodoSuccess(id));
    });
  };
};

export const updateNameTodo = (id, name) => {
  return (dispatch) => {
    if (name !== '') {
      todoAPI.updateNameTodo(String(id), name).then(() => {
        dispatch(updateNameTodoSuccess(id, name));
      });
    }
  };
};

export const changeCompleted = (id, completed) => {
  return (dispatch) => {
    todoAPI.changeCompleted(String(id), completed).then(() => {
      dispatch(changeCompletedSuccess(id));
    });
  };
};

export const changeOrderTodoList = (whichObject, wereToMove, state) => {
  whichObject > wereToMove
    ? state.map((item) => {
        if (item.order >= wereToMove && item.order < whichObject) {
          item.order++;
        } else if (item.order === whichObject) {
          item.order = wereToMove;
        }
        return state;
      })
    : state.map((item) => {
        if (item.order <= wereToMove && item.order > whichObject) {
          item.order--;
        } else if (item.order === whichObject) {
          item.order = wereToMove;
        }
        return state;
      });

  return (dispatch) => {
    todoAPI.changeOrder(state).then(() => {
      dispatch(changeOrderTodoListSuccess(state));
    });
  };
};

export default todoReducer;
