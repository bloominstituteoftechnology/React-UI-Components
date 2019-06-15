import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className='calcBody'>
        <CalculatorDisplay/>
        <div>
            <ActionButton buttonStyle='clearButton' text='clear'/>
            <NumberButton buttonStyle='redButton' text='/'/>
        </div>
        <div>
            <NumberButton buttonStyle='whiteButton' text='7' />
            <NumberButton buttonStyle='whiteButton' text='8' />
            <NumberButton buttonStyle='whiteButton' text='9' />
            <NumberButton buttonStyle='redButton' text='X' />
        </div>
        <div>
            <NumberButton buttonStyle='whiteButton' text='4' />
            <NumberButton buttonStyle='whiteButton' text='5' />
            <NumberButton buttonStyle='whiteButton' text='6' />
            <NumberButton buttonStyle='redButton' text='-' />
        </div>
        <div>
            <NumberButton buttonStyle='whiteButton' text='1' />
            <NumberButton buttonStyle='whiteButton' text='2' />
            <NumberButton buttonStyle='whiteButton' text='3' />
            <NumberButton buttonStyle='redButton' text='+' />
        </div>
        <div>
            <ActionButton buttonStyle='zeroButton' text='0'/>
            <NumberButton buttonStyle='redButton' text='='/>
        </div>


      {/*<h3>Welcome to React Calculator</h3>*/}
      {/*<p>*/}
      {/*  We have given you a starter project. You'll want to build out your*/}
      {/*  components in their respective files, remove this code and replace it*/}
      {/*  with the proper components.*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  <strong>*/}
      {/*    Don't forget to `default export` your components and import them here*/}
      {/*    inside of this file in order to make them work.*/}
      {/*  </strong>*/}
      {/*</p>*/}
    </div>
  );
};

export default App;
