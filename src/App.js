import React, { useState } from 'react';

import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import Main from './components/main/Main';
import AddTask from './components/addTask/AddTask';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './reset.css';

function App() {
  //State for NAVIGATION
  const [activeIndex, setActiveIndex] = useState(0);
  //States for MAIN and ADDTASK
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
    {
      task: 'Ogarnij reacta',
      isActive: true,
      id: 1,
    },
    {
      task: 'Naprawić błąd :D',
      isActive: false,
      id: 2,
    },
    {
      task: 'Skoncz apke todo',
      isActive: true,
      id: 3,
    },
  ]);

  //******************************************************************* */

  //NAVIGATION
  const handleNavClick = index => {
    setActiveIndex(index);
  };
  //NAVIGATION

  //ADDTASK
  const handleSubmit = event => {
    event.preventDefault();
    const id = todos.length + 1;
    const currentElement = {
      task: inputValue,
      isActive: true,
      id,
    };
    const newTodos = todos.concat(currentElement);
    setTodos(newTodos);
    setInputValue('');
  };
  //ADDTASK
  const handleChange = event => {
    setInputValue(event.target.value);
  };
  //MAIN
  const handleCheckboxChange = id => {
    let currentTodos = todos;
    currentTodos.forEach(todo => {
      if (todo.id === id) {
        todo.isActive = !todo.isActive;
        console.log(todo.isActive);
      }
    });
    console.log(currentTodos);
    setTodos(currentTodos);
  };
  // const handleDelteTask = id => {
  //   let currentTodos = todos;
  //   currentTodos = currentTodos.filter(todo => todo.id !== id);
  //   setTodos(currentTodos);
  // };
  //Main
  return (
    <div className='container'>
      <Router>
        <Header />
        <Navigation
          items={['All', 'Active', 'Completed']}
          click={handleNavClick}
          activeIndex={activeIndex}
        />
        <AddTask
          value={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Main todos={todos} handleCheckboxChange={handleCheckboxChange} />
      </Router>
    </div>
  );
}

export default App;
