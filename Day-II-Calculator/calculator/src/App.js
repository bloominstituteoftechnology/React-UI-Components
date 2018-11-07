import React, { Fragment } from 'react';
import './App.css';

// Components
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ButtonContainer from './components/ButtonComponents/ButtonContainer'

const App = () => {
  return (
    <Fragment>
      <CalculatorDisplay value='0' />
      <ButtonContainer />
    </Fragment>
  );
};

export default App;
