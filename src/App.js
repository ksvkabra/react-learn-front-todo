import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

// component - functional component

// component
// class component
// function component - create a function
// pascal case
function ComponentTest() {
  const todosArray = useState([]);
  const todos = todosArray[0];
  const setTodos = todosArray[1];

  function handleNewTodo(newTodo) {
    setTodos(function (todosLastInstance) {
      const copyOfTodo = Array.from(todosLastInstance);
      copyOfTodo.push(newTodo);
      return copyOfTodo;
    });
  }

  return (
    <div>
      {/* 
      header
      todos list
      todo form
      footer
    */}
      <TodoForm handleNewTodo={handleNewTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default ComponentTest;

// pascal case - KeshavKabra
// camelCase - sunilJangid
// kebab-case - sunil-jangid

// const state = useState('asdas');
// const value = state[0];
// const setValue = state[1];

// setValue('newVlaue');
// setValue(function (latestValue) {
//   return 'newVlaue';
// });
