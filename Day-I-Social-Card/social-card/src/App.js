import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className="app-container">
     <HeaderContainer />
     {/* <CardContainer /> */}

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
