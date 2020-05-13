import React from 'react';
import './App.css';
import TodoList from './container/Todolist';

function App() {
  return (
    <div className="App">
      <div>This is TodoList By Redux</div>
      <TodoList/>
    </div>
  );
}

export default App;
