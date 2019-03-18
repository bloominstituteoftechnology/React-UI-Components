import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {
  return (
    <div>
      <HeaderContainer/> 
      <h3>Welcome to React Social Card!</h3>
      <p>
        <CardContainer/>
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
