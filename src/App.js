import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
// import firebase from './firebase';

const App = (props) => {

  // // 
  // const [spells, setSpells] = React.useState([]);
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection('todo').get();
  //     setSpells(data.docs.map((doc) => doc.data()));
  //   };
  //   fetchData();
  // }, []);
  // // 

  return (
    <div className="App">
     {/* 
      <ul>
        {spells.map((spell) => (
          <li key={spell.name}>{spell.name}</li>
        ))}
      </ul>
       */}
      <h1>Todo</h1>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
