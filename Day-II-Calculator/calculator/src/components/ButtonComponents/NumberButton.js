import React from 'react';
import './Button.css';

// const NumberButton = props => {
//     return (
//         <div className='number-button'>
//             {/* <button className={props.buttonStyle}>{props.text}</button> */}
//             {/* <button>Click Me!</button> */}
//             <button className={`basicButtonStyles ${props.buttonStyles}`}>Hello</button>

//             BasicButton.defaultProps = {
//                 buttonStyles: 'teal'
//             }
//         </div>
//     )
// }

// const buttonStyle = {
//     background: "white",
//     fontSize: 40, 
//     border: "2px solid silver",
//     padding: "20px",
// };

// const NumberButton = props => <button style={props.buttonStyle}>{props.text}</button>

const NumberButton = props => <button className={`btn-styles ${props.buttonStyle}`}>{props.text}</button>

// NumberButton.defaultProps = {
//     buttonStyle: {color: "purple", fontSize: 40, border: "2px solid purple"}
// }


export default NumberButton