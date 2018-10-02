import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NumberButtons from './components/ButtonComponents/NumberButton';
import ActionButtons from './components/ButtonComponents/ActionButton';

// function NumberButton(props) {
//     return (
//       <div className = "button-house">
//         <p className = "num-square">{props.symbol.firstNum}</p>
//         <p className = "num-square">{props.symbol.secondNum}</p>
//         <p className = "num-square">{props.symbol.thirdNum}</p>
//         <p className = "num-square">{props.symbol.symbol}</p>
//       </div>
//     );
//   }
  
//   export default NumberButton;



    

ReactDOM.render(<App />, document.getElementById('root'));
