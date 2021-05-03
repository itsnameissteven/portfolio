import React, { useState } from 'react';
import { Route,  } from 'react-router-dom';
import ContactPage from '../ContactPage/ContactPage';
import Nav from '../Nav/Nav';

const App = () => {
  const [dropDown, setDropDown] = useState(false);

  const closeDropDown = () => {
    if(dropDown) {
      setDropDown(false)
    }
  }

  return (
    <div className="App" onClick={closeDropDown}>
      <Nav dropDown={dropDown} openDropDown={() => setDropDown(!dropDown)}/>
      <Route path='/contact' component={ContactPage} /> 
    </div>
  );
}

export default App;
