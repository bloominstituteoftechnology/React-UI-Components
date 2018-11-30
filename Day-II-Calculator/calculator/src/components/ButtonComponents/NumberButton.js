import React from 'react';
import './Button.css';

const NumberButtons = props => {
  return (
    <button
      className={props.class}
      value={props.text}
      onClick={() => {
        if (props.class !== 'clear') {
          props.eventListener(props.text);
        } else {
          props.eventListenerClear();
        }
      }}>
      {props.text}
    </button>
  );
};

export default NumberButtons;
// const NumberButtons = props => {
//   return (
//     <div className="numbers">
//       <ClearButton />
//       <NumOne />
//       <NumTwo />
//       <NumThree />
//       <NumFour />
//       <NumFive />
//       <NumSix />
//       <NumSeven />
//       <NumEight />
//       <NumNine />
//       <NumZero />
//     </div>
//   );
// };
//
// const ClearButton = props => {
//   return (
//     <button className="clear" data-num="0">
//       Clear
//     </button>
//   );
// };
//
// const NumOne = props => {
//   return (
//     <button className="nButtons" data-num="1">
//       1
//     </button>
//   );
// };
//
// const NumTwo = () => {
//   return (
//     <button className="nButtons" data-num="2">
//       2
//     </button>
//   );
// };
//
// const NumThree = () => {
//   return (
//     <button className="nButtons" data-num="3">
//       3
//     </button>
//   );
// };
//
// const NumFour = () => {
//   return (
//     <button className="nButtons" data-num="4">
//       4
//     </button>
//   );
// };
//
// const NumFive = () => {
//   return (
//     <button className="nButtons" data-num="5">
//       5
//     </button>
//   );
// };
//
// const NumSix = () => {
//   return (
//     <button className="nButtons" data-num="6">
//       6
//     </button>
//   );
// };
//
// const NumSeven = () => {
//   return (
//     <button className="nButtons" data-num="7">
//       7
//     </button>
//   );
// };
//
// const NumEight = () => {
//   return (
//     <button className="nButtons" data-num="8">
//       8
//     </button>
//   );
// };
//
// const NumNine = () => {
//   return (
//     <button className="nButtons" data-num="9">
//       9
//     </button>
//   );
// };
//
// const NumZero = () => {
//   return (
//     <button className="nButtons zero" data-num="0">
//       0
//     </button>
//   );
// };
