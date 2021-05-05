import React, { useState } from 'react';
import { Route,  } from 'react-router-dom';
import ContactPage from '../ContactPage/ContactPage';
import Nav from '../Nav/Nav';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';

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
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;
