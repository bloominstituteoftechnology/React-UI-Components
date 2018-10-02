import React from 'react';
import './Button.css';


// const ActionButtons = () => {
//     return (
//         <div className = "action-square">
//             <h1>clear</h1>
//         </div>
//     );
// };

// export default ActionButtons;

function ActionButtons(props) {
    return (
      <div className = "button-house">
        <h2 className = "action-square">{props.symbol.action}</h2>
        <h2 className = "num-square symbol-color">{props.symbol.symbol}</h2>
      </div>
    );
  }
  
  export default ActionButtons;