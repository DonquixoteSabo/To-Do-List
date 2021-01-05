import React, { useState } from 'react';

import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import Main from './components/main/Main';
import AddTask from './components/addTask/AddTask';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './reset.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
    {
      task: 'Ogarnij reacta',
      isActive: true,
      id: 1,
    },
    {
      task: 'Ogarnij Mobx',
      isActive: false,
      id: 2,
    },
    {
      task: 'Skoncz apke todo',
      isActive: true,
      id: 3,
    },
  ]);
  // const handleCheckboxChange = (event) =>{

  // }
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

  const handleNavClick = index => {
    setActiveIndex(index);
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

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
        <Main todos={todos} />
      </Router>
    </div>
  );
}

export default App;
