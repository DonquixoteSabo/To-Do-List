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

  const handleNavClick = index => {
    setActiveIndex(index);
  };

  const [inputValue, setInputValue] = useState('');
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
        <AddTask value={inputValue} handleChange={handleChange} />
        <Main />
      </Router>
    </div>
  );
}

export default App;
