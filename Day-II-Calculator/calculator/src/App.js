import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonCreator from './components/ButtonComponents/ButtonCreator';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay text='0'/>
      <div className="buttonsContainer">
        <div className="leftContainer">
          {/* <ActionButton /> */}
          <ActionButton text='clear' actionStyle='actionButton'/>
          <ButtonCreator text='7' />
          <ButtonCreator text='8' />
          <ButtonCreator text='9' />
          <ButtonCreator text='4' />
          <ButtonCreator text='5' />
          <ButtonCreator text='6' />
          <ButtonCreator text='1' />
          <ButtonCreator text='2' />
          <ButtonCreator text='3' />
          <ActionButton text='0' actionStyle='actionButton'/>
        </div>
        {/* <Operators /> */}
        <div className="rightContainer">
        <ButtonCreator text='&divide;' operatorStyle='operatorButton' />
        <ButtonCreator text='&times;' operatorStyle='operatorButton' />
        <ButtonCreator text='-' operatorStyle='operatorButton' />
        <ButtonCreator text='+' operatorStyle='operatorButton' />
        <ButtonCreator text='=' operatorStyle='operatorButton' />
        </div>
      </div>
      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
    </div>
  );
};

export default App;
