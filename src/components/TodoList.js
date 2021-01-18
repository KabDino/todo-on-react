import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { changeCompleted, deleteTodo, getTodos, updateNameTodo } from '../redux/reducers';
import Preloader from './Preloader';

const TodoList = (props) => {
  let getTodos = props.getTodos;
  React.useEffect(() => {
    getTodos();
  }, [getTodos]);
  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      {props.todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          completed={todo.completed}
          todoId={todo.id}
          name={todo.name}
          changeCompleted={props.changeCompleted}
          deleteTodo={props.deleteTodo}
          updateNameTodo={props.updateNameTodo}
        />
      ))}
    </div>
  );
};

let mapStateToProps = (state) => ({
  todoList: state.todoReducer.todoList,
  isFetching: state.todoReducer.isFetching,
});

export default connect(mapStateToProps, {
  changeCompleted,
  deleteTodo,
  getTodos,
  updateNameTodo,
})(TodoList);
