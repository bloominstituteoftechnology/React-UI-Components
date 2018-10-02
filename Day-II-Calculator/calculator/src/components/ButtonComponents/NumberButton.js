import React from 'react';
import './Button.css';


// const NumberButton = () => {
//     return (
//         <div className = "num-square">
//             <p>7</p>
//         </div>
//     );
// };

// export default NumberButton;

function NumberButton(props) {
    return (
      <div className = "button-house">
        <h2 className = "num-square">{props.symbol.firstNum}</h2>
        <h2 className = "num-square">{props.symbol.secondNum}</h2>
        <h2 className = "num-square">{props.symbol.thirdNum}</h2>
        <h2 className = "num-square symbol-color">{props.symbol.symbol}</h2>
      </div>
    );
  }
  
  export default NumberButton;