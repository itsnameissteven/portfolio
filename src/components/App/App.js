import React from 'react';
import { Route,  } from 'react-router-dom';
import './App.scss';
import ContactPage from '../ContactPage/ContactPage';
import Nav from '../Nav/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route path='/contact' component={ContactPage} /> 
    </div>
  );
}

export default App;
