import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import Main from './components/main/Main';

import './App.css';
import './reset.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
