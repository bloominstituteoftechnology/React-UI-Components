import React from 'react';
import './App.css';
import MyDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import './components/ButtonComponents/Button.css';
import MyNumberButton from './components/ButtonComponents/NumberButton.js';
import MyActionButton from './components/ButtonComponents/ActionButton.js';


const App = () => {
  return (
      <div class="wrapper">
	<MyDisplay />
	<MyNumberButton text='clear' buttonStyle='wide clear'/>
	<MyNumberButton text='÷' buttonStyle='normal red'/>
	<MyNumberButton text='7' buttonStyle='normal'/>
	<MyNumberButton text='8' buttonStyle='normal'/>
	<MyNumberButton text='9' buttonStyle='normal'/>
	<MyNumberButton text='x' buttonStyle='normal red'/>
	<MyNumberButton text='4' buttonStyle='normal'/>
	<MyNumberButton text='5' buttonStyle='normal'/>
	<MyNumberButton text='6' buttonStyle='normal'/>
	<MyNumberButton text='—' buttonStyle='normal red'/>
	<MyNumberButton text='1' buttonStyle='normal'/>
	<MyNumberButton text='2' buttonStyle='normal'/>
	<MyNumberButton text='3' buttonStyle='normal'/>
	<MyNumberButton text='+' buttonStyle='normal red'/>
	<MyNumberButton text='0' buttonStyle='wide'/>
	<MyNumberButton text='=' buttonStyle='normal red'/>
      </div>
  );
};

// const MyNumberButton = (props) => {
//     return (
// 	<button className={props.buttonStyle}>{props.text}</button>
//     );
// };

export default App;
