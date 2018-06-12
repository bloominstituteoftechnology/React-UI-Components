import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div>
	<HeaderContainer />
	<a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer"><CardContainer /></a>
    </div>
  );
};

export default App;
