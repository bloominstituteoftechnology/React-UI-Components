import React from 'react';
import './App.css';
import './Header.css';
import './Card.css';
import HeaderContainer from './HeaderContainer';
import CardContainer from './CardContainer';

const App = () => (
  <div className='outside-container'>
    <HeaderContainer />
    <CardContainer />      
  </div>
);

export default App;
