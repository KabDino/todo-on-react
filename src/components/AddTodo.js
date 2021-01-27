import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/reducers';

let AddTodo = (props) => {
  let [todo, setTodo] = useState('');

  let changeTodoName = (e) => {
    setTodo((todo = e.target.value));
  };

  let addNewTodo = () => {
    props.addTodo(todo, props.length);
    setTodo((todo = ''));
  };

  return (
    <div className="form-add-todo">
      <input
        value={todo}
        onChange={changeTodoName}
        className="input-add-todo"
      />
      <button onClick={addNewTodo} className="button-add-todo">
        Add
      </button>
    </div>
  );
};

let mapStateToProps = (state) => ({
  length: state.todoReducer.todoList.length,
});

export default connect(mapStateToProps, { addTodo })(AddTodo);
