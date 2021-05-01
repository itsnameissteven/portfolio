import React from 'react';
import { Route,  } from 'react-router-dom';
import './App.scss';
import ContactPage from '../ContactPage/ContactPage';

const App = () => {
  return (
    <div className="App">
      <nav>

      </nav>
      <Route path='/contact' component={ContactPage} /> 
    </div>
  );
}

export default App;
