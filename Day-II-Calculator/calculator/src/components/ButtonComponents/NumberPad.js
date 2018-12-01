import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';


const NumberPad = props => {
  return (
    <div className="number-pad">
      <ActionButton text="clear" buttonStyle="" />
      <div className="integers">
        <NumberButton text="9" buttonStyle="number" />
        <NumberButton text="8" buttonStyle="number" />
        <NumberButton text="7" buttonStyle="number" />
        <NumberButton text="6" buttonStyle="number" />
        <NumberButton text="5" buttonStyle="number" />
        <NumberButton text="4" buttonStyle="number" />
        <NumberButton text="3" buttonStyle="number" />
        <NumberButton text="2" buttonStyle="number" />
        <NumberButton text="1" buttonStyle="number" />
      </div>
      <ActionButton text="0" buttonStyle="number" />
    </div>
  )
}

// class NumberPad extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       values: [9,8,7,6,5,4,3,2,1]
//     }
//   }

//   render() {
//     return (
//       <div className="number-pad">
//         <ActionButton text="clear" buttonStyle="" />
//         <div className="integers">
//           {this.state.values.map(value => {
//             return (
//               <NumberButton text={`${value}`} buttonStyle="number" />
//             )
//           })}
//         </div>
//         <ActionButton text="0" buttonStyle="number" />
//       </div>
//     )
//   }
// }

export default NumberPad;