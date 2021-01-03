import React, { useState } from 'react';

import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import Main from './components/main/Main';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './reset.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = index => {
    setActiveIndex(index);
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
        <Main />
      </Router>
    </div>
  );
}

export default App;
