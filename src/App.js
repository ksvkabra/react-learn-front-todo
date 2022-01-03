import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import HeaderWrapper from './components/HeaderWrapper';

// component - functional component

// conditional rendering

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
      copyOfTodo.push({
        title: newTodo,
        id: Math.floor(Math.random() * 10000),
      });
      return copyOfTodo;
    });
  }

  async function fetchFakeTodos() {
    const fakeTodos = await fetch('http://localhost:3003/todos');
    console.log(fakeTodos);
    const data = await fakeTodos.json();
    setTodos(data);
  }

  // called when component is mounted
  useEffect(function () {
    console.log('mounted');
    fetchFakeTodos();
  }, []);

  // useEffect(() => {
  //   console.log('useEffect');
  //   alert('componet updated');
  // }, [todos]);

  useEffect(function () {
    console.log('new effect');
    // alert('alert everytime');
  });

  // conditional rendering way 1
  // if (todos.length === 0) {
  //   return <div>Loading...</div>;
  // }

  // if (todos.length > 200) {
  //   return <div>too many todos</div>;
  // }

  return (
    <HeaderWrapper>
      {/* 
      header
      todos list
      todo form
      footer
    */}
      <TodoForm handleNewTodo={handleNewTodo} />
      {/* {todos.length ? (
        todos.length > 200 ? (
          <div>too many todos</div>
        ) : (
          <TodoList todos={todos} />
        )
      ) : (
        <div>Loading...</div>
      )} */}
      {(todos.length === 0 && <div>loading...</div>) ||
        (todos.length > 200 && <div>too many todos</div>) || (
          <TodoList todos={todos} />
        )}
    </HeaderWrapper>
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

// lifecycle of a component
// mount - jab component first time render hota h
// update - jab component update hota h
// unmount - jab component screen se hat jaata h

// short circuit logic
// const x = 1 || 0;

// let x;
// if (1) {
//   x = 1;
// } else if (0) {
//   x = 0;
// } else {
//   x = undefined;
// }

// const y = 0 || 2;

// if (0) {
//   y = 0;
// } else if (2) {
//   y = 2;
// } else {
//   y = undefined;
// }

// const a = 1 && false;
