import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = (props) => {
  return (
    <div className="App">
      <h1>Todo</h1>
      <main>
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
};

export default App;
