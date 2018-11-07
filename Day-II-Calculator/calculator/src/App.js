import React, { Fragment} from "react";
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const numberButtons = [
  
  {
    number: '7',
  },
  {
    number: '8',
  },
  {
    number: '9',
  },
  {
    number: '/',
  },

  {
    number: '4',
  },
  {
    number: '5',
  },
  {
    number: '6',
  },
  {
    number: 'x',
  },

  {
    number: '1',
  },
  {
    number: '2',
  },
  {
    number: '3',
  },
  {
    number: '-',
  },
  {
    number: '+',
  },
  {
    number: '=',
  },
];

const actionButtons = [
  {
    symbol: '/',
  },
  {
    symbol: 'X',
  },
  {
    symbol: '-',
  },
  {
    symbol: '+',
  },
  {
    symbol: '=',
  },
];

const App = () => {
  return (
    <Fragment>
      <h1>Calculator:</h1>
      <div class="daNumbers">
        {numberButtons.map(number => {return (<NumberButton theNumbers={number} />)})}
      </div> 
    </Fragment>
);
}

export default App;
