import React from 'react';
import './CalculatorContainer.css';
import NumberButton from '../ButtonComponents/NumberButton.js';
import ActionButton from '../ButtonComponents/ActionButton.js';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay.js';

// const CalculatorContainer = props => {
//   return (
//     <div className="container">
//       <CalculatorDisplay text="0"/>
//
//       <div className="container__row">
//         <ActionButton text="clear"/>
//         <NumberButton text="&#xf7;" styles="operator"/>
//       </div>
//       <div className="container__row">
//         <NumberButton text="1"/>
//         <NumberButton text="2"/>
//         <NumberButton text="3"/>
//         <NumberButton text="&#xd7;" styles="operator"/>
//       </div>
//       <div className="container__row">
//         <NumberButton text="4"/>
//         <NumberButton text="5"/>
//         <NumberButton text="6"/>
//         <NumberButton text="&#x2212;" styles="operator"/>
//       </div>
//       <div className="container__row">
//         <NumberButton text="7"/>
//         <NumberButton text="8"/>
//         <NumberButton text="9"/>
//         <NumberButton text="&#x2b;" styles="operator"/>
//       </div>
//       <div className="container__row">
//         <ActionButton text="0"/>
//         <NumberButton text="&#x3d;" styles="operator"/>
//       </div>
//     </div>
//   );
// }

class CalculatorContainer extends React.Component {
  constructor(props) {
         super(props)
 }

 render() {
   return (
    <div className="container">
     <CalculatorDisplay text={this.props.total}/>

     <div className="container__row">
       <ActionButton text="clear" clear={this.props.clear}/>
       <NumberButton text="&#xf7;" styles="operator"/>
     </div>
     <div className="container__row">
       <NumberButton text="1"/>
       <NumberButton text="2"/>
       <NumberButton text="3"/>
       <NumberButton text="&#xd7;" styles="operator"/>
     </div>
     <div className="container__row">
       <NumberButton text="4"/>
       <NumberButton text="5"/>
       <NumberButton text="6"/>
       <NumberButton text="&#x2212;" styles="operator"/>
     </div>
     <div className="container__row">
       <NumberButton text="7"/>
       <NumberButton text="8"/>
       <NumberButton text="9"/>
       <NumberButton text="&#x2b;" styles="operator"/>
     </div>
     <div className="container__row">
       <ActionButton text="0"/>
       <NumberButton text="&#x3d;" styles="operator"/>
     </div>
    </div>
  );
 }
}

export default CalculatorContainer;
