import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import Main from './components/main/Main';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './reset.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Navigation />
        <Main />
      </Router>
    </div>
  );
}

export default App;
