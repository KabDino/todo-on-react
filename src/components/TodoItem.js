import React, { useState } from 'react';

const TodoItem = (props) => {
  let [updatingTodo, setUpdatingTodo] = useState('');

  let changeTodoName = (e) => {
    setUpdatingTodo((updatingTodo = e.target.value));
  };

  let updateNameTodo = () => {
    props.updateNameTodo(props.todoId, updatingTodo);
  };

  let changeCompleted = () => {
    props.changeCompleted(props.todoId, props.completed);
  };

  let deleteTodo = () => {
    props.deleteTodo(props.todoId);
  };

  return (
    <div
      todo-id={props.todoId}
      className={
        props.completed === true ? 'todo-item completed' : 'todo-item'
      }>
      
      <div className="todoTitle">
        <div onClick={changeCompleted} className="todo-marker" />
        <input
          defaultValue={props.name}
          onChange={changeTodoName}
          className="nameTodo"
        />
      </div>
      
      <div onClick={updateNameTodo} className="button-update-todo">
        &#x270E;
      </div>
      <div onClick={deleteTodo} className="button-delete-todo">
        &#10006;
      </div>
    </div>
  );
};

export default TodoItem;