import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'

import CardContainer from './components/CardComponents/CardContainer'





//import PropTypes from "prop-types";





//MyButton Excercises from 52:15min //

const MyButton = () => <button>Click This!</button>;


const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <CardContainer />


    </div>
  );
};

export default App;


// still need to make responsive and complete link click; header set up; perhaps some stretch
