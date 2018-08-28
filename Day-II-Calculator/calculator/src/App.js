import React from 'react';
import './App.css';
import MyDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import './components/ButtonComponents/Button.css';
// import MyNumberButton from './components/ButtonComponents/NumberButton.js';

// const zero = {
//     text: '0',
//     buttonStyle: 'wide'
// };



const App = () => {
  return (
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
      // </div>
      <div class="wrapper">
	<MyDisplay />
	<MyNumberButton text='clear' buttonStyle='wide clear'/>
	<MyNumberButton text='÷' buttonStyle='normal red'/>
	<MyNumberButton text='7' buttonStyle='normal'/>
	<MyNumberButton text='8' buttonStyle='normal'/>
	<MyNumberButton text='9' buttonStyle='normal'/>
	<MyNumberButton text='X' buttonStyle='normal red'/>
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

const MyNumberButton = (props) => {
    return (
	<button className={props.buttonStyle}>{props.text}</button>
    );
};

export default App;
