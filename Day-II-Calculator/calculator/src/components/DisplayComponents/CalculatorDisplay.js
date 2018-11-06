import React from 'react';
import './Display.css';

// class CalculatorDisplay extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: 0
//         };
//     }
// }

const CalculatorDisplay = props => <button className={props.buttonStyle}>{props.text}</button>


export default CalculatorDisplay;